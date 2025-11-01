import React from "react";
import ReactDOM from "react-dom/client";

/**
 * 
 * <div id="parent">
    *  <div id="child">
    *      <h1>Hello from React!</h1>
    *     <h2>Hello from React!</h2>
    *  </div>
 * </div>
 */

const parent = React.createElement(
    "div",{ id: "parent"},
    React.createElement(
        "div",{ id: "child"},
        [React.createElement("h1", {}, "Im a h1 tag inside child div"), 
        React.createElement("h2", {}, "Im a h2 tag inside child div")]
    )
);

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);
            