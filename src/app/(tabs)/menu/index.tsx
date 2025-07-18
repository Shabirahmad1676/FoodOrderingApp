import { FlatList } from "react-native";
import { View } from "@/src/components/Themed";
import products from "@/assets/data/products";
import ProductListItem from "@/src/components/ProductListItemUI";

export default function MenuScreen() {
  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductListItem product={item} />}
        numColumns={2}
        contentContainerStyle={{gap:10,padding:5}}
        columnWrapperStyle={{gap:10}}
      />
    </View>
  );
}
