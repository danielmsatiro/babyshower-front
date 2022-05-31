import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { Header } from "../../Components/Header";
import { theme } from "../../Styles/theme";
import Perfil from "../../Assets/perfil.jpg";

import { FormProfile } from "../../Components/FormProfile";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCitiesByStateThunk } from "../../Store/modules/cities/thunk";

const Profile = () => {
  const [cities, setCities] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCitiesByStateThunk("São Paulo"));
  }, []);

  //Usuário fictício para teste
  const user = {
    id: 5555,
    cpf: "12345678900",
    username: "marlene.ford",
    email: "marlene.ford@mail.com",
    name: "Marlene Ford",
    phone: "(61) 99999-9999",
    product: "api/products/by_parent/5555", //Alterar response api para "products"
    image: "http...", //Incluir campo na api
    city: "São Paulo", //Incluir informação no response da api.
    state: "São Paulo", //Incluir informação no response da api.
  };

  //produtos fictícios para teste
  const products = [
    {
      id: 1,
      title: "Carinho de bebê",
      price: 530.0,
      image: "https://imagem/320x240",
      sold: true,
      questions: { quantity: 9, noAnswer: 5 },
    },
    {
      id: 2,
      title: "Pijaminha",
      price: 45.0,
      image: "https://imagem/320x240",
      sold: false,
      questions: { quantity: 0, noAnswer: 0 },
    },
    {
      id: 3,
      title: "Brinquedo para criança muito legal",
      price: 30.0,
      image: "https://imagem/320x240",
      sold: false,
      questions: { quantity: 6, noAnswer: 0 },
    },
    {
      id: 4,
      title: "Carinho de bebê",
      price: 840.0,
      image: "https://imagem/320x240",
      sold: false,
      questions: { quantity: 7, noAnswer: 1 },
    },
    {
      id: 5,
      title: "Sandália",
      price: 27.0,
      image: "https://imagem/320x240",
      sold: true,
      questions: { quantity: 0, noAnswer: 0 },
    },
    {
      id: 6,
      title: "Body tam P",
      price: 35.0,
      image: "https://imagem/320x240",
      sold: false,
      questions: { quantity: 5, noAnswer: 0 },
    },
  ];

  const [updateMode, setUpdateMode] = useState(false);

  return (
    <>
      <Box
        sx={{
          background: `${theme.palette.grey[50]}`,
          minHeight: "100vh",
        }}
      >
        <Header />
        <Grid
          mt={8}
          columnSpacing={12}
          container
          justifyContent={"center"}
          sx={{ paddingLeft: "24px", paddingRight: "24px" }}
        >
          <Grid item>
            <Stack spacing={2} alignItems={"center"}>
              <Box
                border={`8px ${theme.palette.grey[100]} solid`}
                borderRadius={100}
                sx={{
                  overflow: "hidden",
                  height: "309px",
                  width: "309px",
                  backgroundImage: `url(${Perfil})`,
                  backgroundSize: `cover`,
                }}
              />
              <Button
                variant="contained"
                sx={{ width: "133px" }}
                color={updateMode ? "primary" : "success"}
                type={!updateMode ? "submit" : undefined}
                form="id-form-update-profile"
                onClick={() => setUpdateMode(!updateMode)}
              >
                {updateMode ? "Salvar" : "Editar"}
              </Button>
              <Button
                variant="contained"
                sx={{ width: "133px" }}
                color={updateMode ? "secondary" : "warning"}
                onClick={
                  updateMode ? () => setUpdateMode(!updateMode) : undefined
                }
              >
                {updateMode ? "Cancelar" : "Excluir Perfil"}
              </Button>
            </Stack>
          </Grid>

          <Grid item>
            <Stack spacing={8}>
              <Typography
                alignSelf={"start"}
                variant={"h1"}
                color={theme.palette.grey[500]}
              >
                Meu Perfil{" "}
              </Typography>
              <FormProfile data={user} readOnly={!updateMode} />
              <Typography> Produtos Cadastrados </Typography>
              <Button
                variant="contained"
                color={"success"}
                sx={{ width: "173px" }}
              >
                Adcionar Produto
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export { Profile };
