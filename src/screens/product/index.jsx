import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { Image, Text, View } from "react-native";

import { styles } from "./styles";
import { PRODUCTS } from "../../constants";

const Product = ({ route }) => {
  const { productId } = route.params;
  const product = PRODUCTS.find((product) => product.id === productId);
  const [selectedSize, setSelectedSize] = useState(null);

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
      <Picker selectedValue={selectedSize} onValueChange={handleSizeChange} style={styles.picker}>
        <Picker.Item label="Select Size" value={null} />
        {renderSizeOptions}
      </Picker>
    </View>
  );
};

export default Product;
