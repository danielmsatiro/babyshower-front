import { memo, useEffect, useRef, useState } from "react";
import Message from "../Message";
import { Container } from "./style";
import { Button, TextField } from "@mui/material";
import apiNode from "../../../../Services/apiNode";
import { useSelector } from "react-redux";
import { RootStore } from "../../../../Store";
import { IMessage } from "../../../../interfaces/chat";

interface IConversationProps {
  chatWith: number;
  socket: any;
  currentChat?: string | null;
}

const Conversation = ({
  chatWith,
  socket,
  currentChat = null,
}: IConversationProps) => {
  const token = useSelector((state: RootStore): any => state.token);
  const [newMessage, setNewMessage] = useState<string>("");
  const [messages, setMessages] = useState<IMessage[]>([] as IMessage[]);

  const getMessages = async (currentChat: string) => {
    await apiNode
      .get(`chat/${currentChat}`, {
        headers: {
          Authorization: `Bearer ${token.tokenNode}`,
        },
      })
      .then((res) => {
        setMessages(res.data.messages);
      })
      .catch((err) => console.log("erro na busca de messages", err));
  };

  const handleSubmit = async () => {
    const message = {
      message: newMessage,
    };

    try {
      const res = await apiNode.post(`chat/${chatWith}`, message, {
        headers: {
          Authorization: `Bearer ${token.tokenNode}`,
        },
      });

      const chatId = (res.data.chat as string).replace("/chat/", "");

      await getMessages(chatId);

      socket.emit("sendMessage", chatId);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (currentChat) {
      getMessages(currentChat).then((_) => {
        socket.emit("sendMessage", currentChat);
      });
    }
  }, [chatWith]);

  useEffect(() => {
    socket.on("receiveMessage", (data: string) => {
      if (currentChat === data) {
        getMessages(currentChat as string).then((_) => {
          socket.emit("sendMessage", currentChat);
        });
      }
    });
  }, [socket]);

  const bottomRef: any = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Container>
      {messages.map((message: IMessage) => {
        const owner = message.parent_id === token.id ? true : false;
        return (
          <Message
            userId={message.parent_id}
            message={message.message}
            createdAt={message.createdAt}
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
        onKeyPress={(event) => {
          event.key === "Enter" && handleSubmit();
        }}
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
      <div ref={bottomRef}></div>
    </Container>
  );
};

export default memo(Conversation);
