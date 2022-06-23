import { useState } from "react";
import { Container } from "./style";
import "./style.ts";

interface IChatConversationsProps {
  currentId: number
  setCurrentChat: any;
}

const ChatConversations = ({ currentId, setCurrentChat }: IChatConversationsProps) =>  {
  
  const [friends, setFriends] = useState<any>([]);

  return (
    <Container>
      <h3>Conversas</h3>
      <ul>
      {
        friends.map((user: any) => <h1>{user.username}</h1>)
      }
      </ul>
    </Container>
  );
}

export default ChatConversations