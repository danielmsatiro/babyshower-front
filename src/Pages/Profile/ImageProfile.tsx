import { Box, Dialog, IconButton } from "@mui/material";
import { memo, useState } from "react";

import { PaperComponent } from "./PaperComponent";
import { UploadInput } from "../../Components/UploadInput";
import { ListFilesUpload } from "../../Components/ListFilesUpload";
import { v4 as uuid } from "uuid";
import filesize from "filesize";
import { theme } from "../../Styles/theme";
import api from "../../Services/api";

interface IFile {
  id: string | undefined;
  file: any;
  name: string;
  readableSize: string;
  preview: string;
  progress: number;
  uploaded: boolean;
  error: boolean;
  url?: string | undefined;
}

interface ImageProfileProps {
  image: string;
}

const ImageProfile = ({ image }: ImageProfileProps) => {
  const [openUpload, setOpenUpload] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<any>([]);

  const handleClickOpenUpload = () => {
    setOpenUpload(true);
  };

  const handleCloseUpload = () => {
    setOpenUpload(false);
  };

  const handleUpload = (files: any[]): void => {
    const filesList = files.map(
      (file: any): IFile => ({
        id: uuid(),
        file,
        name: file.name,
        readableSize: filesize(file.size),
        preview: URL.createObjectURL(file),
        progress: 0,
        uploaded: false,
        error: false,
        url: undefined,
      })
    );

    /* const processUpload = (uploadedFile) => {
      const data = new FormData();

      data.append("image-profile", uploadedFile.file, uploadedFile.name);

      api.post;
    }; */

    setUploadedFiles([...uploadedFiles, ...filesList]);
  };

  return (
    <>
      <IconButton onClick={handleClickOpenUpload}>
        <Box
          border={`8px ${theme.palette.grey[100]} solid`}
          borderRadius={100}
          sx={{
            overflow: "hidden",
            height: "309px",
            width: "309px",
            backgroundImage: `url(${image})`,
            backgroundSize: `cover`,
          }}
        />
      </IconButton>
      <Dialog
        open={openUpload}
        onClose={handleCloseUpload}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog"
      >
        <Box
          m={3}
          width={"400px"}
          minHeight={"150px"}
          style={{ cursor: "move" }}
          id="draggable-dialog-title"
        >
          <UploadInput handleUpload={handleUpload} />
          {!!uploadedFiles.length && <ListFilesUpload files={uploadedFiles} />}
        </Box>
      </Dialog>
    </>
  );
};

export default memo(ImageProfile);
