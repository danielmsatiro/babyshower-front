import { Input, styled } from "@mui/material";

const StyledInput = styled(Input)(({ theme }) => ({
  background: "#fff",
  borderRadius: "10px",
  border: "none",
  "& .MuiInput-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
    color: `${theme.palette.grey[500]}`,
    fontFamily: `${theme.typography.body2.fontFamily}`,
    fontWeight: "700",
    fontSize: "24px",
    "&::placeholder": {
      color: `black`,
      fontFamily: `${theme.typography.body2.fontFamily}`,
      fontWeight: "700",
      fontSize: "24px",
    },
  },
}));

const StyledLabel = styled("label")(({ theme }) => ({
  color: `${theme.palette.grey[500]}`,
  fontFamily: `${theme.typography.body2.fontFamily}`,
  fontWeight: "700",
  fontSize: "24px",
}));

export { StyledInput, StyledLabel };
