import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import bg from "../../assets/images/bg.png";

const GRID = styled(Grid)`
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-bottom: 100px;
`;
export { GRID };
