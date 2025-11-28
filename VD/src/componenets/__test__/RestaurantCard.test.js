import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";


it("should render RestaurantCard component with props", () => {
    render(<RestaurantCard
        name="Spice Villa"
        cuisines={["Indian", "Chinese"]}
        avgRating={4.5}
        cloudinaryImageId="sample-image-id"
    />);

    const nameElement = screen.getByText("Spice Villa");
    const cuisineElement = screen.getByText("Indian, Chinese");
    const ratingElement = screen.getByText("4.5");

    expect(nameElement).toBeInTheDocument();
    expect(cuisineElement).toBeInTheDocument();
    expect(ratingElement).toBeInTheDocument();
});





