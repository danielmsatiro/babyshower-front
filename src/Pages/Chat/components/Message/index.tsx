import { AccountCircle } from "@mui/icons-material";
import { memo, useEffect, useState } from "react";
import { IUser } from "../../../../interfaces/user";
import api from "../../../../Services/api";
import { Container, Content, Preview, Sentence } from "./styled";

interface IMessageProps {
  image: string;
  message: any;
  createdAt: string;
  logged: boolean;
}

const Message = ({ image, message, createdAt, logged }: IMessageProps) => {
  const date = new Date(createdAt);
  console.log(image);
  const finalImage = image ? (
    <Preview src={image as string} />
  ) : (
    <AccountCircle sx={{ fontSize: "60px", margin: "12px" }} />
  );

  return (
    <Container logged={logged}>
      <Content>
        {!logged && finalImage}
        <Sentence logged={logged}>
          <div>
            {message}
            <span>{`${date.getHours()}:${date.getMinutes()}`}</span>
          </div>
        </Sentence>
        {logged && finalImage}
      </Content>
    </Container>
  );
};

export default memo(Message);
