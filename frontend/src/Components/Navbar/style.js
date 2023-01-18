import {Grid} from "@mui/material";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
const GRID= styled(Grid)`
background-color: #162D5D;
padding:5px 10px 5px 10px;
color: white;
`

const LINK= styled(Link)`
text-decoration: none;
color: white;
margin-right:10px;
padding:10px;
font-size: 16px;
&:hover{
    border:2px solid #caf0f8;
    border-radius: 5px;
    background-color: #caf0f8;
    color:#162D5D;
}
`
export {GRID, LINK}