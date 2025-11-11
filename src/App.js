import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./componenets/Header";
import Body from "./componenets/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./componenets/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./componenets/Contact";
import Error from "./componenets/Error";
import RestaurantMenu from "./componenets/RestaurantMenu";

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

const AppLayout =  () => {
    return (
        <div className="App">
            <Header />
            <Outlet />
        </div>
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
        ],
        errorElement: <Error />,
    },
]);

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<RouterProvider router={appRouter} />);
            