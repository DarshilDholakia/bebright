import React, { useState, useEffect } from 'react';
import "./Timeline.css";
import InputOptions from "./InputOptions.js"
import Post from './Post'
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from '@material-ui/icons/Image';
import { Subscriptions } from '@material-ui/icons';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import FlipMove from "react-flip-move";
import axios from 'axios'; 
import postService from '../../services/post.service';

export default function Timeline() {
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);
    
    useEffect(async () => {
        await postService.getPostsByMultipleOffices().then((response) => setPosts(response.data))
    }, []);

    useEffect(async () => {
        await postService.getPostsByOfficeAndTeam().then((response) => setPosts(response.data))
    }, []);

    useEffect(async () => {
        await postService.getPostsByOffice().then((response) => setPosts(response.data))
    }, []); 

    return (
        <div className="timeline">
            <div className="timeline__inputContainer">
                <div className="timeline__input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="Start a post" />
                        <button onClick={postService.addPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="timeline__inputOptions">
                    <InputOptions Icon={ImageIcon} title="Photo" color="#70B5F9" />
                </div>
            </div>
            
            <hr/>

            {/* Posts */}
            <FlipMove>
                {posts.map(( post ) => (
                    <Post
                        key={post.postId}
                        name={post.username}
                        description={post.description}
                        message={post.comments}
                        photoUrl={post.imageURL}
                    />
                ))}
            </FlipMove>
        </div>
    )
}