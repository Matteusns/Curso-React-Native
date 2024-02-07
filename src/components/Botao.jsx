import React from "react";
import { Button } from "react-native";

export default props => {
    function execultar() {
        console.warn("foi")
    }
    return(
            <Button
                title="Executar 1"
                onPress={execultar}
            />
    )
}