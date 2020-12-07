//import React from 'react'; para o funcional(function)
import React, {Component} from 'react';
import { StyleSheet, Text,View, Button } from 'react-native';
import Globais from './componentes/Globais';

/*export default function App1(){
  return (
    <View>
      <Text>Uma nova rede social.</Text>
    </View>
  );
};
const estilo = StyleSheet.create({
})*/

export default class AppsComReactNative extends Component{
  nome=Globais.nome
  amigos=Globais.amigos
  numero=Globais.numero
  render(){
    return(
    <View> 
      <Text>Nome: {this.nome}</Text>
      <Text>Amigos: {this.amigos}</Text>
      <Text>Números: {this.numero}</Text>
    </View>
  );
 } 
}