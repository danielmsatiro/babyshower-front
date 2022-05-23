import { ButtonHTMLAttributes } from "react";
import { Button } from "./style";

interface ButtonsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color?: string;
}

const Buttons = ({ text, color, type, onClick }: ButtonsProps) => {
  return (
    <Button type={type} color={color} onClick={onClick} >
      {text}
    </Button>
  );
}
export default Buttons;