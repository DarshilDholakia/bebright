import { Avatar } from '@material-ui/core';
import React from 'react';
import '../css/ProfilePage.css';
import Carousel from 'react-bootstrap/Carousel';

const ProfilePage = () => {
    return (
        <>
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

            <div className="carousel">
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=First slide&bg=f5f5f5"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>First slide label</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Second slide&bg=eee"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5>Second slide label</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Third slide&bg=e5e5e5"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5>Third slide label</h5>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
        </>
    )
}

export default ProfilePage;