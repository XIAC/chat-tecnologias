import React , {useState}from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Item, Input as InputNB, Icon } from 'native-base';

export default function Input(props) {
  const { enviarMensaje } = props;
    const [mensaje, setMensaje] = useState('');
    const sendMensaje = () =>{
        if (mensaje.length > 0){
            console.log(mensaje);
            enviarMensaje(mensaje);
            setMensaje('');
        }
  }
  return (
    <View style= {estilo.contenido}>
        <Item style={estilo.itemInput}>
            <InputNB
                placeholder="Mensaje...." 
                style={estilo.input}
                value={mensaje}
                onChange= {(e) => setMensaje(e.nativeEvent.text)}
                placeholderTextColor="grey"/>
            <TouchableOpacity onPress={sendMensaje}>
                <Icon name="ios-mail-outline"  style={estilo.icono}/> 
            </TouchableOpacity>
        </Item>
    </View>
  );
}
const estilo = StyleSheet.create({
  contenido:{
      backgroundColor: "#16202b",
      paddingBottom: 20,
      paddingHorizontal: 20
  },
  itemInput: {
      borderColor: "#16202b"
  },
  input:{
      color: '#fff'
  },
  icono:{
      color:"#fff"
  }
})