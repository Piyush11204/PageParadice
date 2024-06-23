import React from 'react'
import './Navbar.css';


import { Link } from 'react-router-dom';
// import AboutPage from '../pages/AboutPage';


const Navbar = ({ user }) => {
    const logout = () => {
        

        // http://localhost:5000/auth/logout we have to use this URL but for some error we are redirecting to homepage
        //http://localhost:3000
        window.open("http://localhost:5000/auth/logout", "_self");

    }
    return (
        <div className='Navbar'>
            <div className='Navbar__logo'>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/010/619/663/small/reading-book-logo-free-vector.jpg" alt="" className="avatar" />
            </div>
            <span className="logo"><Link className='link' to='/'>Pages Paradice</Link>
           <Link className=" about link"  to="/AboutPage" >About Us</Link>
            </span>{
                user ?<>
                <ul className="list">
                
                    
                    <li className="listItem">
                        <img src={user.photos[0].value} alt="" className="avatar" />
                    </li>
                    <li className="listItem">{user.name}</li>
                </ul>
                <div></div>
               <li className="listItem" onClick={logout}>logout</li></> : <><Link className='listItem about link' to="/login" >Login</Link></>
            }

            
            
            
        </div >
    )
}

export default Navbar
