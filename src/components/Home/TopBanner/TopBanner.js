import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../../Header/Header.css'
import bannerOne from '../../../images/beautiful-luxury-outdoor-swimming-pool-hotel-resort.jpg';
import bannerTwo from '../../../images/tidy-hall-with-two-pictures-wall.jpg'

const TopBanner = () => {
    return (
        <div className='top-banner'>
            <Carousel fade>
                <Carousel.Item >
                    <img
                        className="banner-img w-100 h-75"
                        src={bannerOne}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>A Five star hotel</h3>
                        <p>And we like to keep it that way.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="banner-img w-100 h-75"
                        src={bannerTwo}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Double Room</h3>
                        <p>$98.45 per night on this winter.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default TopBanner;