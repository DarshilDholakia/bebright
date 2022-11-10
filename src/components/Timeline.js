import image1 from "../assets/stock.jpg"
import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";

const Timeline = () => {

    const [profilePicURL, setProfilePicURL] = useState('');

    useEffect(() => {
        setProfilePicURL(JSON.parse(localStorage.getItem('user_object')).profilePicURL)
    }, [])

    return (
        <>
            <h1>Timeline</h1>
            <Avatar src={profilePicURL} />
        </>

    )
}

export default Timeline;