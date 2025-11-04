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

const heading = <h1 className="heading" tabIndex={1}>Hello JSX</h1>;

const Title = () => (
    <h1 className="title" tabIndex={2}>
        Hello from Title Component
    </h1>
);

// Functional Component or component composition 
const HeadingComponent = () => {
    return ( <div id="parent">
        <div id="child">
            {heading}
            {Title()} 
            <Title />
        </div>
    </div>);
}

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<headingComponent />);
            