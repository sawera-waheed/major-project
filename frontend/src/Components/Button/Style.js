import { Button } from "@mui/material";
import styled from "@emotion/styled";

const BUTTON = styled(Button)`
  background-color: ${(props) => (props.bg ? props.bg : "#162D5D")};
  color: ${(props) => (props.color ? props.color : "white")};
  padding: 10px 20px 10px 20px;
  margin-right: 10px;
  &:hover {
    border: 2px solid ${props=>(props.borderColor ? props.borderColor : "#162D5D")};
    color: ${(props) => (props.borderText ? props.borderText : "#162D5D")};
  }
`;
export { BUTTON };
