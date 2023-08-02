import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  useWindowDimensions,
  TextInput,
  ScrollView,
  StatusBar
} from "react-native";
import { CustomBtnColor, CustomBtnPlane } from "../components/customBtn.js";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo } from "@expo/vector-icons";
export default function Login({ navigation, route }) {
  const { width: windowWidth } = useWindowDimensions();
  const [sercure, setSecure] = useState(false);
  return (
    <>
      <ImageBackground
        source={require("../assets/images/desktop_bg.png")}
        style={{
          ...StyleSheet.absoluteFillObject,
        }}
      ></ImageBackground>
      <LinearGradient
        colors={[
          "#63cf6e",
          "transparent",
          "transparent",
          "transparent",
          "transparent",
          "transparent",
          "rgba(47, 119, 55, 0.233)",
        ]}
        style={{ ...styles.overlay }}
      ></LinearGradient>

      <ScrollView style={styles.top_back_image}>
      <StatusBar />
        <View style={{ ...styles.egov_center, width: windowWidth }}>
          <Image
            source={require("../assets/images/logo.png")}
            style={{ width: 140, height: 140, resizeMode: "stretch" }}
          />
          <View style={styles.check}>
            <Text style={styles.egov_text}>Malaybalay</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.egov_text_yellow}>eGO</Text>
              <Image
                source={require("../assets/images/check.png")}
                resizeMode="contain"
                style={{ width: 50, height: 43, marginTop: -8, marginLeft: -8 }}
              />
            </View>
          </View>
          <Text style={styles.smart_city}>SMART CITY</Text>
          <View
            style={{
              width: "100%",
              height: 490,
              overflow: "hidden",
              zIndex: 100,
            }}
          >
            {/* start sign in */}
            <View style={{ width: "100%", padding: 20 }}>
              <View
                style={{
                  padding: 20,
                  backgroundColor: "#ffffff",
                  paddingVertical: 30,
                  borderRadius: 9,
                }}
              >
                <Text style={styles.textLarge_color}>Sign In</Text>
                <View style={{ marginTop: 8, paddingHorizontal: 10 }}>
                  <TextInput
                    style={styles.input}
                    placeholder="Email Address"
                    keyboardType=""
                  />
                  <View style={{ position: "relative" }}>
                    <TextInput
                      secureTextEntry={!sercure}
                      style={styles.input}
                      placeholder="Password"
                    />
                    <Entypo
                      onPress={() => setSecure(!sercure)}
                      name={!sercure ? "eye-with-line" : "eye"}
                      size={20}
                      color="black"
                      style={styles.iconPass}
                    />
                  </View>

                  <CustomBtnColor title="Sign In" />

                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: 10,
                    }}
                  >
                    <Text style={styles.fontColor}>Forget Password </Text>
                    <Text style={styles.forgetPass}>?</Text>
                  </View>
                  <View style={styles.borderLine}></View>
                  <View>
                    <Text style={styles.fontColor}>
                      No Account Yet? New User?
                    </Text>
                  </View>
                  <View style={{ marginTop: 8 }}>
                    <CustomBtnPlane
                      HandlePress={() =>
                        navigation.navigate("Sign-Up", { name: "Alexiess" })
                      }
                      label={"Sign Up"}
                    />
                    <CustomBtnPlane label={"Verify City Document"} />
                    <CustomBtnPlane label={"View Status Violation"} />
                  </View>
                </View>
              </View>
            </View>
            {/* end sign in */}
          </View>
        </View>


        <Text style={styles.footerText}>
          © 2022 PISOPAY.COM ONLINE SERVICES. ALL RIGHTS RESERVED
        </Text>

        
      </ScrollView>
      
    </>
  );
}

const styles = StyleSheet.create({
  iconPass: {
    position: "absolute",
    right: 13,
    top: 13,
    color: "#A8BFE6",
  },
  forgetPass: {
    backgroundColor: "#3D9332",
    color: "#ffffff",
    height: 18,
    width: 18,
    borderRadius: 100,
    textAlign: "center",
  },
  borderLine: {
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.10)",
    marginVertical: 5,
  },
  footerText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 10,
    fontWeight: 500,
    position: "absolute",
    bottom: -2,
    left: 0,
    right: 0,
  },
  fontColor: {
    color: "#475E76",
    fontWeight: "700",
    fontSize: 12,
  },
  check: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
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
    paddingTop: 30
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(92, 255, 92, 0.226)",
  },
  top_back_image: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    backgroundColor: "red"
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
  },
});
