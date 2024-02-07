import React, {useState} from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import estilo from "./estilo";

export default props => {
    const [nome, setNome] = useState('teste')
    return (
        <View>
            <Text> {nome} </Text>
            <TextInput 
                style = {styles.input}
                placeholder="Digite Seu nome"
                value={nome}
                onChangeText={nome => setNome(nome)}
            />
        </View>

    )
}


const styles = StyleSheet.create({
    input: {
      height: 40,
      width: '100%',
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 10,
      fontSize: 16,
      color: '#333',
    },
  });