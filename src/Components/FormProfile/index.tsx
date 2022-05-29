import { FormControl, Grid, Stack } from "@mui/material";
import { StyledInputBase, StyledLabel } from "./style";
import { IUser } from "../../interfaces/user";
import { useState } from "react";

interface IFormProps {
  data: IUser;
  readOnly: boolean;
}

export const FormProfile = ({ data, readOnly }: IFormProps) => {
  const [currentUser, setCurrentUser] = useState(data);
  const [password, setPassword] = useState(null);

  return (
    <FormControl component={"form"} id="id-form-update-profile">
      <Grid container spacing={4}>
        <Grid item>
          <Stack spacing={3}>
            <Stack spacing={1}>
              <StyledLabel>CPF</StyledLabel>
              <StyledInputBase placeholder={data.cpf} readOnly />
            </Stack>
            <Stack spacing={1}>
              <StyledLabel>nome completo</StyledLabel>
              <StyledInputBase
                placeholder={data.name}
                readOnly={readOnly}
                inputProps={!readOnly ? { value: currentUser.name } : undefined}
              />
            </Stack>
            <Stack spacing={1}>
              <StyledLabel>username</StyledLabel>
              <StyledInputBase
                placeholder={data.username}
                readOnly={readOnly}
                inputProps={
                  !readOnly ? { value: currentUser.username } : undefined
                }
              />
            </Stack>
            <Stack spacing={1}>
              <StyledLabel>email</StyledLabel>
              <StyledInputBase
                placeholder={data.email}
                readOnly={readOnly}
                inputProps={
                  !readOnly ? { value: currentUser.email } : undefined
                }
              />
            </Stack>
          </Stack>
        </Grid>
        <Grid item>
          <Stack spacing={3}>
            <Stack spacing={1}>
              <StyledLabel>telefone</StyledLabel>

              <StyledInputBase
                placeholder={data.phone}
                readOnly={readOnly}
                inputProps={
                  !readOnly ? { value: currentUser.phone } : undefined
                }
              />
            </Stack>
            <Stack spacing={1}>
              <StyledLabel>senha</StyledLabel>
              <StyledInputBase
                placeholder={readOnly ? "**********" : "Digite uma nova senha"}
                inputProps={{ type: "password", value: null }}
                readOnly={readOnly}
              />
            </Stack>
            <Stack spacing={1}>
              <StyledLabel>Cidade</StyledLabel>

              <StyledInputBase
                placeholder={data.city}
                readOnly={readOnly}
                inputProps={!readOnly ? { value: currentUser.city } : undefined}
              />
            </Stack>
            <Stack spacing={1}>
              <StyledLabel>Estado</StyledLabel>

              <StyledInputBase
                placeholder={data.state}
                readOnly={readOnly}
                inputProps={
                  !readOnly ? { value: currentUser.state } : undefined
                }
              />
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </FormControl>
  );
};
