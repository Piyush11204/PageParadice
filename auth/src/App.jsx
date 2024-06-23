
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./pages/Home";
import Book from "./pages/Book";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AboutPage from "./pages/AboutPage";
import Footer from "./components/Footer";



const App = () => {
  
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      //not this one
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  console.log(user)

  return (
    <BrowserRouter>
      <div>
        <Navbar user={user} />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/Book/:id"
            element={user ? <Book /> : <Navigate to="/login" />}
            
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
