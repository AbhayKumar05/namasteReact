import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./componenets/Header";
import Body from "./componenets/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./componenets/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./componenets/Contact";
import Error from "./componenets/Error";
import RestaurantMenu from "./componenets/RestaurantMenu";
import UserContext from "./util/userContext";
import { useState, useEffect } from "react";

//import Grocery from "./componenets/Grocery";

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



const Grocery = lazy(() => import("./componenets/Grocery"));

const AppLayout =  () => {
    const [userInfo, setUserInfo] = useState();

    useEffect(() => {
        // API call to get user info
        const data = {
            name: "Abhay Kumar",
        };
        setUserInfo(data.name); 
    }
, []);

    return (
        <UserContext.Provider value={{ loggedInUser: userInfo, setUserInfo }} >
            <div className="App">
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
                errorElement: <Error />,
            },
            {
                path: "/contact",
                element: <Contact />,
                errorElement: <Error />,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,
                errorElement: <Error />,
            },
            {
                path: "/grocery",
                element: <Suspense fallback = {<h1>Loading....</h1>}> 
                    <Grocery />
                </Suspense>,
                errorElement: <Error />,
            },
        ],
        errorElement: <Error />,
    },
]);

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<RouterProvider router={appRouter} />);
            