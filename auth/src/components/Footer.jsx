import React from "react";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faGithub,
    faFacebook,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="item1">
                    
                </div>

                <div className="item2">
                    <span style={{ paddingRight: 5 }}>Copyright </span>
                    <FontAwesomeIcon icon={faCopyright} />{" "}
                    <span style={{ paddingLeft: 5 }}>
                        {new Date().getFullYear()} Page Paradise. All Rights
                        Reserved.
                    </span>
                </div>
                <a
                    href="https://github.com/Piyush11204"
                    target="_blank"
                    className="item3"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                    href="https://www.instagram.com/piyush.afk/"
                    target="_blank"
                    className="item4"
                >
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                    href="https://www.facebook.com/profile.php?id=100025479591948"
                    target="_blank"
                    className="item5"
                >
                    <FontAwesomeIcon icon={faFacebook} />
                </a>

                
            </div>
        </footer>
    );
};

export default Footer;