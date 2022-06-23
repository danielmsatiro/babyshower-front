import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Message from "../Message";
import { Container } from "./style";
import ScrollToBottom from "react-scroll-to-bottom";
import { Input } from "@material-ui/core";
import { Button, TextField } from "@mui/material";
import apiNode from "../../../../Services/apiNode";

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

  const [newMessage, setNewMessage] = useState<string>("")
  const [chatCurrent, setchatCurrent] = useState<any>(null);
  const currentUser = 1;
  const user: any = 1;

  const image =
    "https://babyshower-upload.s3.sa-east-1.amazonaws.com/image-profile%40%242b%2410%24qKGIigvivA1HZhaHgPsZpuKpaskSnc87aRBoZjpjh4URb0kvJHF0W";


  const handleSubmit = async () => {
    const message = {
      message: newMessage,
    };

    const receiverId = 2
    /*
    socket.current.emit("sendMessage", {
      senderId: 1,
      receiverId,
      text: newMessage,
    });
    */
    try {
      const res = await apiNode.post(`chat/${receiverId}`, message);
      console.log("messagem enviada com sucesso")
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
          const owner = message.parent_id === 1 ? true : false
          return (<Message image={image} message={message.message} logged={owner} key={message.id} />)
        })
      }
      <TextField 
        id="outlined-basic" 
        label="Outlined" 
        variant="outlined" 
        onChange={(e) => setNewMessage(e.target.value)} 
        style={{width:"80%"}}
      />
      <Button 
        color="primary" 
        style={{background: "green", color: "white", width:"20%", height: "60px"}}
        onClick={() => handleSubmit()}
        > Sent </Button>      
    </Container>
  );
};

export default Conversation;
