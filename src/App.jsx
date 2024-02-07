import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import css from './components/estilo'

import Primeiro from './components/Primeiro';
import {Comp1} from './components/Multi';
import MinMax from "./components/MinMax";
import Botao from "./components/Botao";
import Contador from "./components/Contador";

export default () => (
    <SafeAreaView style={css.App}>
        {/* <Primeiro />
        <Comp1 /> 
        <MinMax min="3" max="4"/>
        <Botao />
        */}
        <Contador numInicial={10}/>
    </SafeAreaView>
)