import React from 'react';
import { View, Text } from 'react-native';

export default function User({ navigation }) {
  return (
    <View>
      <Text>{navigation.getParam('User')}</Text>
    </View>
  );
}
