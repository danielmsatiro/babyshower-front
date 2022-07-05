import { Box, Stack, Typography } from "@mui/material";
import { Dispatch, memo, SetStateAction, useEffect, useState } from "react";
import { IUser } from "../../../../../interfaces/user";
import api from "../../../../../Services/api";
import { Container, Content, Preview } from "./styled";
import { AccountCircle } from "@mui/icons-material";

interface IChatOpenProps {
  userId: number;
  lastMessage: string;
  noRead: number;
  chatId: string;
  setCurrentChat: Dispatch<SetStateAction<string | undefined>>;
  setChatWith: Dispatch<SetStateAction<number | undefined>>;
}

const ChatOpen = ({
  userId,
  lastMessage,
  noRead,
  chatId,
  setCurrentChat,
  setChatWith,
}: IChatOpenProps) => {
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
    <Container
      onClick={() => {
        setCurrentChat(chatId);
        setChatWith(userId);
      }}
    >
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

export default memo(ChatOpen);
