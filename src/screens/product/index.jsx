import { Button, Text, View } from "react-native";

import { styles } from "./styles";

const Product = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product</Text>
      <Button title="Checkout" onPress={() => navigation.navigate("Checkout")} />
    </View>
  );
};

export default Product;
