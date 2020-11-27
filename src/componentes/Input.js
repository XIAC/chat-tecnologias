import React from 'react';
import { View } from 'react-native';
import { Item, Input as InputNB } from 'native-base';

export default function Input() {
  return (
    <View>
        <Item>
            <InputNB placeholder="Mensaje....."/>
        </Item>
    </View>
  );
}
