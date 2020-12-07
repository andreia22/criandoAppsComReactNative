import React from 'react';
import { StyleSheet, Text,View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
 
const Pilha=createStackNavigator();

function TelaHome({navigation}) {
  return(
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>Tela Home</Text>
      <Text>Desenvolvedora e Programadora ReactNative</Text>
      <Button
         title="Tela Inicial"
         onPress={()=>navigation.navigate('Postagens')}
      />
    </View>
  );
}

function TelaPostagens({navigation}) {
  return(
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>Tela de Postagens</Text>
      <Text>pasqual1982.ap@gmai.com</Text>
      <Button
         title="Tela Postagens"
         onPress={()=>navigation.navigate('Home')}
      />
      <Button
         title="voltar"
         onPress={()=>navigation.goBack()}
      />
    </View>
  );
}
export default function App1(){
  return (
    <NavigationContainer>
      <Pilha.Navigator initialRouteName="TelaHome">
        <Pilha.Screen
        name="Home"
        component={TelaHome}
        options={{title: 'Tela inicial'}}
        />
        <Pilha.Screen
        name="Postagens"
        component={TelaPostagens}
        options={{title: 'Tela da postagens pessoais'}}
        />
      </Pilha.Navigator>
    </NavigationContainer>
  );
};
const estilo = StyleSheet.create({
  
})

/*USESTATE COM COMPONENTES:
 export default function App1(){
  const [ligado,setLigado]=useState(true)
  return (
    <View style={Estilos.conteiner}>
      <Button
        title={ligado?"Desligar":"Ligar"}
        onPress={()=>setLigado(!ligado)}
      />
      {ligado? 
      <View>
      <Text style={Estilos.textoDia}>Vendo</Text>
      <Text style={Estilos.textoPadrao}>Motivo mudança</Text> 
      </View>
      :
      <Text>***</Text>
      }    
   </View>
    );
};*/

/*safeAreWiew fz a rendenizacao dos componentes dentro de uma area de segurança dentro dispositivo muito usado
 no ios principalmete mais seguro que o Wiew*/

/*function msg(){
 Alert.alert('OI', 'Eu estou chegando')
}

 const dobro=n=>n*2
/* forma maids basica quando ha somente um paramtro ou quando fotr apenas uma linha " const soma=(n1,n2)=>n1+n2" */
/*const soma=(n1,n2)=>{
  return n1+n2 
}
export default function App1(){
  let fExibir= true;
  return(
    <View style={Estilos.conteiner}>
      <Button
        title="Mostrar mensagem"
        onPress={msg}
      />
     <Text> {dobro(2)}</Text>
     <Text> {soma(2,4)}</Text>
      <Image
        source={{uri:'http://marketingdeconteudo.com/wp-content/uploads/2016/08/imagens-gratis-1.jpg'}}
         style={estlilo.logo}
      />
      <Caixas exibir={fExibir}/>
      <Text style={Estilos.textoDia}>vamo que vamo</Text>
      <Text style={Estilos.textoPadrao}>cada dia aprendo mais</Text>
      {fExibir?<Text>RENDERIZAÇÃO MOSTRE</Text>:<Text>NAO MOSTRE</Text>}
      {fExibir && <Text>RENDERIZAÇÃO MOSTRE</Text>}
      <Image 
        source={require('./assets/logo1.jpg')}
      />
    </View>
  )
}*/



/*(AEROFUNCTION )
const fExibir = (valor1)=> {
  if(valor1){
    return(<Text>RENDERIZAÇÃO MOSTRE</Text>)
  }else{
return(<Text>NAO MOSTRE</Text>)
  }  
}*/
/*RENDERIZAÇÃO CONDICIONAL: podeser usado apartir de uma funcao apenas uma varivel que ja e inicializade como TRUE
 ou FALSE e podemos usar aerofunction aerofunction.
/* propriedades: style e uma propriedade tambem, 
/* formatacao inline enecessario duas chaves*/
/*Podemos ulilizar tanto o componente de classe como o de função, ma e ncessario faser a importacao do
 componente podemos utilizar os dois dependendo das necessidades do projeto, o babel e o responsvelpela 
traduação do jsx para o conteudo nativo da pratforma do aplicativo nativo ios ou android*/

/* criamos um componente e podemos reaproveila-lo em varios momentos entro do aplicativo*/

/*export default class app1 extends Component{
  render(){
    return(
      <View>
      <View>
        <Text>Vamos la agora eu consegui</Text>
      </View>
     <View>
      <Text>Vamos la agora eu consegui</Text>
      <Text>Vamos la agora eu consegui</Text>
    </View>
    </View>
    );
  }
}*/
/* AEROFUNCTION:  (n)=> return n*2 apenas um parametro nao necessita os chaves e ainda posso tirar o return que
nao vai dar erro
 (n1,n2)=>{return n1+n2}
  SINTXE BASICA 
  uso uma variavel constante para referenciar no projetoaoinves de usar ma funcao.
  
  */
 /*const imgbg1= './assets/imagens/back1.jpg'{{uri:'https://th.bing.com/th/id/OIP.VJ4sDDOOPuX3t1SAhmSClQHaE8?pid=Api&rs=1'}}
const imgbg2= './assets/imagens/back2.jpg'
const imgbg3= './assets/imagens/back3.jpg' para usar com o requeire "source={require('imgbg1')}" */

/*<ImageBackground
source={{uri:'https://th.bing.com/th/id/OIP.VJ4sDDOOPuX3t1SAhmSClQHaE8?pid=Api&rs=1'}}
style={estilo.imagemFundo}
</ImageBackground>*/

/*  ESTATUSBAR COM FUNCOES ANONIMAS OU AEROFUNCTION 
import React,{useState} from 'react';
import { StyleSheet, Text, SafeAreaView, StatusBar, Button } from 'react-native';
import Estilos from './estilos/Estilos.js';

export default function App1(){
  const [cor, setCor]=useState("black")
  return (
    <SafeAreaView style={Estilos.conteiner}>
      <StatusBar
       backgroundColor={cor}
       barStyle="dark-content" 
       hidden={false}
       Animated={true} 
       networkActivityIndicatorVisible={false}
       translucent={true}
       />
       
      <Text>Em Caçador</Text>
      <Text>Por Enquanto</Text>
      <Button
        title="Azul"
        onPress={()=>{setCor('red')}}
      />
      <Button
        title="Vermelho"
        onPress={()=>{setCor('green')}}
      />
      <Button
        title="Verde"
        onPress={()=>{setCor('grey')}}
      />
    </SafeAreaView>
  );
};
const estilo = StyleSheet.create({
       
      <Text>Em Caçador</Text>
      <Text>Por Enquanto</Text>
      <Button
        title="Azul"
        onPress={()=>{mudaCor("blue")}}
      />
      <Button
        title="Vermelho"
        onPress={()=>{mudaCor("red")}}
      />
      <Button
        title="Verde"
        onPress={()=>{mudaCor("green")}}
      />
    </SafeAreaView>
  );
};
const estilo = StyleSheet.create({
  logo:{
    width:400,
    height:150,
    resizeMode: 'stretch'
 },
 imagemFundo:{
   flex:2,
   resizeMode:"cover",
 }
})


*/