import { useDropzone } from "react-dropzone";
import { DropContainer, UploadMessage } from "./styles";

interface UploadInputProps {
  handleUpload: (files: any) => void;
}

export const UploadInput = ({ handleUpload }: UploadInputProps) => {
  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      accept: { "image/*": [] },
      onDrop: handleUpload,
    });

  const renderDragMessage = (isDragActive: boolean, isDragReject: boolean) => {
    if (!isDragActive) {
      return <UploadMessage>Arraste o arquivo aqui...</UploadMessage>;
    }

    if (isDragReject) {
      return <UploadMessage type="error">Arquivo não suportado</UploadMessage>;
    }
    return <UploadMessage type="success">Solte o arquivo aqui</UploadMessage>;
  };

  return (
    <DropContainer {...getRootProps({ isDragActive, isDragReject })}>
      <input {...getInputProps()} />

      {renderDragMessage(isDragActive, isDragReject) as any}
    </DropContainer>
  );
};
