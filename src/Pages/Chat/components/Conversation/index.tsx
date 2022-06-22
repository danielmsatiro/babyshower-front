import { useEffect, useState } from "react";
import api from "../../../../Services/api";
import { Container } from "./style";

interface IConversationProps {
  conversation: any;
  newMessage: any;
  socket: any;
  currentChat:any;
  setMessages:any;
  setNewMessage:any;
  messages: any
}


const Conversation = ({conversation, newMessage, socket, currentChat, setMessages, setNewMessage, messages}: IConversationProps) =>  {
  
  const [chatCurrent, setchatCurrent] = useState<any>(null);
  const currentUser = null;
  const user: any = {}
  
  useEffect(() => {

    const chatId: string = "";

    const getUserChatCurrent = async () => {
      try {
        const res = await api.get(`/chat/${chatId}`);
        setchatCurrent(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUserChatCurrent();
  }, [currentUser, conversation]);


  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    const message = {
      message: newMessage,
    };

    const receiverId = currentChat.members.find(
      (member: any) => member !== user._id
    );

    socket.current.emit("sendMessage", {
      senderId: user._id,
      receiverId,
      text: newMessage,
    });

    try {
      const res = await api.post("/chat", message);
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <span>{chatCurrent?.username}</span>
    </Container>
  );
}

export default Conversation