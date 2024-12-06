import { render, fireEvent } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import App from "./App";
import { stringCalculator } from "./stringCalculator";

describe("App Component", () => {
  test("renders the heading Vite + React", () => {
    render(<App />);
    const headingElement = screen.getByText(/Vite \+ React/i);
    expect(headingElement).toBeInTheDocument();
  });

  test("renders the initial count value of 0", () => {
    render(<App />);
    const countButton = screen.getByRole("button", { name: /count is 0/i });
    expect(countButton).toBeInTheDocument();
  });

  test("increments the count when the button is clicked", () => {
    render(<App />);
    const countButton = screen.getByRole("button", { name: /count is 0/i });

    fireEvent.click(countButton);
    expect(countButton).toHaveTextContent("count is 1");

    fireEvent.click(countButton);
    expect(countButton).toHaveTextContent("count is 2");
  });

  test('renders the "read the docs" paragraph', () => {
    render(<App />);
    const docsParagraph = screen.getByText(
      /Click on the Vite and React logos to learn more/i
    );
    expect(docsParagraph).toBeInTheDocument();
  });

  describe("String Calculator", () => {
    test("returns 0 for an empty string", () => {
      expect(stringCalculator("")).toBe(0);
    });

    test("returns the number for a single number", () => {
      expect(stringCalculator("5")).toBe(5);
    });

    test("returns the sum of two numbers", () => {
      expect(stringCalculator("1,2")).toBe(3);
    });

    test("handles new lines between numbers", () => {
      expect(stringCalculator("1\n2,3")).toBe(6);
    });

    test("throws an error for invalid input", () => {
      expect(() => stringCalculator("1,2,a")).toThrow("Invalid input");
    });
  });
});
