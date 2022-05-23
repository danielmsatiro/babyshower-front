// import * as yup from "yup";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import api from "../../Services/api";

// interface SignUpCredentials {
// name: string;
// email: string;
// address: string;
// password: string;
// confirmPassword?: string;
// }

const Signup = () => {

// const formSchema = yup.object().shape({
//     name: yup.string().required("Nome obrigatório"),
//     email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
//     address: yup.string().required("Endereço obrigatório"),
//     password: yup.string().required("Senha obrigatória"),
//     confirmPassword: yup
//     .string()
//     .required("Confirmação de senha obrigatória")
//     .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
// });

// const {
//     register,
//     handleSubmit,
//     formState: { errors },
// } = useForm<SignUpCredentials>({
//     resolver: yupResolver(formSchema),
// });

// const onSubmitFunction = (data: any) => console.log(data)

return <h1>SignUp</h1>

};
export default Signup;