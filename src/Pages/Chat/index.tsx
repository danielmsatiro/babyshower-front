import { Box, Grid } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import { Header } from "../../Components/Header";
import { IUser } from "../../interfaces/user";
import api from "../../Services/api";
import apiNode from "../../Services/apiNode";
import { RootStore } from "../../Store";
import ChatOpen from "./components/ChatOpen/ChatOpen";
import Conversation from "./components/Conversation";
import { ChatMenuFriends } from "./style";
import { IChat, IMessage } from "../../interfaces/chat";

const socket = io("http://localhost:4000");
socket.on("connect", () =>
  console.log("[IO] Connect => A new connection has been established")
);

const ChatMessager = () => {
  const token = useSelector((state: RootStore): any => state.token);
  //const [currentChat, _] = useState<any>(null);
  const [conversations, setConversations] = useState<IChat[]>([] as IChat[]);
  //const [arrivalMessage, setArrivalMessage] = useState<any>(null);
  //const [messages, setMessages] = useState<any>(null);
  //const [loadingMessages, setLoadingMessages] = useState(true);
  const [loadingChats, setLoadingChats] = useState(false);

  /* useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev: any) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);
 */
  /* useEffect(() => {
    socket.current.emit("addUser", user._id);
  }, [user]); */

  const getConversations = async (): Promise<any> => {
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

  useEffect(() => {
    getConversations();
  }, []);

  /* useEffect(() => {
    const getMessages = async () => {
      await apiNode
        .get("/chat/" + "81d56a9f-119a-4877-b98f-d825530ae930")
        .then((response) => {
          setMessages(response.data.messages);
          setLoadingMessages(false);
        })
        .catch((err) => {});
    };
    getMessages();
  }, []); */

  /* useEffect(() => {
    const getConversations = async () => {
      await apiNode
        .get("/chat")
        .then((res) => {
          setConversations(res.data.chats);
          setLoadingChats(false);
        })
        .catch((err) => {});
    };
    getConversations();
  }, []); */

  const getOtherUserId = (chat: any, loggedId: number) => {
    return chat.parent_user !== loggedId
      ? chat.parent_user
      : chat.other_parent_user;
  };

  return (
    <>
      <Header />

      <Grid container p={4} sx={{ background: "#F3F3F3" }}>
        <Grid item width={"400px"}>
          <ChatMenuFriends>
            <Grid container justifyContent={"center"}>
              <Box
                mt={4}
                borderRadius={100}
                sx={{
                  overflow: "hidden",
                  height: "200px",
                  width: "200px",
                  backgroundImage: `url(${"https://babyshower-upload.s3.sa-east-1.amazonaws.com/image-profile%40%242b%2410%24qKGIigvivA1HZhaHgPsZpuKpaskSnc87aRBoZjpjh4URb0kvJHF0W"})`,
                  backgroundSize: `cover`,
                }}
              />
              {conversations.map((chat) => {
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
                    key={chat.id}
                  />
                );
              })}
            </Grid>
          </ChatMenuFriends>
        </Grid>
        {/* <Grid item flex={1}>
          {!loadingMessages && (
            <Conversation
              messages={messages}
              currentChat={currentChat}
              setMessages={setMessages}
              socket={socket}
            />
          )}
        </Grid> */}
      </Grid>
    </>
  );
};

export default ChatMessager;
