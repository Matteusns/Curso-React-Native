import React, {useState} from "react";
import { Text, Button } from "react-native";
import estilo from "./estilo";

export default props => {
    const [numero, setNumero] = useState(props.numInicial)
    const inc = () => setNumero(numero + 1)
    const dec = () => setNumero(numero - 1)
    
    return (
        <>
            <Text style={estilo.txtG}> {numero}</Text>
            <Button
                title = "+"
                onPress={inc}
            />
            <Button
                title = "-"
                onPress={dec}
            />
        </>
    )
}