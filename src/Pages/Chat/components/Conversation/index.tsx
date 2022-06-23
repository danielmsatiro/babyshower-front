import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import api from "../../../../Services/api";
import Message from "../Message";
import { Container } from "./style";
import ScrollToBottom from "react-scroll-to-bottom";

interface IMessage {
  text: string;
  createdAt: string;
}

interface IConversationProps {
  conversation: any;
  newMessage: any;
  socket: any;
  currentChat: any;
  setMessages: any;
  setNewMessage: any;
  messages: any;
}

const Conversation = ({
  conversation,
  newMessage,
  socket,
  currentChat,
  setMessages,
  setNewMessage,
  messages,
}: IConversationProps) => {
  const [chatCurrent, setchatCurrent] = useState<any>(null);
  const currentUser = 1;
  const user: any = 1;

  //entendo que currentUser mudará a cada menssagem então:
  //e que user é quem está logado
  //Então definimos se o dono da mensagem é quem está logado:
  const logged = currentUser === user;

  //coloquei essa variável, Hirton. Verificar onde você quer incluir
  const image =
    "https://babyshower-upload.s3.sa-east-1.amazonaws.com/image-profile%40%242b%2410%24qKGIigvivA1HZhaHgPsZpuKpaskSnc87aRBoZjpjh4URb0kvJHF0W";
  const MockedMessage: IMessage = {
    text: "Olá tudo bem?",
    createdAt: "Fri, 06 May 2022 11:14:11 GMT",
  };

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
      {/* Inclusão mockada pra ver o resultado */}
      <Message message={MockedMessage} image={image} logged={true} />
      <Message message={MockedMessage} image={image} logged={false} />
      <Message message={MockedMessage} image={image} logged={true} />
      <Message message={MockedMessage} image={image} logged={false} />
      <Message message={MockedMessage} image={image} logged={false} />
      <Message message={MockedMessage} image={image} logged={true} />
      <Message message={MockedMessage} image={image} logged={true} />
      <Message message={MockedMessage} image={image} logged={false} />
      <Message message={MockedMessage} image={image} logged={true} />
      <Message message={MockedMessage} image={image} logged={true} />
      <Message message={MockedMessage} image={image} logged={false} />
    </Container>
  );
};

export default Conversation;
