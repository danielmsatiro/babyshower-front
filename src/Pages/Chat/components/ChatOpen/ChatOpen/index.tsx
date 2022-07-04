import { Box, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { IUser } from "../../../../../interfaces/user";
import api from "../../../../../Services/api";
import { Container, Content, Preview } from "./styled";

interface IChatOpenProps {
  userId: number;
  lastMessage: string;
  noRead: number; //quantas mensagens não lidas
}

const ChatOpen = ({ userId, lastMessage, noRead }: IChatOpenProps) => {
  const [user, setUser] = useState<Partial<IUser>>({} as Partial<IUser>);

  const getUser = async () => {
    await api
      .get(`/parents?parent_id=${userId}`)
      .then((res) => setUser(res.data.user))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Container>
      <Content>
        <Preview src={user?.image as string} />
        <Stack justifyContent={"center"} flex={1}>
          <Stack sx={{ fontSize: "22px", fontWeight: "bold" }}>
            {user?.name as string}
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
