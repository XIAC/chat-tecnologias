import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Form, Item, Input, Button, Text } from 'native-base';
import logo from '../assets/chat.png';
export default function Login() {
  return (
    <View>
        {/* imagen logo */}
        <View>
            <Image source={logo} resizeMode="contain" style={estilo.logo}/>
        </View>
        {/* casilla de texto */}
        <Form>
            <Item>
              <Input placeholder="Ingrese nombre de usuario" style={{color:"#fff"}}/>
            </Item>
            <Button>
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
    }
})
