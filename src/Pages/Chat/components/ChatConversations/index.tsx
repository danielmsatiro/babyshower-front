import { useEffect, useState } from "react";
import ChatOpen from "./ChatOpen";
import { Container } from "./style";
import "./style.ts";

const ChatConversations = ({ conversations }: any) => {
  const [chatList, setChatList] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setChatList(conversations);
    setLoading(false);
  }, [conversations]);

  return (
    <>
      <Container>{loading ? <h1>Loading</h1> : <h1>Conversas</h1>}</Container>
      <ChatOpen
        username={"Maria52"}
        lastMessage={"Olá, tudo bem? Eu..."}
        image={
          "https://babyshower-upload.s3.sa-east-1.amazonaws.com/image-profile%40%242b%2410%24qKGIigvivA1HZhaHgPsZpuKpaskSnc87aRBoZjpjh4URb0kvJHF0W"
        }
        noRead={2}
      />
    </>
  );
};

export default ChatConversations;
