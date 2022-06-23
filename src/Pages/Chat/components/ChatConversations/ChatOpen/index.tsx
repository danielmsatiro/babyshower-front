import { Stack } from "@mui/material";
import { format } from "timeago.js";
import { Container, Content, Preview, Sentence } from "./styled";

interface IChatOpenProps {
  username: string;
  lastMessage: string;
  image: string;
  noRead: number; //quantas mensagens não lidas
}

const ChatOpen = ({ username, lastMessage, image, noRead }: IChatOpenProps) => {
  return (
    <Container>
      <Content>
        <Preview src={image} />
        <Stack>
          <Stack>{username}</Stack>
          <Stack>{lastMessage}</Stack>
        </Stack>
        <span>{noRead}</span>
      </Content>
    </Container>
  );
};

export default ChatOpen;
