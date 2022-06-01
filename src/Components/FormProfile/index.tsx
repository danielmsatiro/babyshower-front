import { FormHelperText, Grid, MenuItem, Select, Stack } from "@mui/material";
import { StyledInput, StyledLabel, StyledStack } from "./style";
import { IUser } from "../../interfaces/user";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateUserSchema } from "../../schemas/user/updateUser";
import { useDispatch } from "react-redux";
import { RootStore } from "../../Store";
import { useSelector } from "react-redux";
import { getCitiesByStateThunk } from "../../Store/modules/cities/thunk";
import { useEffect } from "react";

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

  const states = [
    "Acre",
    "Alagoas",
    "Amapá",
    "Amazonas",
    "Bahia",
    "Ceará",
    "Distrito Federal",
    "Espirito Santo",
    "Goiás",
    "Maranhão",
    "Mato Grosso do Sul",
    "Mato Grosso",
    "Minas Gerais",
    "Pará",
    "Paraíba",
    "Paraná",
    "Pernambuco",
    "Piauí",
    "Rio de Janeiro",
    "Rio Grande do Norte",
    "Rio Grande do Sul",
    "Rondônia",
    "Roraima",
    "Santa Catarina",
    "São Paulo",
    "Sergipe",
    "Tocantins",
  ];

  const dispatch = useDispatch();

  const cities = useSelector((state: RootStore): any => state.cities).cities;

  useEffect(() => {
    dispatch(getCitiesByStateThunk(data.state as string));
  }, []);

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
          <StyledStack>
            <StyledLabel>CPF</StyledLabel>
            <StyledInput placeholder={data.cpf} readOnly disableUnderline />
            <FormHelperText>{}</FormHelperText>
          </StyledStack>
          <StyledStack>
            <StyledLabel>nome completo</StyledLabel>
            <StyledInput
              readOnly={readOnly}
              disableUnderline
              defaultValue={data.name}
              {...register("name")}
              error={!!errors.name}
            />
            <FormHelperText>{errors.name?.message}</FormHelperText>
          </StyledStack>
          <StyledStack>
            <StyledLabel>username</StyledLabel>
            <StyledInput
              readOnly={readOnly}
              disableUnderline
              defaultValue={data.username}
              {...register("username")}
              error={!!errors.username}
            />
            <FormHelperText>{errors.username?.message}</FormHelperText>
          </StyledStack>
          <StyledStack>
            <StyledLabel>email</StyledLabel>
            <StyledInput
              readOnly={readOnly}
              disableUnderline
              defaultValue={data.email}
              {...register("email")}
              error={!!errors.email}
            />
            <FormHelperText>{errors.email?.message}</FormHelperText>
          </StyledStack>
        </Stack>
      </Grid>
      <Grid item>
        <Stack spacing={3}>
          <StyledStack>
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
          </StyledStack>
          <StyledStack>
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
          </StyledStack>
          <StyledStack>
            <StyledLabel>estado</StyledLabel>
            <Select
              readOnly={readOnly}
              defaultValue={data.state}
              {...register("state")}
            >
              {states.map((item, idx) => (
                <MenuItem key={idx} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </StyledStack>
          <StyledStack>
            <StyledLabel>cidade</StyledLabel>
            <Select
              readOnly={readOnly}
              defaultValue={data.city}
              {...register("city")}
            >
              {cities.length > 0 ? (
                cities.map(({ point_id, city }: any) => (
                  <MenuItem key={point_id} value={city}>
                    {city}
                  </MenuItem>
                ))
              ) : (
                <MenuItem value={data.city}>{data.city}</MenuItem>
              )}
            </Select>
          </StyledStack>
        </Stack>
      </Grid>
    </Grid>
  );
};
