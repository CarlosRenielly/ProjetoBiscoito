import React, {useState} from "react";
import {View, Text, Button, Alert} from 'react-native'

function App(){
  const [nome, setNome] = useState('Carlos Ranielly');
  const [idade, setIdade] = useState (29)

  function entrar(nome, idade){
    setNome(nome);
    setIdade(idade);
  }

  return(
    <View style={{marginTop:25}}>
      <Text style={{fontSize:20}}>{nome}</Text>
      <Text style={{fontSize:20}}>{idade}</Text>
      <Button title="Acessar" onPress={() => entrar('Homem esta la', 33)}/>

    </View>
  )
}

  export default App



  