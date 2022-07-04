import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  FormHelperText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { IUser } from "../../interfaces/user";
import { loginUserSchema } from "../../schemas/user/loginUser";
import { StyledInput, StyledLabel, StyledStack } from "./style";
import { getTokenThunk } from "../../Store/modules/token/thunk";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../Store";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

interface ILogin extends IUser {
  usernameCpfEmail: string;
}

export const FormLogin = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<Partial<ILogin>>({ resolver: yupResolver(loginUserSchema) });

  const token = useSelector((state: RootStore): any => state.token);

  const history = useHistory();

  useEffect(() => {
    if (token.token) {
      history.push("/");
    }
  });

  const dispatch = useDispatch();
  const handleLogin = ({ usernameCpfEmail, password }: Partial<ILogin>) => {
    const reCpf =
      /^([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})$/;
    const reEmail = /^[a-z0-9._%$#*&!"'-+?,]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
    if (reCpf.test(usernameCpfEmail as string)) {
      dispatch(
        getTokenThunk({
          cpf: usernameCpfEmail?.replace(/[^0-9]/g, ""),
          password: password as string,
        })
      );
    } else if (reEmail.test(usernameCpfEmail as string)) {
      dispatch(
        getTokenThunk({ email: usernameCpfEmail, password: password as string })
      );
    } else {
      dispatch(
        getTokenThunk({
          username: usernameCpfEmail,
          password: password as string,
        })
      );
    }
  };

  return (
    <Stack component="form" onSubmit={handleSubmit(handleLogin)} spacing={3}>
      <Stack>
        <Typography>Olá!</Typography>
        <Typography>Bom vê-lo novamente!</Typography>
      </Stack>
      <Stack spacing={1}>
        <Stack>
          <TextField
            label="Username/CPF/Email"
            {...register("usernameCpfEmail")}
            error={!!errors.usernameCpfEmail}
            variant="standard"
          />
          <FormHelperText>{}</FormHelperText>
        </Stack>
        <Stack>
          <TextField
            label="Senha"
            {...register("password")}
            error={!!errors.password}
            type="password"
            variant="standard"
          />
          <FormHelperText>{errors.password?.message}</FormHelperText>
        </Stack>
      </Stack>
      <Stack spacing={1}>
        <Button color="primary" variant="contained" type="submit" fullWidth>
          Login
        </Button>
        <Typography>Não possui uma conta? Clique aqui</Typography>
      </Stack>
    </Stack>
  );
};
