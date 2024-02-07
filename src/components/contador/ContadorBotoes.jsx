import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import estilo from "../estilo";

export default props => {
    return (
        <View style={style.AreaButton}>
            <Button 
                title="+"
                onPress={props.inc}
                style={style.Button}
            />
            <Button 
                title="-"
                onPress={props.dec}
                style={style.Button}
            />
        </View>
    )
}

const style = StyleSheet.create({
    AreaButton : {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    Button: {
        backgroundColor: '#40A2E3',
        color: '#FFF6E9'

    }
})