import { View, Text, Image, StyleSheet, Pressable, Alert } from "react-native";
import React, { useState } from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import products from "@/assets/data/products";
import Button from "@/src/components/Button";

const sizes = ["L", "M", "S", "Xl"];
export default function productDetailScreen() {
  const { id } = useLocalSearchParams();
  const[selected,setSelected] = useState('L')

  //to get selected product
  const product = products.find((p) => p.id.toString() === id);

  // Add to cart function
  const addToCart = ()=>{
    console.warn("Added to Cart", `${selected}) has been added to your cart.`);
  }

  if (!product) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 18, color: "#b71c1c" }}>Product not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product.name }} />
      {/* image of product */}
      <Image
        source={{ uri: product.image || "https://via.placeholder.com/150" }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.name}>{product.name}</Text>

      {/* size selection */}
      <Text style={styles.sectionTitle}>Select Size</Text>
      <View style={styles.sizesContainer}>
        {sizes.map((size) => (
          <Pressable onPress={()=>{ setSelected(size) }} key={size} style={[styles.sizeBox,{backgroundColor:selected===size?'gray':'white'}]}>
            <Text style={[styles.sizeText,{color:selected===size?'red':'blue'}]}>{size}</Text>
          </Pressable>
        ))}
      </View>

      {/* price */}
      <Text style={styles.price}>
        Price: <Text style={styles.priceValue}>${product.price}</Text>
      </Text>
      <Button  onPress={addToCart} text="Add to Cart" />
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    // backgroundColor:'red',
    flex:1,
    borderRadius:20,
    padding:20,
    // marginVertical:10,
  },
  image:{
    width:'100%',
    aspectRatio:1,
  },
  name:{
    fontSize:22,
    fontWeight:'bold',
    marginVertical:10,
    color:'#333',
    textAlign:'center',
    marginTop:10,
  },
  sectionTitle:{
    fontSize:20,
    // color:'green',
    marginVertical:10,
    fontFamily:'Arial',
  },
  sizesContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:10,
  },
  sizeBox:{
    backgroundColor:'red',
    padding:20,
    borderRadius:20,
  },
  sizeText:{
    fontSize:20,
    color:'white',
    fontWeight:'bold',
  },
  price:{
    fontSize:20,
    color:'blue',
    marginVertical:'auto',
  },
  priceValue:{
    fontWeight:'bold',
    color:'green',
  }

})
