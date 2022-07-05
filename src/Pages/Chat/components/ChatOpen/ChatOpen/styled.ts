import { ReactNode } from "react";
import styled from "styled-components";
import { theme } from "../../../../../Styles/theme";

interface ContainerProps {
  logged?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: start;
  min-height: 102px; ;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 355px;
  font-family: ${theme.typography.body1.fontFamily};
  color: white;
`;

interface SentenceProps {
  logged?: boolean;
  children: ReactNode;
}

export const Sentence = styled.div<SentenceProps>`
  background: ${(props) => (props.logged ? `#444444` : `#DCE7E5`)};
  border-radius: 20px;
  min-height: 102px;
  color: ${(props) => (props.logged ? `#DCE7E5` : `#444444`)};
  div {
    font-family: ${theme.typography.body1.fontFamily};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    span {
      align-self: end;
      margin-right: 10px;
      margin-top: 10px;
      font-size: 12px;
    }
  }
`;

interface PreviewProps {
  src: string;
}

export const Preview = styled.div<PreviewProps>`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  backgroun-position: 50% 50%;
  margin: 12px;
`;
