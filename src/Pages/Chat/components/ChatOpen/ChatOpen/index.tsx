import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { IUser } from "../../../../../interfaces/user";
import api from "../../../../../Services/api";
import { Container, Content, Preview } from "./styled";
import { AccountCircle } from "@mui/icons-material";
import { io } from "socket.io-client";

const socket = io("http://localhost:4000");
socket.on("connect", () =>
  console.log("[IO] Connect => A new connection has been established")
);

interface IChatOpenProps {
  userId: number;
  lastMessage: string;
  noRead: number;
  room: string;
  getConversations: () => void;
}

const ChatOpen = ({
  userId,
  lastMessage,
  noRead,
  room,
  getConversations,
}: IChatOpenProps) => {
  const [user, setUser] = useState<Partial<IUser>>({} as Partial<IUser>);

  socket.emit("joinRoom", room);

  const getUser = async () => {
    await api
      .get(`/parents?parent_id=${userId}`)
      .then((res) => setUser(res.data.user))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    socket.on("receiveMessage", (_) => {
      console.log(`${user?.name} chamando...`);
      getConversations();
    });
  }, [socket]);
  return (
    <Container>
      <Content>
        {user?.image ? (
          <Preview src={user?.image as string} />
        ) : (
          <AccountCircle sx={{ fontSize: "60px", margin: "12px" }} />
        )}
        <Stack justifyContent={"center"} flex={1} maxWidth={"200px"}>
          <Typography noWrap sx={{ fontSize: "22px", fontWeight: "bold" }}>
            {user?.name as string}
          </Typography>
          <Typography noWrap sx={{ fontSize: "18px" }}>
            {lastMessage}
          </Typography>
        </Stack>

        <Box
          sx={{
            fontWeight: "bold",
            background: `${!!noRead ? "red" : "none"}`,
            minWidth: "20px",
            height: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
            marginLeft: "10px",
          }}
        >
          {!!noRead && noRead}
        </Box>
      </Content>
    </Container>
  );
};

export default ChatOpen;
