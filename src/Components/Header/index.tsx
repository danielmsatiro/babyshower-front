import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Grid,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import Logo from "../../Assets/logo-baby-shower.svg";
import { Search, SearchIconWrapper, StyledInputBase } from "./style";
import SearchIcon from "@mui/icons-material/Search";
import { MouseEvent, useState } from "react";

export const Header = () => {
  const userAuth = true; //Aqui verifica se está logado

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const isMenuOpen = !!anchorEl;

  const handleProfileMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem>Meu Perfil</MenuItem>
      <MenuItem>Sair</MenuItem>
    </Menu>
  );

  return (
    <AppBar
      position="static"
      sx={{
        borderBottom: " 1px solid rgba(68, 68, 68, 0.5)",
        boxShadow: "none",
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          background:
            "linear-gradient(269.72deg, #7A9AC9 11.22%, #C97AB7 89.3%)",
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography color={"white"} variant={"body2"}>
          Se conecte com papais e mamães do Brasil inteiro!
        </Typography>
      </Box>
      <Toolbar
        variant="dense"
        sx={{
          flexGrow: 1,
          background: "#fff",
          minHeight: "96px",
          padding: "8px",
        }}
      >
        <Grid
          container
          color={"black"}
          justifyContent={"center"}
          alignItems="center"
        >
          <Grid item flex={1}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Pesquisar"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Grid>
          <Grid item justifyContent={"center"}>
            <img src={Logo} alt="babyshower" />
          </Grid>
          {userAuth ? (
            <Grid
              container
              item
              flex={1}
              direction={"row"}
              justifyContent="end"
            >
              <Button>
                <Typography variant={"body1"}>Chat</Typography>
              </Button>
              <Button
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
              >
                <Typography variant={"body1"}>Meu Perfil</Typography>
              </Button>
            </Grid>
          ) : (
            <Grid
              container
              item
              flex={1}
              direction={"row"}
              justifyContent="end"
            >
              <Button>
                <Typography variant={"body1"}>Entrar</Typography>
              </Button>
            </Grid>
          )}
        </Grid>
      </Toolbar>
      {renderMenu}
    </AppBar>
  );
};
