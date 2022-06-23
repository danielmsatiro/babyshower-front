import { memo, useState } from "react";
import Message from "../Message";
import { Container } from "./style";
import { Button, TextField } from "@mui/material";
import { image } from "../../constants";
import apiNode from "../../../../Services/apiNode";

interface IConversationProps {
  currentChat: any;
  setMessages: any;
  messages: any;
  socket: any;
}

const Conversation = ({
  messages,
  currentChat,
  setMessages,
  socket
}: IConversationProps) => {
  const [newMessage, setNewMessage] = useState<string>("");

  const handleSubmit = async () => {
    const message = {
      message: newMessage,
    };

    const receiverId = 2;

    socket.emit("chat.message", {
      senderId: 1,
      receiverId,
      text: newMessage,
    });

    try {
      const res = await apiNode.post(`chat/${receiverId}`, message);
      console.log("messagem enviada com sucesso");
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      {messages.map((message: any) => {
        const owner = message.parent_id === 1 ? true : false;
        return (
          <Message
            image={image}
            message={message.message}
            logged={owner}
            key={message.id}
          />
        );
      })}
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        onChange={(e) => setNewMessage(e.target.value)}
        style={{ width: "80%" }}
      />
      <Button
        color="primary"
        style={{
          background: "green",
          color: "white",
          width: "20%",
          height: "60px",
        }}
        onClick={() => handleSubmit()}
      >
        Sent
      </Button>
    </Container>
  );
};

export default memo(Conversation);
