
import React,{Component} from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native'; 

const produtos= [
    {
        id:'001',
        desc: ['TV','2.000']
    },
    {
        id:'002',
        desc: ['Maquina de lava','2.000']
    },
    {
        id:'03',
        desc: ['Guarda roupa ','300']
    },
    {
        id:'04',
        desc: ['Comoda','300']
    },
    {
        id:'05',
        desc: ['Pia de coninha com armario','400']
    },
    {
        id:'05',
        desc: ['Pia de coninha com armario','400']
    },
    {
        id:'06',
        desc: ['Geldeira','500']
    },
    {
        id:'07',
        desc: ['Armario pequeno','100']
    },
    {
        id:'08',
        desc: ['Armario preto','100']
    },
    {
        id:'09',
        desc: ['Cadeira de imbuia','200']
    },
    {
        id:'010',
        desc: ['Mezinha de imbua','400']
    }
]
export default function(){
    return(
        <View>
                <FlatList 
                    data={produtos}
                    keyExtractor={item=>item.id}
                    renderItem={({item})=><View style={estilos2.item}><Text style={estilos2.prod}>Descrição: {item.desc[0]} - Valor: {item.desc[1]}</Text></View>}
                />
        </View>
    )
}
const estilos2 = StyleSheet.create({
    item:{
        backgroundColor:'#585858',
        padding: 15,
        marginVertical:8,
        marginHorizontal:16,
        borderRadius:10
    },
    prod:{
       fontSize:15,
       color:'#fff' 
    }
})