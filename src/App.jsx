import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import css from './components/estilo'

import Mega from "./components/mega/Mega";
//import DigiteSeuNome from "./components/DigiteSeuNome";
// import Primeiro from './components/Primeiro';
// import {Comp1} from './components/Multi';
// import MinMax from "./components/MinMax";
// import Botao from "./components/Botao";
// import Contador from "./components/Contador";
// import ContadorV2 from "./components/contador/ContadorV2";
// import UsuarioLogado from "./components/UsuarioLogado";
// import ListaProdutos from "./components/produtos/ListaProdutos";
//import ListaProdutosV2 from "./components/produtos/ListaProdutosV2";


export default () => (
    <SafeAreaView style={css.App}>
        <Mega />
        {/* <Primeiro />
        <DigiteSeuNome />
        <ListaProdutosV2 />
        <ListaProdutos />
        <UsuarioLogado usuario={{nome: 'Mateus', email: 'mateus@email.com'}}/>
        <Comp1 /> 
        <MinMax min="3" max="4"/>
        <Botao />
        <Contador numInicial={10}/>
        <ContadorV2 />
        */}
    </SafeAreaView>
)