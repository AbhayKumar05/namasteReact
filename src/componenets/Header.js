import { LOGO_URL } from "../util/constnts";
import { useState } from "react";

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
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
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