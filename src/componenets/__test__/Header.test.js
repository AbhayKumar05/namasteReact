import { TestEnvironment } from "jest-environment-jsdom";
import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";

it("Should run in jsdom environment", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}> 
            <Header />
        </Provider>
        </BrowserRouter>
);
    expect(TestEnvironment).toBeDefined();
});



