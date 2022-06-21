import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { Header } from "../../Components/Header";
import { theme } from "../../Styles/theme";

import { ProductsProfile } from "../../Components/ProductsProfile";
import FormProfile from "../../Components/FormProfile";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootStore } from "../../Store";
import { useDispatch } from "react-redux";
import { getParentByIdThunk } from "../../Store/modules/profile/thunk";
import ImageProfile from "./ImageProfile";

const Profile = () => {
  const [updateMode, setUpdateMode] = useState(false);
  const user = useSelector((state: RootStore): any => state.user);
  const token = useSelector((state: RootStore): any => state.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getParentByIdThunk(token.id, token.token));
  }, []);

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
              <ImageProfile image={user?.dataUser?.image} />
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
              {user?.dataUser && (
                <FormProfile data={user.dataUser} readOnly={!updateMode} />
              )}
              <Typography> Produtos Cadastrados </Typography>
              <ProductsProfile />
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
