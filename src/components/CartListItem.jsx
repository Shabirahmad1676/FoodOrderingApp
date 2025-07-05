import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { useCart } from '../providers/CartProvider'

const CartListItem = ({ CartItem }) => {
  const { increment,decrement} = useCart()
    console.log(CartItem)
  return (
    <View style={styles.container}>
      <Image source={{ uri: CartItem.product.image }} style={styles.image} resizeMode='contain' />
      <View style={styles.nameContainer}>
        <Text style={{ fontSize: 15 }}>{CartItem.product.name}</Text>
       <View style={styles.size}>
  <Text>$: <Text style={{ color: 'blue' }}>{CartItem.product.price}</Text></Text>
  <Text>Size: <Text style={{ color: 'green', fontWeight: 'bold' }}>{CartItem.size}</Text></Text>
</View>
      </View>
      <View style={styles.quantity}>
       <Pressable onPress={()=>decrement(CartItem.product_id,CartItem.size)}>
   <FontAwesome name="minus" />
</Pressable>
        <Text>{CartItem.quantity}</Text>

<Pressable onPress={()=>increment(CartItem.product_id,CartItem.size)}>
   <FontAwesome name="plus" />
</Pressable>
       
      </View>
    </View>
  )
}

export default CartListItem

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    boxShadow: 'black',
    borderRadius: 20,
    padding: 10,
    justifyContent: 'center',
    margin: 10,
    gap: 10,
    // maxWidth:340,
    // justifyContent:'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  image: {
    width: '30%',
    height: '100%'
  },
  nameContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  size: {
    flex: 1,
    flexDirection: 'row',
    gap: 10
  },
  quantity: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  }
})