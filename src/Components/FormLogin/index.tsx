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

interface ILogin extends IUser {
  usernameCPFEmail: string;
}

export const FormLogin = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<Partial<ILogin>>({ resolver: yupResolver(loginUserSchema) });

  const handleLogin = (data: Partial<ILogin>) => {
    console.log("passei aqui");
    console.log(data);
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
            {...register("usernameCPFEmail")}
            error={!!errors.usernameCPFEmail}
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
