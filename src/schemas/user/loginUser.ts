import * as yup from "yup";

export const loginUserSchema = yup.object().shape({
  usernameCPFEmail: yup
    .string()
    .email("Digite um email válido")
    .required("Campo obrigatório"),
  password: yup.string().required("Informe uma nova senha"),
});
