import { render, screen } from "@testing-library/react";
import App from "./App";

describe("primary screen UI elements are there", () => {
  test("that the password is displayed", () => {
    render(<App />);
    screen.getByLabelText('view-password')
  })

  test("that a character range control and the current number of characters are displayed", () => {
    render(<App />);
    screen.getByLabelText('password character range')
    screen.getByText(/12 characters/i);
  })

  test("that all checkboxes are visible", () => {
    render(<App />);
    screen.getByRole("checkbox", {name: "Include Symbols (@#$%)"});
    screen.getByRole("checkbox", {name: "Include Numbers (1234)"});
    screen.getByRole("checkbox", {name: "Include Lowercase Characters (abcd)"});
    screen.getByRole("checkbox", {name: "Include UpperCase Characters (ABCD)"});
    screen.getByRole("checkbox", {name: "Exclude Similar Characters (ABCD)"});
  });
});

xdescribe("the checkboxes changes the displayed password", () => {
  test("that all checkboxes changes the displayed password based on its critera", () => {
    render(<App />);
    
  });
});
