import React, {useState} from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Form, Item, Input, Button, Text } from 'native-base';
import logo from '../assets/chat.png';
export default function Login(props) {
    const { setNombreUsuario } = props;
    const [ nombre, setNombre ] = useState('');
    const entrar = () => {
        setNombreUsuario(nombre);
    }
  return (
    <View>
        <View>
            <Image source={logo} resizeMode="contain" style={estilo.logo}/>
        </View>
        <Form>
            <Item>
              <Input 
                placeholder="Ingrese nombre de usuario" 
                style={{color:"#fff"}}
                value={ nombre }
                onChange = { (e) => setNombre(e.nativeEvent.text)}
                />
            </Item>
            <Button style={ estilo.btnLogin } onPress={ entrar }>
                <Text>Ingresar</Text>
            </Button>
        </Form>
    </View>
  );
}
const estilo = StyleSheet.create({
    logo:{
        width: '100%',
        height: 200,
        marginBottom: 30,
        marginTop: 30
    },
    input:{
        color:"#fff"
    }, 
    btnLogin:{
        marginTop: 40,
        justifyContent: "center",
        backgroundColor: "#0098d2"
    }
})
