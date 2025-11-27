import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";


test("Should render contact component correctly" , () => {
    const contactComponent = render(<Contact />);
    const headingElement = contactComponent.getByText("Contact Us Page");
    expect(headingElement).toBeInTheDocument();

    const heading = screen.getByRole("heading", {
        name: "Contact Us Page",
    }
    );

    expect(heading).toBeInTheDocument();
}
);


est("Should render button component correctly" , () => {
    const contactComponent = render(<Contact />);
    const headingElement = contactComponent.getByText("Contact Us Page");
    expect(headingElement).toBeInTheDocument();

    const button = screen.getByRole("button", {
        name: "Submit",
    }
    );

    expect(button).toBeInTheDocument();
}
);

