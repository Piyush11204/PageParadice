import React from 'react';
import Carousel from '../../components/Carousel/Carousel.jsx'; // Adjust the path as needed
import { posts } from '../BooksDetailsPage/data.js';
import Card from "../../components/Cards/card.jsx";
import "./Home.css";

const Home = () => {
    return (
        <div className="home">
            <Carousel />
            {posts.map(post => <Card key={post.id} post={post} />)}
        </div>
    );
};

export default Home;
