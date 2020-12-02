import React,{useState} from 'react';
import {View,Text, ScrollView, RefreshControl } from 'react-native';

export default function(){
    const [atualiza, setAtuliza]=useState(false)
    const aoAtulizar=()=>{
        setAtuliza(true);
        //codigo de atualizacao  vem aqui
        setTimeout(()=>{setAtuliza(false)},3000);
    }
    return(
       <View style={{flex:1}}>
           <ScrollView 
                style={{backgroundColor:'#333', padding:15}}
                refreshControl={
                    <RefreshControl
                        refreshing={atualiza}
                        onRefresh={aoAtulizar}
                    />
                }    
            >
           <Text style={{color:'#eee'}}>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec ipsum urna. Sed iaculis magna id tincidunt tincidunt. Ut a facilisis urna, sed cursus leo. Nulla sed sapien tincidunt metus laoreet mattis. Curabitur in ipsum placerat, ornare mi in, laoreet risus. Suspendisse pellentesque, velit ac facilisis feugiat, diam neque placerat ex, ut elementum enim leo vel mauris. Donec mollis diam eu libero eleifend, dignissim accumsan sem maximus. Phasellus consequat id nulla in porta. Suspendisse quis finibus enim, eu malesuada ipsum. Aliquam at arcu sit amet risus pulvinar elementum at in tellus. Vivamus tortor nulla, posuere quis est et, consectetur aliquet.
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec ipsum urna. Sed iaculis magna id tincidunt tincidunt. Ut a facilisis urna, sed cursus leo. Nulla sed sapien tincidunt metus laoreet mattis. Curabitur in ipsum placerat, ornare mi in, laoreet risus. Suspendisse pellentesque, velit ac facilisis feugiat, diam neque placerat ex, ut elementum enim leo vel mauris. Donec mollis diam eu libero eleifend, dignissim accumsan sem maximus. Phasellus consequat id nulla in porta. Suspendisse quis finibus enim, eu malesuada ipsum. Aliquam at arcu sit amet risus pulvinar elementum at in tellus. Vivamus tortor nulla, posuere quis est et, consectetur aliquet.
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec ipsum urna. Sed iaculis magna id tincidunt tincidunt. Ut a facilisis urna, sed cursus leo. Nulla sed sapien tincidunt metus laoreet mattis. Curabitur in ipsum placerat, ornare mi in, laoreet risus. Suspendisse pellentesque, velit ac facilisis feugiat, diam neque placerat ex, ut elementum enim leo vel mauris. Donec mollis diam eu libero eleifend, dignissim accumsan sem maximus. Phasellus consequat id nulla in porta. Suspendisse quis finibus enim, eu malesuada ipsum. Aliquam at arcu sit amet risus pulvinar elementum at in tellus. Vivamus tortor nulla, posuere quis est et, consectetur aliquet.
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec ipsum urna. Sed iaculis magna id tincidunt tincidunt. Ut a facilisis urna, sed cursus leo. Nulla sed sapien tincidunt metus laoreet mattis. Curabitur in ipsum placerat, ornare mi in, laoreet risus. Suspendisse pellentesque, velit ac facilisis feugiat, diam neque placerat ex, ut elementum enim leo vel mauris. Donec mollis diam eu libero eleifend, dignissim accumsan sem maximus. Phasellus consequat id nulla in porta. Suspendisse quis finibus enim, eu malesuada ipsum. Aliquam at arcu sit amet risus pulvinar elementum at in tellus. Vivamus tortor nulla, posuere quis est et, consectetur aliquet.
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec ipsum urna. Sed iaculis magna id tincidunt tincidunt. Ut a facilisis urna, sed cursus leo. Nulla sed sapien tincidunt metus laoreet mattis. Curabitur in ipsum placerat, ornare mi in, laoreet risus. Suspendisse pellentesque, velit ac facilisis feugiat, diam neque placerat ex, ut elementum enim leo vel mauris. Donec mollis diam eu libero eleifend, dignissim accumsan sem maximus. Phasellus consequat id nulla in porta. Suspendisse quis finibus enim, eu malesuada ipsum. Aliquam at arcu sit amet risus pulvinar elementum at in tellus. Vivamus tortor nulla, posuere quis est et, consectetur aliquet.
           </Text>
           </ScrollView>
        </View> 
    );
}
/* SCROLLVIEW: componente que permite a rolagem do texto pode ter varias funcionalidades como em cadastros e etc*/ 
/* REFRESHCONTROL: QUANDO QUEREMOS INDICAR QUE A PAGINA ESTA CAREGANDO OU ATUALIZANDO */