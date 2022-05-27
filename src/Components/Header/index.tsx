import { AppBar, Box, Toolbar, Typography, Grid } from "@mui/material";
import Logo from "../../Assets/logo-baby-shower.svg";
import { Search, SearchIconWrapper, StyledInputBase } from "./style";
import SearchIcon from "@mui/icons-material/Search";

export const Header = () => {
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
        <Typography>
          Se conecte com papais e mamães do Brasil inteiro!
        </Typography>
      </Box>
      <Toolbar
        variant="dense"
        sx={{
          flexGrow: 1,
          background: "#fff",
          height: "96px",
        }}
      >
        <Grid
          container
          color={"black"}
          justifyContent={"space-between"}
          alignItems="center"
        >
          <Grid item>
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
          <Grid item>
            <img src={Logo} alt="" />
          </Grid>
          <Grid item>Texto 3</Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
