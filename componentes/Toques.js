import React,{useState} from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity,TouchableWithoutFeedback } from 'react-native';

export default function(){
    const [cont, setCont]=useState(0)
    const contar=()=>{
        setCont(cont + 1)
    }
    return(
    <View>
        <TouchableHighlight
            style={estilos3.botao}
            onPress={contar} 
            underlayColor="#008"
        >   
        <Text>Andreia</Text>
        </TouchableHighlight>

        <TouchableOpacity
            style={estilos3.botao}
            onPress={contar} 
            underlayColor="#008"
            >
            <Text>Andreia</Text>
     </TouchableOpacity>

        <TouchableWithoutFeedback
            style={estilos3.botao}
            onPress={contar} 
            underlayColor="#008"
        >   
        <Text>Andreia</Text>
        </TouchableWithoutFeedback>
            <Text>{cont}</Text>
    </View>
    );
}
const estilos3 = StyleSheet.create({
    botao:{
        alignItems:"center",
        backgroundColor:"#ccc",
        padding:10
    }
})





/* TOUCHABLEHIGHT possibilita fazermos toques na tela adicionando funcionaldades
 a ele pode ser uma imagem um boto um texto e etc*/