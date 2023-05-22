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
    backgroundColor: "#FFFFFF",
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#CCCCCC",
  },
});
