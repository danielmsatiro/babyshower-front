import { styled, InputBase } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "20px",
  border: `1px solid ${theme.palette.grey[100]}`,
  backgroundColor: "#f3f3f3",
  transition: theme.transitions.create("background"),
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(2),
  width: "auto",
  maxWidth: "408px",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
  },
}));

export { Search, SearchIconWrapper, StyledInputBase };
