import React from 'react'
import {BUTTON} from "./Style"
const Button = (props) => {
  return (
    <BUTTON onClick={props.function} bg={props.bg} color= {props.color} borderText ={props.borderText } borderColor ={props.borderColor }>{props.text}</BUTTON>
  )
}

export default Button;
