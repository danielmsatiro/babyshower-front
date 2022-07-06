import { memo, useEffect, useRef, useState } from "react";
import Message from "../Message";
import { Container, Content } from "./style";
import { Button, TextField } from "@mui/material";
import apiNode from "../../../../Services/apiNode";
import { useSelector } from "react-redux";
import { RootStore } from "../../../../Store";
import { IMessage } from "../../../../interfaces/chat";
import { IUser } from "../../../../interfaces/user";
import api from "../../../../Services/api";

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
  const [otherUser, setOtherUser] = useState<Partial<IUser>>(
    {} as Partial<IUser>
  );
  const [user, setUser] = useState<Partial<IUser>>({} as Partial<IUser>);

  const getUser = async (userId: number) => {
    return await api.get(`/parents?parent_id=${userId}`);
  };

  useEffect(() => {
    getUser(chatWith)
      .then((res) => setOtherUser(res.data.user))
      .catch((err) => console.log(err));
    getUser(token.id)
      .then((res) => setUser(res.data.user))
      .catch((err) => console.log(err));
  }, []);

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
      <Content>
        {messages.map((message: IMessage) => {
          const owner = message.parent_id === token.id ? true : false;
          return (
            <Message
              image={
                (otherUser?.id === message?.parent_id
                  ? otherUser?.image
                  : user?.image) as string
              }
              message={message?.message}
              createdAt={message?.createdAt}
              logged={owner}
              key={message?.id}
            />
          );
        })}
        <div ref={bottomRef}></div>
      </Content>

      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        onKeyPress={(event) => {
          event.key === "Enter" && handleSubmit() && setNewMessage("");
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
        onClick={() => {
          handleSubmit();
          setNewMessage("");
        }}
      >
        Sent
      </Button>
    </Container>
  );
};

export default memo(Conversation);
