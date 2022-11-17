import image1 from "../assets/stock.jpg"
import { Avatar, FormHelperText, Grid, IconButton } from "@mui/material";
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
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import userService from "../services/user.service";

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
    const [offices, setOffices] = useState([]);
    const [teams, setTeams] = useState([]);

    const [userImage, setUserImage] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');
    const [imagePreview, setImagePreview] = useState("")

    // STATES FOR FILTER OPTIONS
    const [officeValue, setOfficeValue] = useState(offices[0]);
    const [inputOfficeValue, setInputOfficeValue] = useState('');

    const [teamValue, setTeamValue] = useState(teams[0]);
    const [inputTeamValue, setInputTeamValue] = useState('');

    // STATE FOR CONDITIONAL RENDERING OF CREATE POST COMPONENT
    const [displayCreatePost, setDisplayCreatePost] = useState(false);
    const [displayCreatePostAfterPosting, setDisplayCreatePostAfterPosting] = useState(true);

    // const [postersProfilePic, setPostersProfilePic] = useState('');

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user_object"))
        setUser(storedUser)
    }, [localStorage.getItem("user"), localStorage.getItem("user_object")])


    useEffect(() => {
        if (posts.length === 0) {
            postService.getPostsByMultipleOffices()
                .then((response) => setPosts(response.data))
        }
    }, []);

    useEffect(() => {
        if (offices.length === 0) {
            userService.getUsersOffices()
                .then((response) => {
                    setOffices(response.data);
                })
        }
    }, [])

    const handleOfficeFilterChange = (value) => {
        console.log('value!', value)
        postService.getPostsByOffice(value)
            .then((response) => setPosts(response))
    }

    // useEffect(() => {
    //     postService.getPostsByOffice(officeValue).then((response) => setPosts(response.data))
    //     // add logic to clear the team filter if only office changed
    // }, [officeValue]);

    const handleTeamFilterChange = () => {
        postService.getPostsByOfficeAndTeam(inputOfficeValue, inputTeamValue)
            .then((response) => setPosts(response.data))
    }

    // useEffect(() => {
    //     postService.getPostsByOfficeAndTeam(officeValue, teamValue).then((response) => setPosts(response.data))
    // }, [teamValue]);


    useEffect(() => {
        userService.getUsersTeams()
            .then((response) => {
                setTeams(response.data);
            })
    }, [])

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
        setDisplayCreatePostAfterPosting(false)
    };

    const handleNewImagePreview = (e) => {
        setImagePreview(e.target.files[0]);
    };

    const handleNewUserImage = (imageDownloadUrl) => {
        setUserImage(imageDownloadUrl);
    }

    var today = new Date();
    var timeInHours = today.getHours();
    // let startTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 8, 0, 0);
    // let endTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 19, 0, 0);

    useEffect(() => {
        if (8 < timeInHours && timeInHours < 19) {
            setDisplayCreatePost(true);
        }
        else {
            setDisplayCreatePost(false);
        }
    }, [])

    return (
        <>
            <TimelineNavbar user={user} />
            <div className="timeline">

                <Grid container spacing={33}>
                    <Grid item xs={12} md={6}>
                        <Autocomplete
                            // disablePortal
                            inputValue={inputOfficeValue}
                            onInputChange={(event, newInputValue) => {
                                setInputOfficeValue(newInputValue);
                                console.log('input change running', event, newInputValue)
                                handleOfficeFilterChange(newInputValue);
                            }}
                            id="offices"
                            options={offices}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Office" />}
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Autocomplete
                            // disablePortal
                            inputValue={inputTeamValue}
                            onInputChange={(event, newInputValue) => {
                                setInputTeamValue(newInputValue);
                            }}
                            value={teamValue || null}
                            onChange={(event, newValue) => {
                                setTeamValue(newValue);
                                if (!officeValue) {
                                    // handleTeamFilterChange();
                                }
                            }}
                            id="teams"
                            options={teams}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Team" />}
                        />
                    </Grid>
                </Grid>

                {displayCreatePost ?
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

                    </div> : <></>
                }

                <hr />

                {/* Posts */}
                {/* <FlipMove> */}
                <div>
                    {posts.map((post) => (
                        < Post
                            key = { post.postId }
                            post = { post }
                            user = { user }
                        />
                    ))}
                </div>
                {/* </FlipMove> */}
            </div>
        </>

    )
}

export default Timeline;