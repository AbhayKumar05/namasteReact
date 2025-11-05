import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img 
                className="logo" 
                src="https://images-platform.99static.com/v84irzbNBd5aawXGKXfH4SEjcn0=/0x0:960x960/500x500/top/smart/99designs-contests-attachments/117/117132/attachment_117132760" 
                alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

const RestaurantCard = (props) => {
    const {Restaurant, Cuisine, Rating} = props;
    return ( 
        <div className="restaurant-card">
            <img 
            className="restaurant-image"
            src="https://www.foxrc.com/wp-content/uploads/2024/09/restaurants-concept-cdo-00.jpg"
            alt="restaurant-logo"
            />
            <h3>{props.Restaurant}</h3>
            <h4>{props.Cuisine}</h4>
            <h4>{props.Rating}</h4>
        </div>
    );
}

/* hard cooded version
const RestaurantCard = (props) => {
    return (
        <div className="restaurant-card">
            <img 
            className="restaurant-image"
            src="https://www.foxrc.com/wp-content/uploads/2024/09/restaurants-concept-cdo-00.jpg"
            alt="restaurant-logo"
            />
            <h3>Restaurant Name</h3>
            <h4>Cusine - Indian</h4>
            <h4> 4.5</h4>
        </div>
    );
}*/

const Body = () => {
    return (
        <div className="body">
            <div className="Search">
                <input type="text" className="search-input" />
                <button className="search-btn"></button>
            </div>
            <div className="restaurant-list">
                <RestaurantCard Restaurant="A" Cuisine="A" Rating="1" />
                <RestaurantCard  Restaurant="B" Cuisine="B" Rating="10" />
            </div>
        </div>
    );
}

const AppLayout =  () => {
    return (
        <div className="App">
            <Header />
            <Body />
        </div>
    );
}


    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<AppLayout />);
            