import React from "react";
import { StyleSheet, Text, View } from "react-native";
import estilo from "../estilo";

export default ({num}) => {
    return (
        <View style={style.display}>
            <Text style={[estilo.txtG, style.displayText]}>
                {num}
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    display: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#000',
        padding: 20,
        width: 300
    },
    displayText: {
        color: '#fff'
    }

})