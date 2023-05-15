import { useState } from "react";
import { Button, Text, View } from "react-native";

import { styles } from "./styles";

const categories = [
  { id: 1, category: "Pantalones | Bermudas" },
  { id: 2, category: "Remeras | Camisetas" },
  { id: 3, category: "Prendas Superiores" },
  { id: 4, category: "Camisas" },
  { id: 5, category: "Zapatos | Zapatillas" },
];

const Categories = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleClickCategory = (category) => {
    setSelectedCategory(category);
    navigation.navigate("Products", { category });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorias</Text>
      <View style={styles.categories}>
        {categories.map((category) => (
          <Button
            key={category.id}
            title={category.category}
            onPress={handleClickCategory}
            color={selectedCategory && selectedCategory.id === category.id ? "red" : "blue"}
          />
        ))}
      </View>
    </View>
  );
};
export default Categories;
