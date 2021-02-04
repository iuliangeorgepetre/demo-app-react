import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import Navbar from "./Navbar";

test("renders home link", () => {
  render(
    <Router>
      <Navbar />
    </Router>
  );
  const linkElement = screen.getByText("Home");
  expect(linkElement).toBeInTheDocument();
});
