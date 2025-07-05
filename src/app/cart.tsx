import { View, Text, Platform, FlatList } from 'react-native'
import React from 'react'
import { useCart } from '../providers/CartProvider'
import { StatusBar } from 'expo-status-bar'
import CartListItem from '../components/CartListItem'
import Button from '../components/Button'


const CartScreen = () => {
   const {items,total} = useCart()

  return (
    <View>
     <FlatList data={items} renderItem={({item})=><CartListItem CartItem={item} />} />
      
        <Text style={{ fontWeight: 'bold', fontSize: 18, margin: 10 , marginTop:20}}>
          Total: ${total.toFixed(2)}
        </Text>
    
     <Button  text='CheckOut' />
      <StatusBar  style={Platform.OS === 'ios' ? 'light': 'auto'}/>
    </View>
  )
}

export default CartScreen