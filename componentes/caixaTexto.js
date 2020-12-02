import React,{useState} from 'react';
import{View, TextInput, Text} from 'react-native';

export  default function(){
    const [nome, setNome]=useState("Andreia")
    const mudarNome=()=>{}

    return(
        <View>
            <Text>Digite seu nome:</Text>
            <TextInput
                style={{bordertWidth:1, borderColor:'#000' }}
                value={nome}
                onChangeText={text=>setNome(text)}
                autoCapitalize="words"
                multiline={true}
            />
            <Text>Valor digitado :{nome}</Text>
        </View>
    )
}
/* informa como o teclado vai funcionar se será tudo maisculo ou minusculo*/