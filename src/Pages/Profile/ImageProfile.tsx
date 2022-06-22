import { Box, Button, Dialog, IconButton, Stack } from "@mui/material";
import { memo, useState } from "react";

import { PaperComponent } from "./PaperComponent";
import { UploadInput } from "../../Components/UploadInput";
import { ListFilesUpload } from "../../Components/ListFilesUpload";
import { v4 as uuid } from "uuid";
import filesize from "filesize";
import { theme } from "../../Styles/theme";
import apiNode from "../../Services/apiNode";
import { useSelector } from "react-redux";
import { RootStore } from "../../Store";
import { IUser } from "../../interfaces/user";
import { updateParentById } from "../../Store/modules/profile/thunk";
import { useDispatch } from "react-redux";

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
  key: string | undefined;
}

//adicionar props com nome de file para compartilhar componente
const ImageProfile = ({ image, key = undefined }: ImageProfileProps) => {
  const [openUpload, setOpenUpload] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<any>([]);
  const token = useSelector((state: RootStore): any => state.token);

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

    setUploadedFiles([filesList[0]]);
  };

  const deleteFiles = (): void => {
    setUploadedFiles([]);
  };

  const dispatch = useDispatch();

  const processUpload = async () => {
    const data = new FormData();

    data.append("image-profile", uploadedFiles[0].file, uploadedFiles[0].name);

    await apiNode
      .post("/upload", data, {
        headers: {
          Authorization: `Bearer ${token.tokenNode}`,
        },
        onUploadProgress: (e: ProgressEvent) => {
          const load = e.loaded as number;
          const progress = Math.abs((load * 100) / load);

          setUploadedFiles([{ ...uploadedFiles[0], progress }]);
        },
      })
      .then((res) => {
        const { key, url } = res.data;
        setUploadedFiles([]);
        dispatch(updateParentById({ image_key: key, image: url }, token.token));
      });
  };

  const onlyDelete = async () => {
    if (key) {
      await apiNode
        .put(
          "/upload",
          { key },
          {
            headers: {
              Authorization: `Bearer ${token.tokenNode}`,
            },
          }
        )
        .then((_) => {
          setUploadedFiles([]);
          dispatch(
            updateParentById({ image_key: null, image: null }, token.token)
          );
        });
    }
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
        <Stack
          m={3}
          width={"400px"}
          minHeight={"150px"}
          style={{ cursor: "move" }}
          id="draggable-dialog-title"
          justifyContent={"space-around"}
        >
          <UploadInput handleUpload={handleUpload} />
          {!!uploadedFiles.length && (
            <ListFilesUpload
              files={uploadedFiles}
              processUpload={processUpload}
              deleteFiles={deleteFiles}
            />
          )}
          {!uploadedFiles.length && !key && (
            <Button
              variant="contained"
              color="warning"
              onClick={() => onlyDelete()}
            >
              Somente excluir
            </Button>
          )}
        </Stack>
      </Dialog>
    </>
  );
};

export default memo(ImageProfile);
