import { render, screen } from "@testing-library/react";
import Login from "../../Pages/Login";

describe("Login Page", () => {

  it("Should show if it's functional", () => {
    render(<Login />);
    const dataText = screen.queryByText("Login");
    expect(dataText).toBeInTheDocument();
  });

  // it('Should be able to render a title', () => {
  //   render(<Login />)
  //   const title = screen.getByText('Login')
  //   expect(title).toBeInTheDocument();
  // })

  // it("Should be able to render an input email", () => {
  //   render(<Login />);
  //   const emailField = screen.getByLabelText(/^Email/i);
  //   expect(emailField).toBeTruthy()
  // });

  // it("Should be able to render an input password", () => {
  //   render(<Login />);
  //   const passwordField = screen.getByLabelText(/^Senha/i);
  //   expect(passwordField).toBeTruthy();
  // });
  
  // it('Should be able to render a button', () => {
  //   render(<Login />)
  //   const button = screen.getByText(/Entrar/i);
  //   expect(button).toBeInTheDocument();  
  // })
  
})