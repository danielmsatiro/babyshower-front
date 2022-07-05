import { AccountCircle } from "@mui/icons-material";
import { memo, useEffect, useState } from "react";
import { IUser } from "../../../../interfaces/user";
import api from "../../../../Services/api";
import { Container, Content, Preview, Sentence } from "./styled";

interface IMessageProps {
  userId: number;
  message: any;
  createdAt: string;
  logged: boolean;
}

const Message = ({ userId, message, createdAt, logged }: IMessageProps) => {
  const [user, setUser] = useState<Partial<IUser>>({} as Partial<IUser>);
  const date = new Date(createdAt);

  const getUser = async () => {
    await api
      .get(`/parents?parent_id=${userId}`)
      .then((res) => setUser(res.data.user))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUser();
  }, []);

  const image = user?.image ? (
    <Preview src={user?.image as string} />
  ) : (
    <AccountCircle sx={{ fontSize: "60px", margin: "12px" }} />
  );

  return (
    <Container logged={logged}>
      <Content>
        {!logged && image}
        <Sentence logged={logged}>
          <div>
            {message}
            <span>{`${date.getHours()}:${date.getMinutes()}`}</span>
          </div>
        </Sentence>
        {logged && image}
      </Content>
    </Container>
  );
};

export default memo(Message);
