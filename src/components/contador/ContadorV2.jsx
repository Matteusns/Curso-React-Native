import React, {useState} from "react";
import { Text } from "react-native";
import estilo from "../estilo";
import ContadorDisplay from "./ContadorDisplay";
import ContadorBotoes from "./ContadorBotoes";

export default props => {
    const [num, setNum] = useState(0);

    function inc() {setNum(num + 1)}
    function dec() {setNum(num - 1)}

    return (
        <>
            <Text style={estilo.txtG}>
                Contador
            </Text>
            <ContadorDisplay 
                num={num}
            />
            <ContadorBotoes 
                inc={inc}
                dec={dec}
            />
        </>
    )
}