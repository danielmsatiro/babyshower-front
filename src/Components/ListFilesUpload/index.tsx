import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";

import { Container, FileInfo, Preview } from "./styles";

import "react-circular-progressbar/dist/styles.css";
import { CheckCircle, Error, Link } from "@mui/icons-material";
import { theme } from "../../Styles/theme";

interface ListFilesUploadProps {
  files: any[];
}

export const ListFilesUpload = ({ files }: ListFilesUploadProps) => (
  <Container>
    {files.map((uploadedFile) => (
      <li>
        <FileInfo>
          <Preview src={uploadedFile.preview} />
          <div>
            <strong>{uploadedFile.name}</strong>
            <span>
              {uploadedFile.readebleSize}{" "}
              <button onClick={() => {}}>Excluir</button>
              <button onClick={() => {}}>Enviar</button>
            </span>
          </div>
        </FileInfo>
        <div>
          {!uploadedFile.uploaded && !uploadedFile.error && (
            <CircularProgressbar
              styles={{
                root: { width: 24 },
                path: { stroke: `${theme.palette.primary.main}` },
              }}
              strokeWidth={10}
              value={uploadedFile.progress}
            />
          )}
          {uploadedFile.url && (
            <a
              href="https://babyshower-upload.s3.sa-east-1.amazonaws.com/image-profile%40%242b%2410%24B66CWs5ihsGJQ1bMBCGnDOM/RVHZIukLKioW/n1cJ1DMZBhSF.I1m"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Link
                sx={{
                  fontSize: 24,
                  marginRight: 8,
                  color: `${theme.palette.grey[500]}`,
                }}
              />
            </a>
          )}
          {uploadedFile.uploaded && (
            <CheckCircle sx={{ fontSize: 24 }} color="success" />
          )}
          {uploadedFile.error && (
            <Error sx={{ fontSize: 24 }} color="warning" />
          )}
        </div>
      </li>
    ))}
  </Container>
);
