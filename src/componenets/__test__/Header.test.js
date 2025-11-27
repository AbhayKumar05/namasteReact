import { TestEnvironment } from "jest-environment-jsdom";
import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";

it("Should render Header component with a login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}> 
                <Header />
            </Provider>
        </BrowserRouter>
);

    const buttonElement = screen.getByRole("button", {
        name: "Login",
    });
    
    expect(buttonElement).toBeInTheDocument();
});



