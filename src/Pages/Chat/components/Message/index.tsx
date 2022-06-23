import { format } from "timeago.js";
import { Container, Content, Preview, Sentence } from "./styled";

interface IMessageProps {
  message: any;
  image: string;
  logged: boolean;
}

const Message = ({ message, image, logged }: IMessageProps) => {
  return (
    <Container logged={logged}>
      <Content>
        {!logged && <Preview src={image} />}
        <Sentence logged={logged}>
          <div>
            {message.text}

            <span>{format(message.createdAt)}</span>
          </div>
        </Sentence>
        {logged && <Preview src={image} />}
      </Content>
    </Container>
  );
};

export default Message;
