import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HyperLinks from "../HyperLinks";

test("hyperlink Home is displayed", () => {
  // Renders the <HyperLinks/> component.
  // <BrowserRouter> is wrapped around it because it is a dependency to <Link/> component implemented in <HyperLinks/>
  render(
    <BrowserRouter>
      <HyperLinks />
    </BrowserRouter>
  );

  // screen.getByText is a query function to select HTML element that has content "Home"
  // expect().toBeInTheDocument() makes an assertion that HTML element with content "Home" does exist
  expect(screen.getByText("Home")).toBeInTheDocument();
});
