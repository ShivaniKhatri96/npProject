import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Mountain from "../Components/Pictures/mountain.jpg";
import Divider from "@mui/material/Divider";
import { Button, TextField } from "@mui/material";
// { theme }

export const ItemImage = styled(Paper)(() => ({
  backgroundImage: `url(${Mountain})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "30vh",
  opacity: "0.8",
}));

export const ItemText = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  backgroundColor: "transparent",
  padding: theme.spacing(14),
  //   height: "30vh",
  textAlign: "center",
  fontWeight: "bold",
  fontSize: "30px",
}));

export const Divr1 = styled(Divider)(() => ({
  background: "#0396A6",
  height: "10px",
}));
export const Divr2 = styled(Divider)(() => ({
  background: "#4a98a1",
  height: "5px",
  boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;"
}));
export const InputBox = styled(TextField)`
width: 100%;
`
// export const InputBox = styled(TextField)(() => ({
//   width: "100%",
//   }));

export const Btn = styled(Button)`
width: 100%;
height: 7ch;
color: #ffffff;
font-weight: bold;
boxShadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
&:hover {
  background-color: #f07346;
}
// &:focus {
//   background-color: #F25C5C;
// }
`
;