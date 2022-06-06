import * as yup from "yup";

export const loginUserSchema = yup.object().shape({
  usernameCpfEmail: yup.string().required("Campo obrigatório"),
  password: yup.string().required("Informe uma nova senha"),
});
