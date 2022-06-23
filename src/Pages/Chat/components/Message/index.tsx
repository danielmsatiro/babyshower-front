import { format } from "timeago.js";
import { Container, Preview, Sentence } from "./styled";

interface IMessageProps {
  message: any;
  image: string;
  logged: boolean;
}

const Message = ({ message, image, logged }: IMessageProps) => {
  return (
    <Container>
      <Preview src={image} />
      <Sentence logged={logged}>
        <div>
          {message.text}

          <span>{format(message.createdAt)}</span>
        </div>
      </Sentence>
    </Container>
  );
};

export default Message;
