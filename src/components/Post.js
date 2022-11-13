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

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
          <IconButton aria-label="add to favorites">
            <FavoriteOutlined />
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
                  <Typography paragraph>{comment.text}</Typography>
                </>
              );
            })}
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};

export default Post;
