import React, {useState} from 'react';
import {View, Text, Button, Modal, StyleSheet} from 'react-native';

export default function(){
    const [visivel, setVisivel]=useState(true)
     return(
        <View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={visivel}
                style={{}}
        >
                <View style={estilos.modal}>           
                    <Text style={estilos.textoModal}>Boa Noite</Text>
                    <Text style={estilos.textoModal}>Quase la</Text>
                    <Button
                        title="Fechar"
                        onPress={()=>{setVisivel(false)}}
                    />
                </View> 
            </Modal>
            <Button
                 title="Mostrar"
                 onPress={()=>{setVisivel(true)}}
            />
            
        </View>
    );
}
const estilos=StyleSheet.create({
    modal:{
        backgroundColor:"#000",
        margin:20,
        padding:20,
        borderRadius:20,
        elevetion:10
    },
    textoModal:{
        color:"#fff"
    }
})

/*MODAL:  é uma forma de apresentar um conteudo acima da View ele 
pode ser invisvel ou nao e posso colocar o que eu quizer, um text,  ele deve aparecer acima da view pode ser u botao que 
clicado mostra as configuracoes do app, ou um produto etc. */