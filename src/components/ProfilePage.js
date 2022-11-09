import { Avatar } from '@material-ui/core';
import React from 'react';
import '../css/ProfilePage.css';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

const ProfilePage = () => {
    return (
        <>
        <div className='interest-container'>
            <p>Interest Container</p>
        </div>

        <div className='sidebar-carousel-container'>
            <div className="sidebar">
                <div className="sidebar__top">
                    {/* <Avatar src={user.photoUrl} className="sidebar__avatar"> 
                {user.email[0].toUpperCase()}</Avatar> */}
                    <Avatar src="/broken-image.jpg" />
                    <h2>displayName</h2>
                </div>

                <div className="sidebar__stats">
                    <div className="sidebar__stat">
                        <p>Email</p>
                    </div>
                    <div className="sidebar__stat">
                        <p>Offices</p>
                    </div>
                    <div className="sidebar__stat">
                        <p>Teams</p>
                    </div>
                </div>
            </div>

            {/* <div className="carousel"> */}
            <Carousel variant="dark" className='carousel'>
                <Carousel.Item>
                    <img
                        className="carousel-img d-block w-100"
                        src={image1}
                        alt="First slide"
                    />
                    {/* <Carousel.Caption>
                        <h5>First slide label</h5>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carousel-img d-block w-100"
                        src={image2}
                        alt="Second slide"
                    />
                    {/* <Carousel.Caption>
                        <h5>Second slide label</h5>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carousel-img d-block w-100"
                        src={image3}
                        alt="Third slide"
                    />
                    {/* <Carousel.Caption>
                        <h5>Third slide label</h5>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
            {/* </div> */}
            </div>
        </>
    )
}

export default ProfilePage;