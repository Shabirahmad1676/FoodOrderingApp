import { Image, Pressable, StyleSheet ,Text, View } from 'react-native';
import { Product } from '../constants/types';
import { Link } from 'expo-router';

type ProductListItemProps = {
  product: Product
}

const ProductListItem = ({product} : ProductListItemProps)=>{
  return (
    <Link href={`/menu/${product.id}`} asChild>
     <Pressable style={styles.container}>
      <Image source={{ uri: product.image || 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/peperoni.png' }} style={styles.image} resizeMode='contain' />
      <Text>{product.name}</Text>
      <Text>{product.price}</Text>
    </Pressable>
    </Link>
  )
}

export default ProductListItem

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:12,
    backgroundColor:'gray',
    // margin:10  
    maxWidth:'50%'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  image:{
    width:"100%",
    aspectRatio:2/2,
    // height:100
  }
});
