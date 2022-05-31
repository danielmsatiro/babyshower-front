import { render, screen } from "@testing-library/react";
import Button from "../../Components/Button";

describe("Button Component", () => {
  it("Should be able to render a title", () => {
    render(<Button text="ButtonTitle" />);
    const button = screen.getByText("ButtonTitle");
    expect(button).toBeInTheDocument();
  });
});
