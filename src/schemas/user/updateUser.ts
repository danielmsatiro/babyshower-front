import * as yup from "yup";

export const updateUserSchema = yup.object().shape({
  email: yup
    .string()
    .email("Digite um email válido")
    .required("Campo obrigatório"),
  name: yup.string().required("Campo obrigatório"),
  phone: yup
    .string()
    .matches(
      /^((?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])) (?:[2-8]|9[1-9])[0-9]{3}-[0-9]{4}$/,
      "Digite um número de telefone válido do Brasil"
    )
    .required("Campo obrigatório"),
  username: yup.string().required(),
  password: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
});
