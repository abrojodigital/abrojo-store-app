import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { Button, Image, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { styles } from "./styles";
import { addToCart } from "../../store/actions";

const Product = () => {
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState(null);
  const product = useSelector((state) => state.products.selected);

  const onAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        category: product.category,
        name: product.name,
        description: product.description,
        image: product.image,
        price: product.price,
        size: selectedSize,
      })
    );
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
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
      <Button title="Add to Cart" onPress={onAddToCart} />
    </View>
  );
};

export default Product;
