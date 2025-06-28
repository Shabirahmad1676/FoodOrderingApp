import { View, Text, Platform } from 'react-native'
import React from 'react'
import { useCart } from './provider/CartProvider'
import { StatusBar } from 'expo-status-bar'


const CartScreen = () => {
   const {items} = useCart()

  return (
    <View>
      <Text>CartScreen  : {items}</Text>
      <StatusBar  style={Platform.OS === 'ios' ? 'light': 'auto'}/>
    </View>
  )
}

export default CartScreen