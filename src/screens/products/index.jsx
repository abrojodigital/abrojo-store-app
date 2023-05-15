import { Button, Text, View } from "react-native";

import { styles } from "./styles";

const Products = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>
      <Button title="Go to Product" onPress={() => navigation.navigate("Product")} />
    </View>
  );
};

export default Products;
