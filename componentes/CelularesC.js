import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class Celular extends Component{
    state={
            ligado:true
        }
    render(props){    
        return(
            <View>
                <Text>Celular:{this.props.marca} - Ligado:{this.state.ligado ? "Sim" : "Não"}</Text>
                <Button
                    title={this.state.ligado ? "Desligar" : "Ligar"}
                    onPress={
                        ()=>{this.setState({ligado: !this.state.ligado})}
                    }
                />        
            </View>
        )
    }

}

