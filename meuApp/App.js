import React from "react";
import {View, Text, Image} from 'react-native'

function App(){
  
  let nome = 'Carlos Renielly'
  
  
  
  return(
    <View>
      <Text>Olá Seja bem vindo!</Text>
      <Text style={{color:'#FF0000', fontSize:25, margin: 15}}>Meu primeiro App</Text>
      <Text style= {{fontSize: 18, color: 'green'}}>
        Sujeito Programador
      </Text>


      <Text style= {{fontSize:20}}>
        {nome}
      </Text>

      <Logo Largura={300} altura={300} Fulano={'CARLÃO'}/>

    </View>
  )
}

  export default App



  function Logo(props){
    
    let img = 'https://sujeitoprogramador.com/reactlogo.png'
    
    return(
      <View>
        <Image source={{uri: img}} style={{width: props.Largura, height: props.altura}}/>
        <Text>{props.Fulano}</Text>
      </View>
    )
  }