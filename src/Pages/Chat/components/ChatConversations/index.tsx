import { useEffect, useState } from "react";
import ChatOpen from "./ChatOpen";
import { Container } from "./style";
import "./style.ts";

const ChatConversations = ({ conversations }: any) => {
  const [chatList, setChatList] = useState<any[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setChatList(conversations);
    console.log("cheguei");
  }, [conversations]);

  return (
    <>
      {conversations.map((chat: any) => {
        if (chat) {
          const msgs = chat.messages.filter((item: any) => item.parent_id !== 1)
          return (
            <ChatOpen
              username={"Maria52"}
              lastMessage={chat.messages[0].message || ""}
              image={
                "https://babyshower-upload.s3.sa-east-1.amazonaws.com/image-profile%40%242b%2410%24qKGIigvivA1HZhaHgPsZpuKpaskSnc87aRBoZjpjh4URb0kvJHF0W"
              }
              noRead={msgs.length || 0}
            />
          );
        }
      })}
    </>
  );
};

export default ChatConversations;
