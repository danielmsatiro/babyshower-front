import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";

import { Container, FileInfo, Preview } from "./styles";

import "react-circular-progressbar/dist/styles.css";
import { CheckCircle, Error, Link } from "@mui/icons-material";
import { theme } from "../../Styles/theme";

export const ListFilesUpload = () => (
  <Container>
    <li>
      <FileInfo>
        <Preview src="https://babyshower-upload.s3.sa-east-1.amazonaws.com/image-profile%40%242b%2410%24B66CWs5ihsGJQ1bMBCGnDOM/RVHZIukLKioW/n1cJ1DMZBhSF.I1m" />
        <div>
          <strong>profile.png</strong>
          <span>
            64kb <button onClick={() => {}}>Excluir</button>
          </span>
        </div>
      </FileInfo>
      <div>
        <CircularProgressbar
          styles={{
            root: { width: 24 },
            path: { stroke: `${theme.palette.primary.main}` },
          }}
          strokeWidth={10}
          value={60}
        />
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
        <CheckCircle sx={{ fontSize: 24 }} color="success" />
        <Error sx={{ fontSize: 24 }} color="warning" />
      </div>
    </li>
  </Container>
);
