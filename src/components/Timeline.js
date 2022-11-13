import image1 from "../assets/stock.jpg"
import { Avatar, FormHelperText, IconButton } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import TimelineNavbar from "./TimelineNavbar";
import postService from '../services/post.service'
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import { Image } from "@mui/icons-material";
import InputOptions from "./InputOptions";
import FlipMove from "react-flip-move";
import Post from "./Post";
import "../css/Timeline.css"
import UploadImage from "./UploadImage";

const Timeline = () => {

    const [user, setUser] = useState({
        userId: '',
        email: '',
        offices: [],
        password: '',
        profilePicURL: '',
        roles: [],
        teams: [],
        username: ''
    })

    const uploadImageRef = useRef()

    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);
    const [offices, setOffices] = useState('');
    const [teams, setTeams] = useState('');

    const [userImage, setUserImage] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');
    const [imagePreview, setImagePreview] = useState("")

    useEffect(() => {
        postService.getPostsByMultipleOffices()
            .then((response) => setPosts(response.data))
    }, []);

    // useEffect(() => {
    //     console.log(posts)
    //     postService.getAllPosts()
    //         .then((response) => {
    //             setPosts(response.data)
    //             console.log(posts)
    //         })
    // }, [])

    // useEffect(() => {
    //     postService.getPostsByOfficeAndTeam().then((response) => setPosts(response.data))
    // }, [teams]);

    // useEffect(() => {
    //     postService.getPostsByOffice().then((response) => setPosts(response.data))
    //     // add logic to clear the team filter if only office changed
    // }, [offices]);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user_object"))
        setUser(storedUser)
    }, [localStorage.getItem("user"), localStorage.getItem("user_object")])

    const sendPost = e => {
        e.preventDefault();

        if (description === "") {
            return setError("Please have a post description")
        }
        if (userImage === "") {
            return setError("Please upload an image")
        }

        setError("")

        console.log(`The description is ${description} and the image URL is ${userImage}`)
        postService.addPost(description, userImage)
        setDescription('')
        setUserImage('')
    };

    const handleNewImagePreview = (e) => {
        setImagePreview(e.target.files[0]);
    };

    const handleNewUserImage = (imageDownloadUrl) => {
        setUserImage(imageDownloadUrl);
    }

    return (
        <>
            <TimelineNavbar user={user} />
            <div className="timeline">
                <div className="timeline__inputContainer">
                    <div className="timeline__input">
                        <CreateIcon />
                        <form>
                            <input value={description} onChange={e => setDescription(e.target.value)} type="text" placeholder="Start a post" />
                            <button onClick={sendPost} type="submit">Send</button>
                        </form>
                        {/* <label> */}
                        {/* <input
                                ref={uploadImageRef}
                                name="upload-img-input"
                                accept="image/*"
                                type="file"
                                // style={{display: 'none'}}
                                onChange={handleNewImagePreview}
                            /> */}
                        {/* <IconButton onClick={() => {
                                console.log(uploadImageRef.current)
                                // uploadImageRef && uploadImageRef.current.
                            }}>
                                <Image />
                            </IconButton> */}
                        {/* </label> */}
                        <FormHelperText error>{error}</FormHelperText>
                        <div className="timeline__inputOptions">

                            {/* <InputOptions Icon={ImageIcon} title="Photo" color="#70B5F9" /> */}
                            <UploadImage handleNewUserImage={handleNewUserImage} />
                        </div>
                    </div>

                </div>

                <hr />

                {/* Posts */}
                {/* <FlipMove> */}
                <div>
                    {posts.map((post) => (
                        <Post
                            key={post.postId}
                            post={post}
                            user={user}
                        />
                    ))}
                </div>
                {/* </FlipMove> */}
            </div>
        </>

    )
}

export default Timeline;