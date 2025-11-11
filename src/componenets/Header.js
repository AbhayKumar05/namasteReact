import { LOGO_URL } from "../util/constnts";
import { useState } from "react";
import {Link} from "react-router-dom";
import About from "./About";

const Header = () => {

    const [Login, setLogin] = useState("Login");


    return (
        <div className="header">
            <div className="logo-container">
                <img 
                className="logo" 
                src={LOGO_URL}
                alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/" >Home</Link>
                    </li>
                    <li>
                        <Link to="About"> About Us</Link>
                    </li>
                    <li>
                        <Link to="Contact"> Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={() => {
                        Login === "Login" ? setLogin("Logout") : setLogin("Login");
                    }} >{Login}</button>
                </ul>
            </div>
        </div>
    );
}

export default Header;