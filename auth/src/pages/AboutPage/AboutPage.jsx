import React, { useState } from 'react';
import axios from 'axios';
import './AboutPage.css';
import Video from '../../img/1.mp4';

const AboutPage = () => {
  const [connectValues, setConnectValues] = useState({
    name: '',
    email: '',
    comment: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setConnectValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    //Basic validation
    if (!connectValues.name || !connectValues.email || !connectValues.comment) {
      alert('All fields are required');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/feedBack', connectValues);
      console.log(response.data);
      setConnectValues({
        name: '',
        email: '',
        comment: '',
      });
    } catch (error) {
      console.error('Error registering account', error);
      alert('Failed to create account');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='body'>
      <div className="void">1</div>
      <div className="void">1</div>
      <div className="void">1</div>
      <div className="void">1</div>
      <header>About US</header>
      <hr />

      <video src={Video} className='video' autoPlay={true} controls={false} loop={true} />
      <h2>Welcome to Page Paradise</h2>
      <p className="para">
        We are a cozy independent bookstore located in the heart of the city. Our passion is connecting readers with their next favorite book. From bestsellers to hidden gems, we carefully curate our selection to provide something for every reader. Our store is a haven for those who cherish the tactile experience of browsing shelves, discovering new authors, and finding unexpected treasures. Whether you are a lifelong bibliophile or a casual reader, you will find a welcoming space to explore and indulge your love of literature.
      </p>

      <div className="wrapper2">
        <div className="left">
          <img src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?size=338&ext=jpg&ga=GA1.1.672697106.1717632000&semt=sph" alt="" className="photo" />
        </div>
        <div className="center"></div>
        <div className="right3">
          <h2>Our Mission</h2>
          <p className="para">
            At Page Paradise, we believe that books have the power to transport us to new worlds, spark our imaginations, and connect us with different perspectives. Our mission is to create a sanctuary for book lovers, where they can discover their next literary adventure and escape the hustle and bustle of everyday life. We are committed to fostering a community of readers who appreciate the written word and the rich experiences it offers.

            Books have a unique ability to inspire, educate, and entertain. We strive to provide a diverse and inclusive selection that reflects the wide range of human experiences and voices. Our curated collection includes contemporary fiction, classic literature, non-fiction, poetry, and children's books, ensuring that readers of all ages and interests can find something that resonates with them.
          </p>
        </div>
      </div>

      <div className="wrapper2">
        <div className="left2">
          <h2 className="joinus">Join Us</h2>
          <p className='para'>
            Whether you are looking for your next great read, seeking a quiet place to escape, or wanting to connect with fellow book enthusiasts, Page Paradise is the place for you. Come visit us and experience the magic of a bookstore that truly values its readers and the transformative power of books. Together, let's embark on countless literary adventures and create a vibrant community of readers.
          </p>
        </div>
        <div className="center"></div>
        <div className="right">
          <div className="con">
            <h2>Connect Us</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" onChange={handleChange} name='name' value={connectValues.name} placeholder='Username' />
              <input type="email" onChange={handleChange} name='email' value={connectValues.email} placeholder='Email' />
              <input type="text" onChange={handleChange} name='comment' value={connectValues.comment} placeholder='Comment' />
              <button className="submit" disabled={loading}>{loading ? 'Submitting...' : 'Send'}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
