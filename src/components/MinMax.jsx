import React from "react";
import { Text } from "react-native";
import estilo from "./estilo";

export default props => (
    <Text style={estilo.txtG}>O texto de {props.max} é maior que o texto de {props.min}</Text>
)