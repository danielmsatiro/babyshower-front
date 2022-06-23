import { Box, Grid, Stack } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Header } from "../../Components/Header";
import apiNode from "../../Services/apiNode";
import { RootStore } from "../../Store";
import ChatConversations from "./components/ChatConversations";
import Conversation from "./components/Conversation";
import { ChatMenuFriends, Content } from "./style";
import logo from "../../Assets/logo-baby-shower.svg";

const ChatMessager = () => {
  const [currentChat, _] = useState<any>(null);
  const [conversations, setConversations] = useState([]);
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const socket: any = useRef();

  /*
  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data: any) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev: any) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", user._id);
  }, [user]); 


  useEffect(() => {
    const getConversations = async () => {
        await apiNode.get("/chat", {
          headers: {
            Authorization: `Bearer ${token.tokenNode}`,
          },
        })
        .then((res) => setConversations(res.data))
        .catch((err) => console.log(err))
    };
    getConversations();
  }, [user._id]);
*/

  useEffect(() => {
    const getMessages = async () => {
      await apiNode
        .get("/chat/" + "81d56a9f-119a-4877-b98f-d825530ae930")
        .then((response) => setMessages(response.data))
        .catch((err) => {});
    };
    getMessages();
  }, []);

  useEffect(() => {
    const getConversations = async () => {
      await apiNode
        .get("/chat")
        .then((res) => setConversations(res.data))
        .catch((err) => {});
    };
    getConversations();
  }, []);

  useEffect(() => {
    console.log(conversations);
    console.log(messages);
  }, [messages, conversations]);

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
              <ChatConversations conversations={conversations} />
            </Grid>
          </ChatMenuFriends>
        </Grid>
        <Grid item flex={1}>
          <Conversation
            currentChat={currentChat}
            messages={messages}
            newMessage={newMessage}
            setMessages={setMessages}
            setNewMessage={setNewMessage}
            socket={socket}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default ChatMessager;
