import { Button, FormHelperText, Grid, Stack } from "@mui/material";
import { StyledInput, StyledLabel } from "./style";
import { IUser } from "../../interfaces/user";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateUserSchema } from "../../schemas/user/updateUser";

interface IFormProps {
  data: Partial<IUser>;
  readOnly: boolean;
}

export const FormProfile = ({ data, readOnly }: IFormProps) => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<Partial<IUser>>({ resolver: yupResolver(updateUserSchema) });

  const handleUpdateProfile = (data: Partial<IUser>) => {
    console.log("passei aqui");
    console.log(data);
  };

  return (
    <Grid
      container
      spacing={4}
      component="form"
      onSubmit={handleSubmit(handleUpdateProfile)}
      id="id-form-update-profile"
    >
      <Grid item>
        <Stack spacing={3}>
          <Stack spacing={1}>
            <StyledLabel>CPF</StyledLabel>
            <StyledInput placeholder={data.cpf} readOnly disableUnderline />
          </Stack>
          <Stack spacing={1}>
            <StyledLabel>nome completo</StyledLabel>
            <StyledInput
              readOnly={readOnly}
              disableUnderline
              defaultValue={data.name}
              {...register("name")}
              error={!!errors.name}
            />
            <FormHelperText>{errors.name?.message}</FormHelperText>
          </Stack>
          <Stack spacing={1}>
            <StyledLabel>username</StyledLabel>
            <StyledInput
              readOnly={readOnly}
              disableUnderline
              defaultValue={data.username}
              {...register("username")}
              error={!!errors.username}
            />
            <FormHelperText>{errors.username?.message}</FormHelperText>
          </Stack>
          <Stack spacing={1}>
            <StyledLabel>email</StyledLabel>
            <StyledInput
              readOnly={readOnly}
              disableUnderline
              defaultValue={data.email}
              {...register("email")}
              error={!!errors.email}
            />
            <FormHelperText>{errors.email?.message}</FormHelperText>
          </Stack>
        </Stack>
      </Grid>
      <Grid item>
        <Stack spacing={3}>
          <Stack spacing={1}>
            <StyledLabel>telefone</StyledLabel>
            <StyledInput
              placeholder="(XX) XXXXX-XXXX"
              readOnly={readOnly}
              disableUnderline
              defaultValue={data.phone}
              {...register("phone")}
              error={!!errors.phone}
            />
            <FormHelperText>{errors.phone?.message}</FormHelperText>
          </Stack>
          <Stack spacing={1}>
            <StyledLabel>senha</StyledLabel>
            <StyledInput
              placeholder={readOnly ? "**********" : "Digite uma nova senha"}
              inputProps={{ type: "password", default: null }}
              readOnly={readOnly}
              disableUnderline
              {...register("password")}
              error={!!errors.password}
            />
            <FormHelperText>{errors.password?.message}</FormHelperText>
          </Stack>
          <Stack spacing={1}>
            <StyledLabel>estado</StyledLabel>
            <StyledInput
              readOnly={readOnly}
              disableUnderline
              defaultValue={data.state}
              {...register("state")}
              error={!!errors.state}
            />
            <FormHelperText>{errors.state?.message}</FormHelperText>
          </Stack>
          <Stack spacing={1}>
            <StyledLabel>cidade</StyledLabel>
            <StyledInput
              readOnly={readOnly}
              disableUnderline
              defaultValue={data.city}
              {...register("city")}
              error={!!errors.city}
            />
            <FormHelperText>{errors.city?.message}</FormHelperText>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};
