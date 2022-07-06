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
import { v4 as uuid } from "uuid";

interface IConversationProps {
  chatWith: number;
  socket: any;
  currentChat?: string | null;
  getConversations: () => void;
}

interface IData {
  room: string;
  message: string;
  createdAt: string;
  id: string;
  parent_id: number;
}

const Conversation = ({
  chatWith,
  socket,
  currentChat = null,
  getConversations,
}: IConversationProps) => {
  const token = useSelector((state: RootStore): any => state.token);
  const [newMessage, setNewMessage] = useState<string>("");
  const [messages, setMessages] = useState<Partial<IMessage>[]>(
    [] as Partial<IMessage>[]
  );
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
    return await apiNode.get(`chat/${currentChat}`, {
      headers: {
        Authorization: `Bearer ${token.tokenNode}`,
      },
    });
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

      getMessages(chatId).then((_) => getConversations());

      const date = new Date();

      const data = {
        room: chatId,
        message: newMessage,
        createdAt: date.toString(),
        parent_id: user.id,
        uuid: uuid(),
      };
      socket.emit("sendMessage", data);

      const { room, ...newData } = data;

      setMessages([...messages, newData]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (currentChat) {
      getMessages(currentChat)
        .then((res) => {
          setMessages(res.data.messages);
          getConversations();
        })
        .catch((err) => console.log("erro na busca de messages", err));
    }
  }, [chatWith]);

  useEffect(() => {
    socket.on("receiveMessage", (data: IData) => {
      if (currentChat === data.room) {
        getMessages(currentChat as string).then((_) => getConversations());

        const { room, ...newData } = data;
        setMessages([...messages, newData]);
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
        {messages.map((message: Partial<IMessage>) => {
          const owner = message.parent_id === token.id ? true : false;
          return (
            <Message
              image={
                (otherUser?.id === message?.parent_id
                  ? otherUser?.image
                  : user?.image) as string
              }
              message={message?.message as string}
              createdAt={message?.createdAt as string}
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
