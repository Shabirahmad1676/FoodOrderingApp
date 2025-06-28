import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import products from '@/assets/data/products';

export default function productDetailScreen () {
  const {id} = useLocalSearchParams();

  const product = products.find((p)=>p.id.toString()===id)

  if(!product){
    return (
      <View style={styles.centered}>
        <Text style={styles.notFoundText}>Product not found</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{title:product.name}} />
      <Image
        source={{uri:product.image || 'https://via.placeholder.com/150'}}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>Price: <Text style={styles.priceValue}>${product.price}</Text></Text>
      {/* Add more styled product details here if needed */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    aspectRatio:1,
    // height: 180,
    borderRadius: 16,
    marginBottom: 20,
    backgroundColor: '#f2f2f2',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#222',
    textAlign: 'center',
  },
  price: {
    fontSize: 18,
    color: '#444',
    marginBottom: 8,
  },
  priceValue: {
    fontWeight: 'bold',
    color: '#2e7d32',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  notFoundText: {
    fontSize: 18,
    color: '#b71c1c',
  },
});