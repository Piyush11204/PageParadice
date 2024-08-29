import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

// Sample image URLs from the internet
const posts = [
    { id: 1, title: 'Image 1', img: 'https://img.freepik.com/free-vector/horizontal-sale-banner-template-world-book-day-celebration_23-2150225054.jpg' },
    { id: 2, title: 'Image 2', img: 'https://img.freepik.com/free-vector/social-media-promo-template-world-book-day-celebration_23-2150225039.jpg' },
    { id: 3, title: 'Image 3', img: 'https://img.freepik.com/free-vector/minimal-book-club-facebook-cover_23-2149758174.jpg' },
    { id: 4, title: 'Image 4', img: 'https://img.freepik.com/free-vector/minimal-book-club-youtube-thumbnail_23-2149758159.jpg' },
    { id: 5, title: 'Image 5', img: 'https://img.freepik.com/free-vector/minimal-book-club-facebook-post_23-2149758177.jpg' },
];

const Carousel = () => {
    const settings = {
        dots:false,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2700,
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                {posts.map(post => (
                    <div key={post.id}>
                        <img src={post.img} alt={post.title} className="carousel-image" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
