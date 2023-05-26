import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { styles } from "./styles";
import { ProductItem } from "../../components/product-item";
import { selectProduct } from "../../store/actions";

const Products = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  const { categoryId, color } = route.params;

  const onSelected = (item) => {
    dispatch(selectProduct(item.id));
    navigation.navigate("Product", {
      productId: item.id,
      name: item.name,
    });
  };

  const filteredProducts = products.filter((product) => product.category === categoryId);

  const renderItem = ({ item }) => (
    <ProductItem item={item} onSelected={onSelected} color={color} />
  );
  const keyExtractor = (item) => item.id.toString();
  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={filteredProducts} renderItem={renderItem} keyExtractor={keyExtractor} />
    </SafeAreaView>
  );
};

export default Products;
