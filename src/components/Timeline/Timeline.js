import React, { useState, useEffect } from 'react';
import "./Timeline.css";
import InputOption from './InputOption'
import Post from './Post'
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import FlipMove from "react-flip-move";
import axios from 'axios'; 
import postService from '../../services/post.service';

export default function Timeline() {
    const user = useSelector(selectUser)
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);
    

    useEffect(() => {
        db.collection("posts")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) =>
                setPosts(snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
                )
            );
    }, []);

    useEffect(async () => {
        const results = await 
            postService.getPostsByMultipleOffices().then()
    
        setPosts(results.posts)
    }, []);

    useEffect(async () => {
        const results = await 
            postService.getPostsByOffice().then()
    
        setPosts(results.posts)
    }, []);

    useEffect(async () => {
        const results = await 
            postService.getPostsByOfficeAndTeam().then()
    
        setPosts(results.posts)
    }, []);

    useEffect(async () => {
        const results = await 
            postService.checkIfPostBelongsToCurrentUser().then()
    
        setPosts(results.posts)
    }, []);

    /*
    in the backend checks if the posts belong to the user - its a boolean
    so we need to call this end point - top right of a posts that is yours 
    - you can see the pencil edit sign - so that you can edit your own posts yourself - if its true its only for the posts that belongs to you
    false - if it belongs to someone else 

    if true - then posts belong to user - allow to edit 
    if false - then posts belong to user - don't allow edit 
    return all posts in list 
    */


    // useEffect(async () => {
    //     const results = await 
    //         postService.getPostsByUser().then()
    
    //     setPosts(results.posts)
    // }, []);
    

    // useEffect(() => {
        

    // }, []);


    return (
        <div className="timeline">
            <div className="timeline__inputContainer">
                <div className="timeline__input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="Start a post" />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="timeline__inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#7FC15E" />
                    <InputOption Icon={EventNoteIcon} title="Event" color="#E7A33E" />
                    <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#F5987E" />
                </div>
            </div>
            <hr/>

            {/* Posts */}
            <FlipMove>
                {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                    <Post
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        photoUrl={photoUrl}
                    />
                ))}
            </FlipMove>
        </div>
    )
}