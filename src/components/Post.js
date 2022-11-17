import InputOption from "./InputOptions";
import React, { useEffect, useState } from "react";
import "../css/Post.css"
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
    Box
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
import userService from "../services/user.service";
import SendIcon from '@mui/icons-material/Send';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';

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

    const [postersProfilePic, setPostersProfilePic] = useState('');

    const [date, setDate] = useState(post.createdAt);

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

    // useEffect(() => {
    //     setDate(post.createdAt.replace('T', ' '));
    // }, [post])

    useEffect(() => {
        userService.getUserByUsername(post.username)
            .then((response) => {
                setPostersProfilePic(response.data.profilePicURL);
            })
    }, [])

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
                            src={postersProfilePic}
                        />
                    }
                    title={post.username}
                    subheader={`${date.substring(11, 16)} ${date.substring(8, 10)}-${date.substring(5, 7)}-${date.substring(0, 4)}`}
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
                                        subheader={`${comment.createdAt.substring(11, 16)} ${comment.createdAt.substring(8, 10)}-${comment.createdAt.substring(5, 7)}-${comment.createdAt.substring(0, 4)}`}
                                    />
                                    <Typography paragraph>{comment.commentText}</Typography>
                                    <hr />
                                </>
                            );
                        })}
                    </CardContent>
                        <Box component="form" noValidate autoComplete="off">
                            <FormControl sx={{ width: '25ch',
                        mb: 4 }}>
                                <OutlinedInput value={commentText} onChange={e => setCommentText(e.target.value)} type="text" placeholder="Please enter comment" />
                            </FormControl>
                            <IconButton aria-label="share"
                                onClick={submitComment}
                            >
                                <SendIcon />
                            </IconButton>
                        </Box>
                </Collapse>
            </Card>
        </div>
    );
};

export default Post;
