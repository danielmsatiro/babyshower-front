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
import { theme } from "../../Styles/theme";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootStore } from "../../Store";
import { logoutThunk } from "../../Store/modules/token/thunk";

export const Header = () => {
  const userAuth = !!useSelector((state: RootStore): any => state.token).token;
  const history = useHistory();
  const dispatch = useDispatch();

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

  const handleLogout = () => {
    dispatch(logoutThunk());
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
      <MenuItem
        onClick={() => {
          handleMenuClose();
          history.push("/profile");
        }}
      >
        Meu Perfil
      </MenuItem>
      <MenuItem
        onClick={() => {
          handleMenuClose();
          handleLogout();
        }}
      >
        Sair
      </MenuItem>
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
      {userAuth && (
        <MenuItem
          onClick={() => {
            handleMobileMenuClose();
            history.push("/profile");
          }}
        >
          Meu Perfil
        </MenuItem>
      )}
      {userAuth && (
        <MenuItem
          onClick={() => {
            handleMobileMenuClose();
            handleLogout();
          }}
        >
          Sair
        </MenuItem>
      )}
      {!userAuth && (
        <MenuItem onClick={() => history.push("/login")}>Entrar</MenuItem>
      )}
    </Menu>
  );

  return (
    <AppBar
      position="static"
      sx={{
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
        boxShadow: "none",
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          background: `linear-gradient(269.72deg,${theme.palette.primary.main} 11.22%, ${theme.palette.secondary.main} 89.3%)`,
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: theme.spacing(2),
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
        <Grid container justifyContent={"center"} alignItems="center">
          <Grid item flex={1} sx={{ display: { xs: "none", md: "flex" } }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon sx={{ color: `${theme.palette.grey[300]}` }} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Pesquisar"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Grid>
          <Grid item justifyContent={"center"}>
            <IconButton onClick={() => history.push("/login")}>
              <img src={Logo} alt="babyshower" />
            </IconButton>
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
                <Button>Chat</Button>
                <Button
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                >
                  Meu Perfil
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
                <Button onClick={() => history.push("/login")}>Entrar</Button>
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
