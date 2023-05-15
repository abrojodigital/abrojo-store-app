import { Image, View } from "react-native";

const Header = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "white" }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        {/* branding */}
        <Image
          source={require("../../../assets/img/AbrojoStore.png")}
          style={{ width: 130, height: 130 }}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default Header;
