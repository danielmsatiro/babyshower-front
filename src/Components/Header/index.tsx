import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Grid,
  Button,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import Logo from "../../Assets/logo-baby-shower.svg";
import { Search, SearchIconWrapper, StyledInputBase } from "./style";
import SearchIcon from "@mui/icons-material/Search";
import { MouseEvent, useState } from "react";
import MoreIcon from "@mui/icons-material/MoreVert";

export const Header = () => {
  const userAuth = true; //Aqui verifica se está logado

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    useState<null | HTMLElement>(null);

  const isMenuOpen = !!anchorEl;
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
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

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {userAuth && <MenuItem>Meu Perfil</MenuItem>}
      {userAuth && <MenuItem>Sair</MenuItem>}
      {!userAuth && <MenuItem>Entrar</MenuItem>}
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
        <Typography color={"white"} variant={"body1"}>
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
        <Grid container justifyContent={"center"} alignItems="center">
          <Grid item flex={1} sx={{ display: { xs: "none", md: "flex" } }}>
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
          <Grid
            container
            item
            flex={1}
            sx={{
              display: { xs: "none", sm: "flex" },
            }}
          >
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

          <Grid
            container
            item
            flex={1}
            direction={"row"}
            justifyContent="end"
            sx={{
              display: { xs: "flex", sm: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Grid>

          <Grid
            item
            width={"100%"}
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "center",
            }}
          >
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
        </Grid>
      </Toolbar>
      {renderMenu}
      {renderMobileMenu}
    </AppBar>
  );
};
