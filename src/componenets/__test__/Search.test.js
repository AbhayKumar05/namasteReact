import { render } from "@testing-library/react";
import Search from "../Search";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    }); 
}); 

it("should render search component correctly", async() => {

    await act( async() => (
        render(
            <BrowserRouter>
                <Search />
            </BrowserRouter>
        )
    ));

    const searchButton = screen.getByRole("button", {
        name: "Search",
    });

    expect(searchButton).toBeInTheDocument();

    const searchInput = screen.getByRole("textbox");

    expect(searchInput).toBeInTheDocument();

});