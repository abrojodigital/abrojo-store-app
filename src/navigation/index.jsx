import AuthNavigator from "./auth";
import { NavigationContainer } from "@react-navigation/native";
import TabsNavigator from "./tabs";
import { useSelector } from "react-redux";

const Navigation = () => {
  const userId = useSelector((state) => state.auth.userId);

  return (
    <NavigationContainer>{userId ? <TabsNavigator /> : <AuthNavigator />}</NavigationContainer>
  );
};

export default Navigation;
