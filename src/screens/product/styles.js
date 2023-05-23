import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  name: {
    fontFamily: "Inter-Medium",
    fontSize: 18,
    paddingVertical: 20,
  },
  description: {
    fontSize: 14,
    fontFamily: "Inter-Regular",
    paddingVertical: 10,
  },
  price: {
    fontSize: 18,
    fontFamily: "Inter-Bold",
    paddingVertical: 20,
  },
  weight: {
    fontSize: 12,
    fontFamily: "Inter-Regular",
  },
  image: {
    width: "100%",
    height: 260,
  },
  picker: {
    height: 30,
    width: "100%",
  },
  containerPicker: {
    flex: 1,
    height: 40,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  quantityLabel: {
    marginRight: 10,
    fontSize: 16,
  },
  quantityInput: {
    height: 40,
    width: 60,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
  },
});
