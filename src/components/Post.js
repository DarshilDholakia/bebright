import InputOption from "./InputOptions";
import React from "react";
// import "../css/Post.css"
import {
    Avatar,
    Card,
    CardContent,
    CardActions,
    CardHeader,
    CardMedia,
    Collapse,
    IconButton,
    Typography,
} from "@material-ui/core";
import { styled } from "@mui/material/styles";
// import ThumbUpIcon from '@material-ui/icons/ThumbUp';
// import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import {
    CommentOutlined,
    FavoriteOutlined,
    ExpandMore as ExpandMoreIcon,
} from "@material-ui/icons";
import InputOptions from "./InputOptions";
import postService from "../services/post.service";
import commentService from "../services/comment.service";
import CreateIcon from '@mui/icons-material/Create';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
}));

const Post = ({ post, user }) => {
    const [expanded, setExpanded] = React.useState(false);

    const [commentText, setCommentText] = React.useState('');

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleAddLike = () => {
        postService.addLike(post.postId)
            .then((response) => {
                return response.data;
            })
    }

    const submitComment = () => {
        commentService.addComment(post.postId, commentText)
        .then((response) => {
            return response.data;
        })
    }

    // const [postCheck, setPostCheck] = useState(false)

    // useEffect(async () => {
    //     await postService.checkIfPostBelongsToCurrentUser().then((response) => setPostCheck(response))
    // }, []);

    return (
        <div style={{ margin: "50px 0" }}>
            <Card>
                <CardHeader
                    avatar={
                        <Avatar
                            aria-label="User Profile Picture"
                            src={user.profilePicURL}
                        />
                    }
                    title={post.username}
                    subheader={post.createdAt}
                />
                <CardMedia
                    component="img"
                    height="500"
                    image={post.imageURL}
                    alt={post.description}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {post.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites"
                        onClick={handleAddLike}>
                        <FavoriteOutlined />{post.likes}
                    </IconButton>
                    <IconButton aria-label="share"
                        onClick={handleExpandClick}
                    >
                        <CommentOutlined />
                    </IconButton>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show comments"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>

                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        {post.comments.map((comment) => {
                            return (
                                <>
                                    <CardHeader
                                        avatar={
                                            <Avatar
                                                aria-label="User Profile Picture"
                                                src={user.profilePicURL}
                                            />
                                        }
                                        title={comment.username}
                                        subheader={comment.createdAt}
                                    />
                                    <Typography paragraph>{comment.commentText}</Typography>
                                </>
                            );
                        })}
                    </CardContent>
                    <CreateIcon />
                    <form>
                        <input value={commentText} onChange={e => setCommentText(e.target.value)} type="text" placeholder="Write a comment" />
                        <button onClick={submitComment} type="submit">Send</button>
                    </form>
                </Collapse>
            </Card>
        </div>
    );
};

export default Post;
