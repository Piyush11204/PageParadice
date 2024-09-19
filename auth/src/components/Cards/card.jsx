import React from 'react'
import './card.css';
import { Link } from 'react-router-dom';



const card = ({ post }) => {

  return (
    <div>

      <div className='card'>
          
        
          <h3 className="title"> {post.title} </h3>

          <img src={post.img} alt="" className="img" />
          <p className='author'>author: {post.author}</p>
          <Link className='link' to={`/Book/${post.id}`}>
          <button className='btn'>Read more</button>
          </Link>
        

      </div>

    </div >



  )
}

export default card