import { LOGO_URL } from "../util/constnts";
import { useState, useContext } from "react";
import {Link} from "react-router-dom";
import About from "./About";
import useOnlineStatus from "../util/useOnlineStatus";
import Grocery from "./Grocery";
import userContext from "../util/userContext";

const Header = () => {

    const [Login, setLogin] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const loggedInUser = useContext(userContext);


    const cart = useSelector((store) => store.cart);

    return (
        <div className="header flex justify-between shadow-md">
            <div className="logo-container justify-between"> 
                <img 
                className="logo w-32" 
                src={LOGO_URL}
                alt="logo" />
            </div>
            <div className="nav-items align-items-center">
                <ul className="flex py-10 space-x-5">
                    <li>
                        {onlineStatus ? "✅" : "🔴"}
                    </li>
                    <li>
                        <Link to="/" >Home</Link>
                    </li>
                    <li>
                        <Link to="About"> About Us</Link>
                    </li>
                    <li>
                        <Link to="Contact"> Contact Us</Link>
                    </li>
                    <li>
                        <Link to="Grocery"> Grocery</Link>
                    </li>
                    <li>Cart</li>
                    <li>{loggedInUser.loggedInUser}</li>
                    <button className="login-btn mr-2 bg-blue-800 px-3 text-white"  onClick={() => {
                        Login === "Login" ? setLogin("Logout") : setLogin("Login");
                    }} >{Login}</button>
                    
                </ul>
            </div>
        </div>
    );
}

export default Header;