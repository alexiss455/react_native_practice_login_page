import { Text, TouchableOpacity, StyleSheet } from "react-native";

export const CustomBtnColor = ({ title, HandlePress }) => {
  return (
    <TouchableOpacity style={styles.btnColor} onPress={HandlePress}>
      <Text style={styles.btnTextColor}>{title}</Text>
    </TouchableOpacity>
  );
};
export const CustomBtnPlane = ({ label, HandlePress }) => {
  return (
    <TouchableOpacity style={styles.btnPlane} onPress={HandlePress}>
      <Text style={styles.btnTextPlane}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnColor: {
    backgroundColor: "#3D9332",
    alignItems: "center",
    padding: 10,
    borderRadius: 7,
    marginTop: 2,
  },
  btnTextColor: {
    color: "#ffffff",
    fontWeight: "700",
    fontSize: 16,
  },

  btnPlane: {
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#475E76",
    borderRadius: 9,
    paddingVertical: 10,
    marginVertical: 3,
    paddingHorizontal: 10
  },
  btnTextPlane: {
    color: "#475E76",
    fontWeight: "700",
    fontSize: 16,
  },
});
