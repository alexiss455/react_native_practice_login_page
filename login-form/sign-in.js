import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Pressable,
  Platform,
  Image,
  StatusBar,
} from "react-native";

import { Picker } from "@react-native-picker/picker";
import { useState, useEffect } from "react";
import { Entypo } from "@expo/vector-icons";
import { CustomBtnColor, CustomBtnPlane } from "../components/customBtn";
import DateTimePicker from "@react-native-community/datetimepicker";
import { LinearGradient } from "expo-linear-gradient";

export default function Signup({ navigation }) {
  const [sercure, setSecure] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());

  const [userData, setUserData] = useState({
    suffixName: "",
    civilStatus: "",
    gender: "",
    pass: "",
    confirmPass: "",
    fistName: "",
    lastName: "",
    middle: "",
    emailAddress: "",
    mobileNum: "",
    dateOfBirth: "",
    region: "",
    province: "",
    city: "",
    barangay: "",
  });

  const [region, setRegion] = useState([]);
  const [prov, setProv] = useState([]);
  const [city, setCity] = useState([]);
  const [barangay, setBarangay] = useState([]);
  const [id, setId] = useState({
    idProv: "",
    idCity: "",
    idBarangay: "",
  });
  useEffect(() => {
    const getRegion = async () => {
      try {
        const response = await fetch(
          "https://address-provider.pisopay.com.ph/api/v1/regionList"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const region = await response.json();
        setRegion(region.data);
      } catch (error) {
        console.error("Error fetching region data:", error);
      }
    };
    getRegion();
  }, []);
  useEffect(() => {
    const getProvince = async () => {
      try {
        const response = await fetch(
          `https://address-provider.pisopay.com.ph/api/v1/provinceList/${id.idProv}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const province = await response.json();
        setProv(province.data);
      } catch (error) {
        console.error("Error fetching province data:", error);
      }
    };
    getProvince();
  }, [id.idProv]);
  useEffect(() => {
    const getCity = async () => {
      try {
        const response = await fetch(
          `https://address-provider.pisopay.com.ph/api/v1/cityList/${id.idCity}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const city = await response.json();
        setCity(city.data);
      } catch (error) {
        console.error("Error fetching City data:", error);
      }
    };
    getCity();
  }, [id.idCity]);

  useEffect(() => {
    const getBarangay = async () => {
      try {
        const response = await fetch(
          `https://address-provider.pisopay.com.ph/api/v1/barangayList/${id.idBarangay}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const barangay = await response.json();
        setBarangay(barangay.data);
      } catch (error) {
        console.error("Error fetching barangay data:", error);
      }
    };
    getBarangay();
  }, [id.idBarangay]);

  function handleRegion(item) {
    const inputValue = item;
    const region2 = region.find((obj) => obj.description === inputValue);
    setId((preValue) => ({ ...preValue, idProv: region2.code }));
    setUserData((preValue) => ({ ...preValue, region: region2.description }));
  }
  function handleProv(item) {
    const inputValue = item;
    const province = prov.find((obj) => obj.description === inputValue);
    setId((prevValue) => ({ ...prevValue, idCity: province.code }));
    setUserData((preValue) => ({
      ...preValue,
      province: province.description,
    }));
  }
  function handleCity(item) {
    const inputValue = item;
    const city1 = city.find((obj) => obj.description === inputValue);
    setId((prevValue) => ({ ...prevValue, idBarangay: city1.code }));
    setUserData((preValue) => ({
      ...preValue,
      city: city1.description,
    }));
  }
  function handleBarangay(item) {
    const inputValue = item;
    setUserData((preValue) => ({
      ...preValue,
      barangay: inputValue,
    }));
  }
  const objectSuffix = [
    { label: "None", value: "" },
    { label: "Jr", value: "Jr" },
    { label: "Sr", value: "Sr" },
    { label: "I", value: "I" },
    { label: "II", value: "II" },
    { label: "III", value: "III" },
    { label: "IV", value: "IV" },
  ];
  const objCivilStatus = [
    { label: "Single", value: "Single" },
    { label: "Married", value: "Married" },
    { label: "Divorced", value: "Divorced" },
    { label: "Widowed", value: "Widowed" },
    { label: "Annuled", value: "Annuled" },
  ];
  const onChange = (event, selectedDate) => {
    if (event.type === "set") {
      const currentdate = selectedDate || date;
      setDate(currentdate);
      if (Platform.OS === "android") {
        const formattedDate = currentdate.toLocaleDateString("en-US", {
          month: "2-digit",
          day: "2-digit",
          year: "numeric",
        });
        setUserData((preValue) => ({
          ...preValue,
          dateOfBirth: formattedDate,
        }));
      }
    }
    setShowDatePicker(false);
  };
  const showDatePickerAndroid = () => {
    setShowDatePicker(true);
  };
  function submit() {
    console.log(userData);
  }

  return (
    <>
      <StatusBar />
      <Image
        source={require("../assets/images/desktop_bg.png")}
        style={{
          ...StyleSheet.absoluteFillObject,
        }}
      />
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

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ alignItems: "center", marginTop: 15 }}>
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
        </View>

        <View style={{ width: "100%", padding: 20 }}>
          <View
            style={{
              padding: 15,
              backgroundColor: "#ffffff",
              paddingVertical: 30,
              borderRadius: 9,
            }}
          >
            <Text style={styles.textLarge_color}>Sign Up</Text>
            <View style={{ marginTop: 13 }}>
              <Text style={styles.fontSignup}>Create Account Password</Text>
              <View style={{ position: "relative" }}>
                <TextInput
                  secureTextEntry={!sercure}
                  style={styles.input}
                  placeholder="Password"
                  onChangeText={(pass) =>
                    setUserData((preValue) => ({ ...preValue, pass: pass }))
                  }
                  defaultValue={userData.pass}
                />
                <Entypo
                  onPress={() => setSecure(!sercure)}
                  name={!sercure ? "eye-with-line" : "eye"}
                  size={20}
                  color="black"
                  style={styles.iconPass}
                />
              </View>
              <View style={{ position: "relative" }}>
                <TextInput
                  secureTextEntry={!sercure}
                  style={styles.input}
                  placeholder="Re-type Password"
                  defaultValue={userData.confirmPass}
                  onChangeText={(confirm) =>
                    setUserData((preValue) => ({
                      ...preValue,
                      confirmPass: confirm,
                    }))
                  }
                />
                <Entypo
                  onPress={() => setSecure(!sercure)}
                  name={!sercure ? "eye-with-line" : "eye"}
                  size={20}
                  color="black"
                  style={styles.iconPass}
                />
              </View>
            </View>
            <Text
              style={{
                textAlign: "center",
                backgroundColor: "#fefbc8",
                padding: 14,
                marginVertical: 5,
                borderRadius: 9,
                fontSize: 12,
                color: "#475E76",
                fontWeight: 500,
              }}
            >
              Password must be minimum of 8 Characters & musst contain at least
              1 Special Character, 1 Number & 1 Upper & Lower Case Letter.
            </Text>

            <View style={{ marginTop: 6 }}>
              <Text style={styles.fontSignup}>Full Name</Text>
              <TextInput
                style={styles.input}
                onChangeText={(firstname) =>
                  setUserData((preValue) => ({
                    ...preValue,
                    fistName: firstname,
                  }))
                }
                defaultValue={userData.fistName}
                placeholder="First Name"
              />
              <TextInput
                style={styles.input}
                onChangeText={(lastname) =>
                  setUserData((preValue) => ({
                    ...preValue,
                    lastName: lastname,
                  }))
                }
                defaultValue={userData.lastName}
                placeholder="Last Name"
              />
              <TextInput
                style={styles.input}
                onChangeText={(middle) =>
                  setUserData((preValue) => ({ ...preValue, middle: middle }))
                }
                defaultValue={userData.middle}
                placeholder="Middle Name"
              />

              <View
                style={{
                  ...styles.picker,
                }}
              >
                <Picker
                  style={{
                    ...styles.input,
                  }}
                  selectedValue={userData.suffixName}
                  onValueChange={(itemValue, itemIndex) =>
                    setUserData((prevState) => ({
                      ...prevState,
                      suffixName: itemValue,
                    }))
                  }
                >
                  {objectSuffix.map((item, index) => (
                    <Picker.Item
                      key={index}
                      label={item.label}
                      value={item.value}
                    />
                  ))}
                </Picker>
              </View>

              <View>
                <Text style={styles.fontSignup}>Email Address</Text>
                <TextInput
                  style={styles.input}
                  defaultValue={userData.emailAddress}
                  onChangeText={(email) =>
                    setUserData((preValue) => ({
                      ...preValue,
                      emailAddress: email,
                    }))
                  }
                  placeholder="me@gmail.com"
                />
                <Text
                  style={{
                    textAlign: "center",
                    backgroundColor: "#f0f5fb",
                    padding: 14,
                    marginVertical: 5,
                    borderRadius: 9,
                    fontSize: 12,
                    color: "#475E76",
                    fontWeight: 500,
                  }}
                >
                  Email Address will be Verified
                </Text>
              </View>

              <View>
                <Text style={styles.fontSignup}>Number ng Moblie</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={(number) =>
                    setUserData((preValue) => ({
                      ...preValue,
                      mobileNum: number,
                    }))
                  }
                  placeholder="091234567891"
                />
                <Text
                  style={{
                    textAlign: "center",
                    backgroundColor: "#f0f5fb",
                    padding: 14,
                    marginVertical: 5,
                    borderRadius: 9,
                    fontSize: 12,
                    color: "#475E76",
                    fontWeight: 500,
                  }}
                >
                  Moblie Number will be Verified
                </Text>
              </View>

              <View>
                <Text style={styles.fontSignup}>Birthday</Text>
                <Pressable onPress={showDatePickerAndroid}>
                  <TextInput
                    style={{ ...styles.input }}
                    value={userData.dateOfBirth}
                    placeholder="01/01/2023"
                    editable={false}
                    onChangeText={(dateOfBirth) =>
                      setUserData((preValue) => ({
                        ...preValue,
                        dateOfBirth: dateOfBirth,
                      }))
                    }
                  />
                </Pressable>

                {showDatePicker && (
                  <DateTimePicker
                    mode="date"
                    display="spinner"
                    value={date}
                    onChange={onChange}
                  />
                )}
              </View>

              <View>
                <Text style={styles.fontSignup}>Gender</Text>

                <View style={styles.picker}>
                  <Picker
                    style={styles.input}
                    selectedValue={userData.gender}
                    onValueChange={(item, index) =>
                      setUserData((preValue) => ({ ...preValue, gender: item }))
                    }
                  >
                    <Picker.Item label={"Male"} value={"male"} />
                    <Picker.Item label={"Female"} value={"female"} />
                  </Picker>
                </View>
              </View>

              <View>
                <Text style={styles.fontSignup}>Civil Status</Text>
                <View style={styles.picker}>
                  <Picker
                    style={styles.input}
                    selectedValue={userData.civilStatus}
                    onValueChange={(civilStatus, index) =>
                      setUserData((preValue) => ({
                        ...preValue,
                        civilStatus: civilStatus,
                      }))
                    }
                  >
                    {objCivilStatus.map((item, index) => (
                      <Picker.Item
                        key={index}
                        label={item.label}
                        value={item.value}
                      />
                    ))}
                  </Picker>
                </View>
              </View>

              {/*Start address */}

              <View>
                <Text style={styles.fontSignup}>Address</Text>
                <View style={styles.picker}>
                  <Picker
                    style={styles.input}
                    selectedValue={userData.region}
                    onValueChange={(item) => handleRegion(item)}
                  >
                    <Picker.Item label={"Select Region"} />
                    {region.map((item, index) => (
                      <Picker.Item
                        key={index}
                        label={item.description}
                        value={item.description}
                      />
                    ))}
                  </Picker>
                </View>

                <View style={styles.picker}>
                  <Picker
                    style={styles.input}
                    selectedValue={userData.province}
                    onValueChange={(item) => handleProv(item)}
                  >
                    <Picker.Item label={"Select Province"} />
                    {prov.map((item, index) => (
                      <Picker.Item
                        key={index}
                        label={item.description}
                        value={item.description}
                      />
                    ))}
                  </Picker>
                </View>

                <View style={styles.picker}>
                  <Picker
                    style={styles.input}
                    selectedValue={userData.city}
                    onValueChange={(item) => handleCity(item)}
                  >
                    <Picker.Item label={"Select City"} />
                    {city.map((item, index) => (
                      <Picker.Item
                        key={index}
                        label={item.description}
                        value={item.description}
                      />
                    ))}
                  </Picker>
                </View>

                <View style={styles.picker}>
                  <Picker
                    style={styles.input}
                    selectedValue={userData.barangay}
                    onValueChange={(item) => handleBarangay(item)}
                  >
                    <Picker.Item label={"Select Barangay"} />
                    {barangay.map((item, index) => (
                      <Picker.Item
                        key={index}
                        label={item.description}
                        value={item.description}
                      />
                    ))}
                  </Picker>
                </View>
              </View>

              {/*End Address */}

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 30,
                  paddingHorizontal: 10,
                  marginBottom: -12,
                }}
              >
                <CustomBtnPlane
                  label={"Cancel"}
                  HandlePress={() => navigation.navigate("Home")}
                />
                <CustomBtnColor title={"Continue"} HandlePress={submit} />
              </View>
              {/*  */}

              {/*  */}
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  fontSignup: {
    color: "#475E76",
    fontWeight: "600",
    fontSize: 14,
    marginBottom: 3,
  },
  iconPass: {
    position: "absolute",
    right: 13,
    top: 13,
    color: "#A8BFE6",
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
    color: "#9198a0",
  },

  picker: {
    borderWidth: 1,
    borderRadius: 7,
    justifyContent: "center",
    borderColor: "rgba(0, 0, 0, 0.10)",
    height: 40,
    marginVertical: 3,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(92, 255, 92, 0.226)",
  },
});
