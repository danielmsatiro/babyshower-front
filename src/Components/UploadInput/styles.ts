import styled, { css } from "styled-components";
import { theme } from "../../Styles/theme";

const dragActive = css`
  border-color: #08f26e;
`;
const dragReject = css`
  border-color: #ff6347;
`;

interface DropContainerProps {
  isDragActive?: boolean;
  isDragReject?: boolean;
}

export const DropContainer = styled.div.attrs({
  className: "dropzone",
})<DropContainerProps>`
  border: 1px dashed ${theme.palette.grey[500]};
  border-radius: 4px;
  cursor: pointer;
  min-height: 50px;

  transition: height 0.2s ease;

  ${(props) => props.isDragActive && dragActive}
  ${(props) => props.isDragReject && dragReject}
`;

const messageColors = {
  default: "#999",
  error: "#ff6347",
  success: "#08f26e",
};

interface UploadMessageProps {
  type?: "default" | "error" | "success";
}

export const UploadMessage = styled.p<UploadMessageProps>`
  color: ${(props) => messageColors[props.type || "default"]};
  font-size: 20px;
  font-weight: bold;
  font-family: ${theme.typography.body1.fontFamily};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
`;
