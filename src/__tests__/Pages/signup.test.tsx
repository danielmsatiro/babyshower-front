import { render, screen } from "@testing-library/react";
import Signup from "../../Pages/Signup";

describe("Signup Page", () => {

  it("Should show if it's functional", () => {
    render(<Signup />);
    const dataText = screen.queryByText("SignUp");
    expect(dataText).toBeInTheDocument();
  });

  // it("Should be able to render a title", () => {
  //   render(<Signup />);
  //   const title = screen.getByText("Cadastro");
  //   expect(title).toBeInTheDocument();
  // });

  // it("Should be able to render an input name", () => {
  //   render(<Signup />);
  //   const nameField = screen.getByLabelText(/^Nome/i);
  //   expect(nameField).toBeTruthy();
  // });

  // it("Should be able to render an input email", () => {
  //   render(<Signup />);
  //   const emailField = screen.getByLabelText(/^Email/i);
  //   expect(emailField).toBeTruthy();
  // });

  // it("Should be able to render an input address", () => {
  //   render(<Signup />);
  //   const addressField = screen.getByLabelText(/^Endereço/i);
  //   expect(addressField).toBeTruthy();
  // });

  // it("Should be able to render an input password", () => {
  //   render(<Signup />);
  //   const passwordField = screen.getByLabelText(/^Senha/i);
  //   expect(passwordField).toBeTruthy();
  // });

  // it("Should be able to render an input confirm password", () => {
  //   render(<Signup />);
  //   const confirmPasswordField = screen.getByLabelText(/^Confirme sua senha/i);
  //   expect(confirmPasswordField).toBeTruthy();
  // });

  // it("Should be able to render a button", () => {
  //   render(<Signup />);
  //   const button = screen.getByText(/CADASTRAR/i);
  //   expect(button).toBeTruthy();
  // });
});
