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



it("Should change login button to logout when clicked", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}> 
                <Header />
            </Provider>
        </BrowserRouter>
);

    const loginButton = screen.getByRole("button", {
        name: "Login",
    });
    
    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {
        name: "Logout",
    });

    expect(logoutButton).toBeInTheDocument();
});