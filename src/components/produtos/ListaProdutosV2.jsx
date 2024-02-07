import React from "react";
import { Text, FlatList } from "react-native";
import estilo from "../estilo";

import produtos from "./produtos";

export default props => {
    return (
        <>
            <Text style={estilo.txtG}>
                Lista de Produtos V2
            </Text>
            
            <FlatList 
                data={produtos}
                keyExtractor={i => i.id}
                renderItem={({item: produto}) => {
                    return <Text key={produto.id}>{produto.id} - {produto.nome} custa: R${produto.preco}</Text>
                }}
            />
        </>

    )
}