import { useEffect, useState } from "react";
import { Container } from "./style";
import "./style.ts";

const ChatConversations = ({ conversations }: any) => {
  const [_, setChatList] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setChatList(conversations);
    setLoading(false);
  }, [conversations]);

  return (
    <Container>{loading ? <h1>Loading</h1> : <h1>Conversas</h1>}</Container>
  );
};

export default ChatConversations;
