import InputOption from "./InputOptions";
import React, {forwardRef, useEffect, useState} from "react";
import "./Post.css";
import { Avatar } from '@material-ui/core'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import { Edit } from "@material-ui/icons";
import InputOptions from "./InputOptions";
import postService from "../../services/post.service";

const Post =  forwardRef (({ name, description, message, photoUrl, ref }) => {

    const [postCheck, setPostCheck] = useState(false)

    useEffect(async () => {
        await postService.checkIfPostBelongsToCurrentUser().then((response) => setPostCheck(response))
    }, []);

    /*
    in the backend checks if the posts belong to the user - its a boolean
    so we need to call this end point - top right of a posts that is yours 
    - you can see the pencil edit sign - so that you can edit your own posts yourself - if its true its only for the posts that belongs to you
    false - if it belongs to someone else 

    if true - then posts belong to user - allow to edit 
    if false - then posts belong to user - don't allow edit 
    return all posts in list 

    end point loops through all posts 
    might need a map function to map through it
    */

    return (
        <div ref ={ref} className ='post'>
        <div className="post__header">
            <Avatar src={photoUrl}>{name[0]}</Avatar>
            <div className="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>

         <div className="post__body">
             <p>{message}</p>
         </div>

         <div className="post__buttons">
             <InputOption Icon = {ThumbUpIcon}  title ="Like" color ="gray"/>
             <InputOption Icon = {ChatOutlinedIcon}  title ="Comment" color ="gray"/>
            
                {/* need to make sure this only appears for own posts */}
             <InputOption Icon = { Edit }  title ="Edit" color ="gray"/>
         </div>   
        </div>
    )
})

export default Post;