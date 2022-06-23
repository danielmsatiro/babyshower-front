import styled from "styled-components";
import { theme } from "../../../../Styles/theme";

export const Container = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-top: 20px;
  h1 {
    text-align: left;
    font-family: ${theme.typography.body1.fontFamily};
    font-size: 24px;
    color: white;
  }
`;
