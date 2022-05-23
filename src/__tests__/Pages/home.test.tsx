import { render, screen } from "@testing-library/react"
import Home from "../../Pages/Home";

test("Should show if it's functional", () => {
    render(<Home />)
    const dataText = screen.queryByText("Home");
    expect(dataText).toBeInTheDocument()
})