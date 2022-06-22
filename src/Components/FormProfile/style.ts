import { Input, Stack, styled } from "@mui/material";

const StyledInput = styled(Input)(({ theme, readOnly }) => ({
  background: "#fff",
  borderRadius: "10px",
  border: "none",
  fontFamily: `${theme.typography.body2.fontFamily}`,
  fontWeight: "700",
  color: `${readOnly ? theme.palette.grey[300] : theme.palette.grey[500]}`,
  "& .MuiInput-input": {
    width: "100%",
    fontSize: "24px",
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `${theme.spacing(2)}`,
    "&::placeholder": {
      color: `black`,
    },
  },
}));

const StyledLabel = styled("label")(({ theme }) => ({
  color: `${theme.palette.grey[500]}`,
  fontFamily: `${theme.typography.body2.fontFamily}`,
  fontWeight: "700",
  fontSize: "24px",
}));

const StyledStack = styled(Stack)(({ theme }) => ({
  height: "90px",
}));

export { StyledInput, StyledLabel, StyledStack };
