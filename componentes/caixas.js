
import React from 'react';
import {View } from 'react-native';

/*Sexport default function(props) {
     return(
    <View style={{width:'100%',height:300, flexDirection:'column',backgroundColor:'#999',
     justifyContent:'center', alignSelf:'stretch'}}>
        { 
                props.exibir ? 
                <View style={{flexGrow:1}}>
                    <View style={{flexGrow:1, backgroundColor:'#00f'}}></View>
                    <View style={{flexGrow:2, backgroundColor:'#00a'}}></View>
                    <View style={{flexGrow:3, backgroundColor:'#005'}}></View>
                </View>
            :
                <View style={{flexGrow:1}}>
                    <View style={{flexGrow:4, backgroundColor:'#f00'}}></View>
                    <View style={{flexGrow:5, backgroundColor:'#a00'}}></View>
                    <View style={{flexGrow:6, backgroundColor:'#500'}}></View>
                </View>
           }
        </View>
    )
}

/* CONTEINERS: flexiveis flexDirection controla a direcao dos componetes, row, column reverse*/
/* react native nao usa unidades de medidas*/
/* FLEX CONTAINER e o pai, e os flex item sao os filhos, flex box tem dois eixos 'x', e 'y'
 transversal e ertical* /
/* FLEXDIRECTION row e em linha se mudar para flex direction column e em coluna */
/* JUSTFYCONTENTdefine como os elementos sao distribuidos no eixo principal que dependem de ser alinhados em
row ou column se for row o eixo principale o x se for column e o y main axis ou ceoss axis*/ 
/* ALIGNiTENS e mais uma opção de alinhamento  e o eixo secundario  e o justfyContent e o eixo primarios*/
/* justfyContent e o alinhamento orizontal ou primario e alingItens e o alinhamento vertical ou 
secundario se alterpara column a ordem se invertrm*/
/*FLEXWRAP:  quebrar a linha caso os elemetos filhos nao caibam no elemento pai ou seja os itens nao caiam no coteiner*/
/*FLEXGROUW: serve para ajustar o elemento filho, flexItem devem ajustar o tamanho em relacao aos outros filhos 
entra no lugar de WIDTH e HEIGHT para ajustar altura e largura, sempre vai ajustar o tamaho em realaco aos outrositens 
com o tamanho do container.
*/