import { Box, Stack } from "@mui/material";
import { Container, Content, Preview } from "./styled";

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
        <Stack justifyContent={"center"} flex={1}>
          <Stack sx={{ fontSize: "22px", fontWeight: "bold" }}>
            {username}
          </Stack>
          <Stack>{lastMessage}</Stack>
        </Stack>
        {noRead > 0 && (
          <Stack pr={6}>
            <Box
              sx={{
                fontWeight: "bold",
                background: "red",
                minWidth: "20px",
                height: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "5px",
              }}
            >
              {noRead}
            </Box>
          </Stack>
        )}
      </Content>
    </Container>
  );
};

export default ChatOpen;
