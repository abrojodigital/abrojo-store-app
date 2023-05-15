import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Categories, Checkout, Product, Products } from "../../screens";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Categories">
      <Stack.Screen name="Categories" component={Categories} options={{ headerShown: false }} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Checkout" component={Checkout} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
