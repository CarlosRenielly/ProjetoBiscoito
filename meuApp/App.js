import React, {useState} from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'

function App(){
  const [img, setImg] = useState(require('./src/biscoito.png'))
  const [textoFrase, setTextoFrase] = useState('')

  function quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * frase.length)
    setTextoFrase(frase[numeroAleatorio])
    setImg(require('./src/biscoitoAberto.png'))
    
  }

  let frase =[
    "Acredite em si mesmo e nos seus sonhos. Você é capaz de alcançar o impossível!",
    "A vida é curta demais para desperdiçar com arrependimentos. Viva intensamente todos os momentos!",
    "Nada é impossível para aquele que persiste e acredita em si mesmo. Você pode conquistar tudo o que deseja!",
    "A felicidade está nas pequenas coisas. Aproveite os detalhes e sorria sempre!",
    "Acredite no poder dos seus sonhos e vá em busca deles. Você é capaz de transformar o impossível em realidade!",
    "Seja gentil, ame profundamente, ria muito e viva uma vida plena. O mundo precisa do seu sorriso!",
    "A vida é uma aventura emocionante. Abrace as oportunidades, supere os desafios e crie uma história incrível!"
  ]
  
  
  function reiniciarBiscoito(){
    setImg(require('./src/biscoito.png'))
    setTextoFrase('')
  }



  return(
    <View style={styles.container}>
      <Image source={img}
      style={styles.img}
      />

      <Text style={styles.textofrase}>{textoFrase}</Text>

      <TouchableOpacity  style={styles.botao} onPress={quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar Biscoito!</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity  style={[styles.botao,{marginTop:15, borderColor:'#121212'}]} onPress={reiniciarBiscoito}>
        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto, {color:'#121212'}]}>Reiniciar Biscoito!</Text>
        </View>
      </TouchableOpacity>

    </View>
  )
}


const styles= StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  img:{
    width:230,
    height:230,
  },
  textofrase:{
    fontSize:20,
    color:'#dd7b22',
    margin:30,
    fontStyle:'italic',
    textAlign: 'center'
  },
  botao:{
    width:230,
    height:50,
    borderColor:'#dd7b22',
    borderWidth: 2,
    borderRadius: 25
  },
  btnArea:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  btnTexto:{
    fontSize:17,
    fontWeight: 'bold',
    color:'#dd7b22'
  }
})




  export default App



  