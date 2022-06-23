import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import api from "../../../../Services/api";
import Message from "../Message";
import { Container } from "./style";
import ScrollToBottom from "react-scroll-to-bottom";
import { Input } from "@material-ui/core";
import { TextField } from "@mui/material";

interface IMessage {
  text: string;
  createdAt: string;
}

interface IConversationProps {
  socket: any;
  currentChat: any;
  setMessages: any;
  messages: any;
}

const Conversation = ({messages, currentChat, setMessages, socket}: IConversationProps) => {

  const [newMessage, setNewMessage] = useState<any>(null)
  const [chatCurrent, setchatCurrent] = useState<any>(null);
  const currentUser = 1;
  const user: any = 1;

  const image =
    "https://babyshower-upload.s3.sa-east-1.amazonaws.com/image-profile%40%242b%2410%24qKGIigvivA1HZhaHgPsZpuKpaskSnc87aRBoZjpjh4URb0kvJHF0W";

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
      {
        messages.map((message: any) => {
          console.log(message)
          const owner = message.parent_id === 1 ? true : false
          return (<Message image={image} message={message.message} logged={owner} key={message.id} />)
        })
      }
      <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth/>
    </Container>
  );
};

export default Conversation;
