import { Box, Divider, Grid, Stack } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Header } from "../../Components/Header";
import { IUser } from "../../interfaces/user";
import api from "../../Services/api";
import apiNode from "../../Services/apiNode";
import { RootStore } from "../../Store";
import ChatOpen from "./components/ChatOpen/ChatOpen";
import Conversation from "./components/Conversation";
import { ChatMenuFriends } from "./style";
import { IChat, IMessage } from "../../interfaces/chat";
import { AccountCircle } from "@mui/icons-material";
import { io } from "socket.io-client";

const socket = io("https://share-babyshower-node.herokuapp.com");
socket.on("connect", () =>
  console.log("[IO] Connect => A new connection has been established")
);

const ChatMessager = () => {
  const token = useSelector((state: RootStore): any => state.token);
  const [conversations, setConversations] = useState<IChat[]>([] as IChat[]);
  const [loadingChats, setLoadingChats] = useState(false);
  const [user, setUser] = useState<Partial<IUser>>({} as Partial<IUser>);
  const [chatWith, setChatWith] = useState<number>(); //aqui eu registro com quem quero falar
  const [currentChat, setCurrentChat] = useState<string>();

  const getConversations = async () => {
    setLoadingChats(true);
    await apiNode
      .get("/chat", {
        headers: {
          Authorization: `Bearer ${token.tokenNode}`,
        },
      })
      .then((res) => setConversations(res.data.chats));
    setLoadingChats(false);
  };

  const getOtherUserId = (chat: any, loggedId: number) => {
    return chat.parent_user !== loggedId
      ? chat.parent_user
      : chat.other_parent_user;
  };

  const getUserLogged = async () => {
    await api
      .get(`/parents?parent_id=${token.id}`)
      .then((res) => setUser(res.data.user))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getConversations();
    getUserLogged();
  }, []);

  /* useEffect(() => {
    socket.on("receiveMessage", (data) => {
      console.log(`Room ${data} updated now`);
      getConversations();
    });
  }, [socket]); */

  return (
    <>
      <Header />

      <Grid container p={0} sx={{ background: "#F3F3F3" }}>
        <Grid item width={"400px"}>
          <ChatMenuFriends>
            <Stack alignItems={"center"} justifyContent={"center"}>
              {user?.image ? (
                <Box
                  mt={4}
                  borderRadius={100}
                  sx={{
                    overflow: "hidden",
                    height: "200px",
                    width: "200px",
                    backgroundImage: `url(${user?.image})`,
                    backgroundSize: `cover`,
                  }}
                />
              ) : (
                <AccountCircle sx={{ fontSize: "60px", margin: "12px" }} />
              )}

              <Stack divider={<Divider sx={{ border: "1px solid white" }} />}>
                {conversations.map((chat) => {
                  socket.emit("joinRoom", chat.id);
                  return (
                    <ChatOpen
                      userId={getOtherUserId(chat as IChat, token.id as number)}
                      lastMessage={
                        chat.messages[chat.messages.length - 1].message
                      }
                      noRead={chat.messages.reduce((acc, msg) => {
                        if (!msg.read_message && msg.parent_id !== token.id) {
                          acc++;
                        }
                        return acc;
                      }, 0)}
                      chatId={chat.id}
                      setCurrentChat={setCurrentChat}
                      setChatWith={setChatWith}
                      key={chat.id}
                    />
                  );
                })}
              </Stack>
            </Stack>
          </ChatMenuFriends>
        </Grid>
        <Grid item flex={1}>
          {!!chatWith && (
            <Conversation
              chatWith={chatWith} //obrigatório informar com quem vai falar
              currentChat={currentChat} //pode não ter chat aberto ainda
              socket={socket} // precisa levar o socket
              getConversations={getConversations}
            />
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default ChatMessager;
