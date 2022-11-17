import React, { useEffect, useState } from 'react';
import '../css/ProfilePage.css';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import InterestBox from './InterestBox';
import interestService from '../services/interest.service';
import userService from '../services/user.service';
import ProfileNavbar from './ProfileNavbar';
import postService from '../services/post.service';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Avatar
} from "@material-ui/core";

const ProfilePage = () => {

    const [interestList, setInterestList] = useState([]);
    const [userListOfListsByInterest, setuserListOfListsByInterest] = useState([])
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

    const [posts, setPosts] = useState([])

    useEffect(() => {
        postService.getPostsByUser()
            .then((response) => {
                setPosts(response);
            })
        console.log(posts)

        interestService.getUsersInterests()
            .then((response) => {
                // console.log(response)
                setInterestList(response)
            })
        // console.log(interestList)
    }, [])

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user_object"))
        setUser(storedUser);
    }, [localStorage.getItem("user"), localStorage.getItem("user_object")])

    // useEffect(() => {
    //     interestList.map((interest) => {
    //         userService.getUsersByOfficeAndInterest(interest)
    //         .then((response) => {

    //             userListOfListsByInterest.push(response.data)
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    //     })
    // }, [interestList])

    return (
        <>
            <ProfileNavbar user={user} />
            <div class="container">
                <div class="interest-container">
                    {interestList.map((interest) => {
                        // userListOfListsByInterest.map((individualListOfUsersByInterest) => {
                        return <InterestBox key={interest}
                            // individualListOfUsersByInterest={individualListOfUsersByInterest} 
                            interest={interest} />
                        // })
                    })}
                </div>
                <div class="sidebar-container">
                    <div className="sidebar__top">
                        <Avatar src={user.profilePicURL} />
                    </div>

                    <div className="sidebar__stats">
                        <div className="sidebar__stat">
                            <p> {user.username} </p>
                        </div>
                        <div className="sidebar__stat">
                            <p> {user.email} </p>
                        </div>
                        <div className="sidebar__stat">
                            <p> {user.offices} </p>
                        </div>
                        <div className="sidebar__stat">
                            <p> {user.teams} </p>
                        </div>
                    </div>
                </div>
                <div class="carousel-container">
                    <Carousel variant="dark" className='carousel'>

                        {/* {posts.map(post => {
                            <Carousel.Item>
                                <Card>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={post.imageURL}
                                        alt={post.description}
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            {post.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Carousel.Item> */}
                        {/* // })
                        // } */}

                        <Carousel.Item>
                            <img
                                className="carousel-img d-block w-100"
                                src={image1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="carousel-img d-block w-100"
                                src={image2}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="carousel-img d-block w-100"
                                src={image3}
                                alt="Third slide"
                            />
                        </Carousel.Item>

                        {/* {posts.map(post => {
                            <Carousel.Item>
                                <img
                                    className="carousel-img d-block w-100"
                                    src={post.imageURL}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        })} */}
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default ProfilePage;