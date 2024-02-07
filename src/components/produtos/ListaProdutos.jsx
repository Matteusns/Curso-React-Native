import React from "react";
import { Text } from "react-native";
import estilo from "../estilo";

import produtos from "./produtos";

export default props => {
    return (
        <>
            <Text style={estilo.txtG}>
                Lista de Produtos
            </Text>
            {produtos.map(produto => {
                return <Text key={produto.id}>{produto.id} - {produto.nome} custa: R${produto.preco}</Text>
            })}
        </>

    )
}