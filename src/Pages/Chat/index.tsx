import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import { Header } from "../../Components/Header";
import api from "../../Services/api";
import ChatConversations from "./components/ChatConversations";
import Conversation from "./components/Conversation";
import { ChatMenuFriends, Content } from "./style";


const ChatMessager = () => {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState<any>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState<any>(null);
  const socket: any = useRef();
  const scrollRef: any = useRef();

  const user = {
    _id: 1,
    followings: [],
    username: "hirton"
  }

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
      try {
        const res = await api.get("/chat")
        setConversations(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [user._id]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await api.get("/chat/" + currentChat?._id);
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

  return (
    <>
      <Header />

      <Content>

        <ChatMenuFriends>
          <ChatConversations
            currentId={user._id}
            setCurrentChat={setCurrentChat}
          />
        </ChatMenuFriends>

        <Conversation
        conversation={conversations}
        currentChat={currentChat}
        messages={messages}
        newMessage={newMessage}
        setMessages={setMessages}
        setNewMessage={setNewMessage}
        socket={socket}
        />

      </Content>
    </>
  );
}

export default ChatMessager