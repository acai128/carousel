import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import Card from "./Card"; 

it("works when you click on the right arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // move forward in the carousel
  const leftArrow = queryByTestId("left-arrow");
  fireEvent.click(leftArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();

 
});
  
it("works when you click on the left arrow", function() {
    const { queryByTestId, queryByAltText } = render(<Carousel />);

 // expect the third image to show, but not the second
 expect(queryByAltText("Photo by Josh Post on Unsplash")).not.toBeInTheDocument();
 expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();
  
});




// smoke test
// it("testing card", function() {
//   render(<Card />);
// });

// it("testing carousel", function() {
//     render(<Carousel />); 
// });

// snapshot test

it("matches snapshot", function() {
  const {asFragment} = render(<Carousel />);
  expect(asFragment()).toMatchSnapshot();
});


