import React, {useState} from 'react';
import {View, Text ,Switch} from 'react-native';

export default function(props){
    const [ligado,setLigado] = useState(false)
    const toggleLigdo=()=>setLigado(!ligado)
    return(
        <View>
            <Text>Celular:{props.marca} - Ligado:{ligado ? 'Sim' : 'Não'}</Text>
            <Switch
                trackColor={{false:'#777', true:'#8bf'}} 
                thumbColor={ligado ? '#00f' : '#444'} 
                value={ligado}
                onValueChange={toggleLigdo }  
            />
        </View>
    )
}

/* no componente funcional nao usamos o this usamos o nome do estado direto ao contrario do componente de classe*/