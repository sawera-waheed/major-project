import React from 'react'
import {BUTTON} from "./Style"
const Button = (props) => {
  return (
    <BUTTON onClick={props.function}>{props.text}</BUTTON>
  )
}

export default Button;
