import React from "react";
import { StyleSheet, Text, View } from "react-native";
import estilo from "../estilo";


export default ({numero}) => {
    return (
        <View style={style.container}>
            <Text 
                style={[estilo.txtG, style.numero]} 
                key={`numeroMega${numero}`}
            >
                {numero}
            </Text>
        </View>

    )
}

const style = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        backgroundColor: '#000',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    numero: {
        color: '#fff'
    }
})