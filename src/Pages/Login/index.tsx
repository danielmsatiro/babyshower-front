import { Box, Grid, Hidden } from "@mui/material";
import { theme } from "../../Styles/theme";
import Image from "../../Assets/image-login.svg";
import { FormLogin } from "../../Components/FormLogin";

const Login = () => {
  return (
    <Box
      sx={{
        background: `linear-gradient(66.14deg,${theme.palette.primary.main} 3.42%, ${theme.palette.secondary.main} 81.17%)`,
        minHeight: "100vh",
        minWidth: "370px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        direction={"row"}
        maxWidth={["400px", "600px", "800px"]}
        m={[2, 4, 6, 10, 12]}
        sx={{
          border: "1px #fff solid",
          borderRadius: "20px",
          boxShadow: "-9px 8px 60px rgba(0, 0, 0, 0.25)",
          background: "rgba(216, 191, 240, 0.08)",
          overflow: "hidden",
        }}
      >
        <Grid
          item
          sm={7}
          container
          justifyContent={"center"}
          p={[2, 4, 12]}
          sx={{
            boxSizing: "border-box",
            display: { xs: "none", md: "flex" },
          }}
        >
          <img width="100%" height="auto" src={Image} alt="" />
        </Grid>
        <Grid
          item
          md={5}
          container
          justifyContent={"center"}
          p={3}
          sx={{
            width: "100%",
            heigth: "100%",
            background: "#fff",
          }}
        >
          <FormLogin />
        </Grid>
      </Grid>
    </Box>
  );
};
export { Login };
