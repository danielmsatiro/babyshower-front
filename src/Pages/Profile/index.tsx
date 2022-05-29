import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { Header } from "../../Components/Header";
import { theme } from "../../Styles/theme";
import Perfil from "../../Assets/perfil.jpg";

const Profile = () => {
  const user = {
    id: 5555,
    cpf: "11111111111",
    username: "daniel1",
    email: "daniel1@yahoo.com.br",
    name: "Marcos",
    phone: "(21) 99999-9999",
    product: "api/products/by_parent/5555",
    image: "https://imagem/320x240",
  };

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

  return (
    <>
      <Box
        sx={{
          background: `${theme.palette.grey[50]}`,
          height: "100vh",
        }}
      >
        <Header />
        <Grid m={2} container>
          <Grid item>
            <Stack spacing={2}>
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
              <Button variant="contained">Editar Perfil</Button>
              <Button variant="contained">Excluir Perfil</Button>
            </Stack>
          </Grid>
          <Grid item></Grid>
          <Typography> Meu Perfil </Typography>
        </Grid>
      </Box>
    </>
  );
};

export { Profile };
