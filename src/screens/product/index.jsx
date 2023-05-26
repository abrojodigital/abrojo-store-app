import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { Button, Image, Text, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { styles } from "./styles";
import { PRODUCTS } from "../../constants";
import { addToCart } from "../../store/actions";

const Product = () => {
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const product = useSelector((state) => state.products.selected);

  const onAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (value) => {
    setQuantity(value);
  };

  const renderSizeOptions = () => {
    const sizes = Object.keys(product.stockBySize);
    return sizes.map((size) => <Picker.Item key={size} label={size} value={size} />);
  };

  return (
    <View style={styles.container}>
      <Image resizeMode="contain" source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>USD {product.price}</Text>
      <View style={styles.containerPicker}>
        <Picker selectedValue={selectedSize} onValueChange={handleSizeChange} style={styles.picker}>
          <Picker.Item label="Select Size" value={null} />
          {renderSizeOptions()}
        </Picker>
      </View>
      <View style={styles.quantityContainer}>
        <Text style={styles.quantityLabel}>Quantity:</Text>
        <TextInput
          style={styles.quantityInput}
          value={quantity.toString()}
          onChangeText={handleQuantityChange}
          keyboardType="numeric"
        />
      </View>
      <Button title="Add to Cart" onPress={addToCart} />
    </View>
  );
};

export default Product;
