import React from 'react';
import "./Book.css";

import { posts } from './data'
import { Link, useLocation } from 'react-router-dom';

const Book = () => {

   const location = useLocation();
   const path = location.pathname.split('/')[2];
   const post = posts.find((p)=>p.id.toString()===path)
  return (
    <div className="post">
    <div className="void">1</div>
    <div className="void">1</div>
    <div className="void">1</div>
    <div className="void">1</div>
    
    <img  src={post.img} alt="" className="postimg" />
    <h1 className="postTitle">{post.title}</h1>
    <hr className='line2' />
   
    <h5 className="auth">Auther: {post.author}</h5>
    <p className="postDesc">{post.desc}</p>
    <Link  className="lists " to = "/">back</Link>
    </div>
    
  )
}

export default Book