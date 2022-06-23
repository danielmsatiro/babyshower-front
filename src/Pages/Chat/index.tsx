import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Header } from "../../Components/Header";
import apiNode from "../../Services/apiNode";
import { RootStore } from "../../Store";
import ChatConversations from "./components/ChatConversations";
import Conversation from "./components/Conversation";
import { ChatMenuFriends, Content } from "./style";


const ChatMessager = () => {

  const [currentChat, _] = useState<any>(null);
  const [conversations, setConversations] = useState([]);
  const [messages, setMessages] = useState<any>(null);
  const [loading, setLoading] = useState(true)
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
        await apiNode.get("/chat/" + "81d56a9f-119a-4877-b98f-d825530ae930")
        .then((response) => {
          setMessages(response.data.messages)
          setLoading(false)
        })
        .catch((err) => {})
    };
    getMessages();
  }, []);
  
  useEffect(() => {
    const getConversations = async () => {
        await apiNode.get("/chat")
        .then((res) => setConversations(res.data))
        .catch((err) => {})
    };
    getConversations();
  }, []);

  return (
    <>
      <Header />

      <Content>

      {!loading && 
      <Conversation
      messages={messages}
      currentChat={currentChat}
      setMessages={setMessages}
      socket={socket}
      />}

      </Content>

    </> 
  );
}

export default ChatMessager