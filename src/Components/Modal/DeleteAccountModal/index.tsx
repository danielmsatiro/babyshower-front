import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { theme } from '../../../Styles/theme';
import ErrorIcon from '@mui/icons-material/Error';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen} sx={{
          backgroundColor: theme.palette.warning.main,
          color: "white",
          fontWeight: 700
      }}>
        Excluir Perfil
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle 
            alignSelf={"center"} 
            display={"flex"} 
            flexDirection={"column"} 
            alignItems={"center"}
            sx={{
                color: theme.palette.warning.main,
                fontSize: "26px",
                fontWeight: "regular"
            }}
        >
            <ErrorIcon sx={{fontSize: "60px", marginBottom:"20px"}} />
            {"Atenção!"}
        </DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
                Além de excluir todos os seus dados, está ação apagará todos seus produtos (vendidos ou não) 
                e todas interações realizadas na plataforma (perguntas, respostas).
            </DialogContentText>
            <DialogContentText marginTop={"20px"}>
                Tem certeza de que deseja continuar?
            </DialogContentText>
        </DialogContent>
        <DialogActions sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <Button onClick={handleClose} sx={{
                color: theme.palette.warning.main,
                }}
            >
                Quero Continuar
            </Button>
            <Button onClick={handleClose}sx={{
                color: theme.palette.success.main,
                }}
            >
                Cancelar
            </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
