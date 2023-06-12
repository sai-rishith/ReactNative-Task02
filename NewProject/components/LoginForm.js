// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   Dimensions,
//   StyleSheet,
//   Image,
//   ScrollView
// } from "react-native";

// import { useNavigation } from "@react-navigation/native";

// const LoginForm = ({ navigation }) => {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [submittedData, setSubmittedData] = useState([]);
//     const handleLogin = () => {
//         const newData = {
//           username,
//           password,
//         };
//         setSubmittedData([...submittedData, newData]);
//         setUsername("");
//         setPassword("");
//         navigation.navigate("SubmittedData", { submittedData: [...submittedData, newData] });
//       };

//   return (
//      <ScrollView contentContainerStyle={styles.scrollContainer}>
//     <View style={styles.container}>
//       <View style={styles.logoContainer}>
//         <Image
//           style={styles.logo}
//           source={require("../assets/Docisn_logo.png")}
//           resizeMode="contain"
//         />
//       </View>
//       <Text style={styles.label}>Welcome to Docisn Provider App</Text>
//       <View style={styles.logoContainer}>
//         <Image
//           style={styles.logo}
//           source={require("../assets/provider_isometric.png")}
//           resizeMode="contain"
//         />
//       </View>
//       <Text style={styles.label}>Login to continue</Text>
//       <Text></Text>
//       <Text style={styles.label}>Username:</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter your username"
//         value={username}
//         onChangeText={setUsername}
//       />

//       <Text style={styles.label}>Password:</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter your password"
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
//       />
//  <View style={styles.checkboxRow}>
//         <Text style={styles.rememberMeText}>Remember me</Text>
//         <Text style={styles.forgotPasswordLink}>Forgot password?</Text>
//       </View>
//       <Button title="Login" onPress={handleLogin} color="#008080" />
//       <View style={styles.registerContainer}>
//         <Text style={styles.registerText}>Don't have an account.</Text>
//         <Text style={styles.registerLink}>Register here</Text>
//       </View>
//     </View>
//      </ScrollView>
//   );
// };

// const windowWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//   },
//   scrollContainer: {
//     flexGrow: 1,
//     justifyContent: "center",
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: "bold",
//     marginBottom: 5,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 4,
//     padding: 10,
//     marginBottom: 10,
   
//   },
//   logoContainer: {
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   logo: {
//     width: windowWidth * 0.6,
//     height: windowHeight * 0.3,
//     resizeMode:'contain'
//   },
//   checkboxRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 10,
//   },
//   rememberMeText: {
//     marginRight: 10,
//   },
//   forgotPasswordLink: {
//     color:"#008080",
//     textDecorationLine: "none",
//   },
//   registerContainer: {
//     flexDirection: "row",
//     marginTop: 10,
//   },
//   registerText: {
//     fontSize: 16,
//   },
//   registerLink: {
//     color:"#008080",
//     textDecorationLine: "none",
//     marginLeft: 5,
//   },
// });

// export default LoginForm;


import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Dimensions,
  StyleSheet,
  Image,
  ScrollView
} from "react-native";

import { useNavigation } from "@react-navigation/native";

const LoginForm = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submittedData, setSubmittedData] = useState([]);
  const handleLogin = () => {
    const newData = {
      username,
      password,
    };
    setSubmittedData([...submittedData, newData]);
    setUsername("");
    setPassword("");
    navigation.navigate("SubmittedData", {
      submittedData: [...submittedData, newData]
    });
  };

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
    },
    scrollContainer: {
      flexGrow: 1,
      justifyContent: "center",
      paddingHorizontal: windowWidth * 0.1,
    },
    label: {
      fontSize: windowWidth * 0.04,
      fontWeight: "bold",
      marginBottom: windowWidth * 0.015,
    },
    input: {
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 4,
      padding: windowWidth * 0.02,
      marginBottom: windowWidth * 0.025,
    },
    logoContainer: {
      alignItems: "center",
      marginBottom: windowWidth * 0.05,
    },
    logo: {
      width: windowWidth * 0.6,
      height: windowHeight * 0.3,
      resizeMode: 'contain',
    },
    checkboxRow: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: windowWidth * 0.025,
    },
    rememberMeText: {
      marginRight: windowWidth * 0.02,
    },
    forgotPasswordLink: {
      color: "#008080",
      textDecorationLine: "none",
    },
    registerContainer: {
      flexDirection: "row",
      marginTop: windowWidth * 0.02,
    },
    registerText: {
      fontSize: windowWidth * 0.04,
    },
    registerLink: {
      color: "#008080",
      textDecorationLine: "none",
      marginLeft: windowWidth * 0.01,
    },
  });

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/Docisn_logo.png")}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.label}>Welcome to Docisn Provider App</Text>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/provider_isometric.png")}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.label}>Login to continue</Text>
        <Text></Text>
        <Text style={styles.label}>Username:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          value={username}
          onChangeText={setUsername}
        />

        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <View style={styles.checkboxRow}>
          <Text style={styles.rememberMeText}>Remember me</Text>
          <Text style={styles.forgotPasswordLink}>Forgot password?</Text>
        </View>
        <Button title="Login" onPress={handleLogin} color="#008080" />
        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Don't have an account.</Text>
          <Text style={styles.registerLink}>Register here</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginForm;
