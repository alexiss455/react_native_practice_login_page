import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  useWindowDimensions,
  TextInput,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
export default function App() {
  const { width: windowWidth } = useWindowDimensions();

  return (
    <View style={styles.top_back_image}>
      <ImageBackground
        source={require("./assets/images/desktop_bg.png")}
        style={{
          width: windowWidth,
          height: "100%",
          ...styles.backGround_image,
          ...StyleSheet.absoluteFillObject,
          top: 0,
          left: 0,
        }}
      ></ImageBackground>
      <LinearGradient
        colors={[
          "#3fb54b",
          "transparent",
          "transparent",
          "transparent",
          "transparent",
          "transparent",
          "rgba(47, 119, 55, 0.233)",
        ]}
        style={{ ...styles.overlay }}
      ></LinearGradient>

      <View style={{ ...styles.egov_center, width: windowWidth }}>
        <View style={styles.container}>
          <Image
            source={require("./assets/images/logo.png")}
            resizeMode="contain"
          />
        </View>
        <View style={styles.check}>
          <Text style={styles.egov_text}>Malaybalay</Text>
          <Text style={styles.egov_text_yellow}>eGO</Text>
          <Image
            source={require("./assets/images/check.png")}
            resizeMode="contain"
            style={{ width: 50, height: 60, marginTop: -22, marginLeft: -5 }}
          />
        </View>
        <Text style={styles.smart_city}>SMART CITY</Text>

        <View
          style={{
            backgroundColor: "#ffffff",
            width: 340,
            paddingHorizontal: 20,
            borderRadius: 10,
            padding: 10,
            marginTop: 20,
            paddingBottom: 35,
            paddingTop: 20,
          }}
        >
          <Text style={styles.textLarge_color}>Sign In</Text>

          <View style={{ marginTop: 8, paddingHorizontal: 10 }}>
            <TextInput
              style={styles.input}
              placeholder="Email Address"
              keyboardType=""
            />
            <TextInput
              style={styles.input}
              placeholder="Passwordsd"
              keyboardType="password"
            />
            <Pressable
              style={styles.btnGreen}
              onPress={() => Alert.alert("Simple Button pressed")}
            >
              <Text
                style={{ color: "#ffffff", fontWeight: "700", fontSize: 16 }}
              >
                Sign In
              </Text>
            </Pressable>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Text style={styles.fontColor}>Forget Password </Text>
              <Text
                style={{
                  backgroundColor: "#3D9332",
                  color: "#ffffff",
                  height: 18,
                  width: 18,
                  borderRadius: 100,
                  textAlign: "center",
                }}
              >
                ?
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                borderBottomWidth: 1,
                borderColor: "rgba(0, 0, 0, 0.10)",
                marginVertical: 5,
              }}
            ></View>
            <View>
              <Text style={styles.fontColor}>No Account Yet? New User?</Text>
            </View>
            <View style={{ marginTop: 8 }}>
              <Pressable style={styles.btnPlane}>
                <Text style={styles.fontBtnSignIn}>Sign Up</Text>
              </Pressable>
              <Pressable style={styles.btnPlane}>
                <Text style={styles.fontBtnSignIn}>Verify City Document</Text>
              </Pressable>
              <Pressable style={styles.btnPlane}>
                <Text style={styles.fontBtnSignIn}>View Status Violation</Text>
              </Pressable>
            </View>
          </View>
        </View>
        <Text
          style={{
            color: "#ffffff",
            textAlign: "center",
            marginTop: 15,
            fontSize: 10,
          }}
        >
          © 2022 PISOPAY.COM ONLINE SERVICES. ALL RIGHTS RESERVED
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btnGreen: {
    backgroundColor: "#3D9332",
    alignItems: "center",
    padding: 10,
    borderRadius: 7,
    marginTop: 2,
  },
  btnPlane: {
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#475E76",
    borderRadius: 9,
    paddingVertical: 10,
    marginVertical: 3,
  },
  fontColor: {
    color: "#475E76",
    fontWeight: "700",
    fontSize: 12,
  },
  fontBtnSignIn: {
    color: "#475E76",
    fontWeight: "700",
    fontSize: 16,
  },
  backGround_image: {
    alignItems: "center",
    justifyContent: "center",
  },
  check: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  egov_text: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: 700,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  egov_text_yellow: {
    color: "#FEF221",
    fontSize: 30,
    fontWeight: 900,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  smart_city: {
    color: "#FFFFFF",
    fontWeight: 600,
    fontSize: 23,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  egov_center: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(92, 255, 92, 0.226)",
  },
  top_back_image: {
    display: "flex",
    flexDirection: "column",
  },
  textLarge_color: {
    fontSize: 22,
    fontWeight: 400,
    color: "#3D9332",
  },
  input: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.10)",
    borderRadius: 7,
    height: 40,
    marginVertical: 3,
    padding: 10,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});
