import React, {Component} from "react";

import estilo from "../estilo";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import Numero from "./Numero";

export default class Mega extends Component {
    state = {
        qtdNumeros: this.props.qtdNumeros || 0,
        numeros : []
    }

    alterarQtdNumero = (qtde) => {
        this.setState({qtdNumeros: +qtde})
    }

    gerarNumeroNaoContigo = nums => {
        const novo = parseInt(Math.random()*60) +1;
        return nums.includes(novo) ? this.gerarNumeroNaoContigo(nums): novo;
    }

    gerarNumeros = () => {
        const numeros = Array(this.state.qtdNumeros)
            .fill()
            .reduce(n => [...n, this.gerarNumeroNaoContigo(n)], [])
            .sort((a , b) => a -b)
        this.setState({numeros})
    }

    exibirNumeros = () => {
        const nums = this.state.numeros;
        return nums.map(num => {
            return <Numero numero={num}/>
        })

    }
    render() {
        return (
            <>
                <Text style={estilo.txtG}>
                    Gerador de Mega Sena {this.state.qtdNumeros}
                </Text>
                <TextInput style={styles.input} 
                    keyboardType="numeric"
                    placeholder="Quantidade de Números"
                    value ={`${this.state.qtdNumeros}`}
                    onChangeText={qtd => this.alterarQtdNumero(qtd)}
                />
                <Button
                    title="Gerar"
                    onPress={this.gerarNumeros}
                />
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    {this.exibirNumeros()}
                </View>
            </>
        )
    }
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