import { format } from "timeago.js";
import { Container } from "./styled";

interface IMessageProps {
  message: any
  own: any
}

const Message = ({ message, own }: IMessageProps) =>  {
  return (
    <Container>
      <p className="messageText">{message.text}</p>
      <div>{format(message.createdAt)}</div>
    </Container>
  );
}

export default Message