import React, { useState } from 'react'
import Google from '../img/google.png'
import Facebook from '../img/facebook.png'
import Github from '../img/github.png'
import axios from "axios";
import "./Login.css";


const Login = () => {
    const google = () => {
        window.open("http://localhost:5000/auth/google", "_self")
    };

    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        password: "",
      });
      const [loading, setLoading] = useState(false);
    
      const handleChange = ({ target: { name, value } }) => {
        setFormValues((prevValues) => ({
          ...prevValues,
          [name]: value,
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
    
        //Basic validation
        if (!formValues.name || !formValues.email || !formValues.password) {
          alert("All fields are required");
          setLoading(false);
          return;
        }
    
        try {
          const response = await axios.post("http://localhost:5000/register", formValues);
          console.log(response.data);

    
          setFormValues({
            name: "",
            email: "",
            password: "",
          });
        } catch (error) {
          console.error("Error registering account", error);
          alert("Failed to create account");
        } finally {
          setLoading(false);
        }
      };




    return (
        <div className="login">
            <h1 className="loginTitle">Choose a Login method</h1>
            <div className="wrapper">
                <div className="left">
                    <div className="loginButton google" onClick={google}>
                        <img src={Google} alt="" className="icon" />
                        Google
                    </div>
                    <div className="loginButton facebook">
                        <img src={Facebook} alt="" className="icon" />
                        Facebook
                    </div>
                    <div className="loginButton Github">
                        <img src={Github} alt="" className="icon" />
                        Github
                    </div>
                </div>
                <div className="center">
                    <div className="line" />
                    <div className="or">OR</div>
                </div>
                <div className="right">
                    <form onSubmit={handleSubmit}>
                        <input type="text" onChange={handleChange} name='name' value={formValues.name} placeholder='Username' />
                        <input type="email" onChange={handleChange} name='email' value={formValues.email} placeholder='Email' />
                        <input type="password" onChange={handleChange} name='password' value={formValues.password} placeholder='Password' />
                        <button className="submit" disabled={loading}>{loading ? "Creating Account..." : "Create Account"}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login