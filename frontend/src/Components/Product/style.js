// import { Grid, Paper, Card} from "@mui/material";
// import styled from "@emotion/styled";

// const GRID = styled(Grid)`
// display: flex;
// justify-content: space-between;
// `
// const PAPER = styled(Card)`
// width:300px;
// height:auto;
// margin-bottom: 20px;
// text-align:center
// `
// export {GRID, PAPER}
import styled from "@emotion/styled";
import { Button, Card, Grid } from "@mui/material";

const GRID = styled(Grid)`
  display: flex;
  justify-content: space-between;
`;
const SPAN=styled.span`
display:flex;
justify-content: center;
align-items: center;
`
const IMG = styled.img`
  height: 150px;
  width: auto;
`;
const P = styled.p`
  font-size: ${(props) => (props.size ? props.size : "16px")};
`;

const CARD = styled(Card)`
width:300px;
height:auto;
margin-bottom: 20px;
text-align:center
`;

const BUTTON=styled(Button)`
background-color: #55AAFF;
color:white;
padding: 10px 20px 10px 20px;
&:hover{
    color:#55AAFF;
    border :2px solid #55AAFF;
}
`

export { GRID, IMG, P ,CARD, SPAN, BUTTON};
