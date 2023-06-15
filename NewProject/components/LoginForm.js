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

// const LoginForm = ({ navigation }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [submittedData, setSubmittedData] = useState([]);
//   const handleLogin = () => {
//     const newData = {
//       username,
//       password,
//     };

//     setSubmittedData([...submittedData, newData]);
//     setUsername("");
//     setPassword("");
//     navigation.navigate("SubmittedData", {
//       submittedData: [...submittedData, newData]
//     });
//   };
//   const handleRegister=()=>{
//     navigation.navigate('Register');
//   }
//   const windowWidth = Dimensions.get("window").width;
//   const windowHeight = Dimensions.get("window").height;

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: "center",
//     },
//     scrollContainer: {
//       flexGrow: 1,
//       justifyContent: "center",
//       paddingHorizontal: windowWidth * 0.1,
//     },
//     label: {
//       fontSize: windowWidth * 0.04,
//       fontWeight: "bold",
//       marginBottom: windowWidth * 0.015,
//     },
//     input: {
//       borderWidth: 1,
//       borderColor: "#ccc",
//       borderRadius: 4,
//       padding: windowWidth * 0.02,
//       marginBottom: windowWidth * 0.025,
//     },
//     logoContainer: {
//       alignItems: "center",
//       marginBottom: windowWidth * 0.05,
//     },
//     logo: {
//       width: windowWidth * 0.6,
//       height: windowHeight * 0.3,
//       resizeMode: 'contain',
//     },
//     checkboxRow: {
//       flexDirection: "row",
//       alignItems: "center",
//       marginBottom: windowWidth * 0.025,
//     },
//     rememberMeText: {
//       marginRight: windowWidth * 0.02,
//     },
//     forgotPasswordLink: {
//       color: "#008080",
//       textDecorationLine: "none",
//     },
//     registerContainer: {
//       flexDirection: "row",
//       marginTop: windowWidth * 0.02,
//       marginBottom:30
//     },
//     registerText: {
//       fontSize: windowWidth * 0.04,
//       marginTop:15
//     },
//     registerLink: {
//       color: "#008080",
//       textDecorationLine: "none",
//       marginLeft: windowWidth * 0.01,
//       marginTop:15,
//     },
//   });

//   return (
//     <ScrollView contentContainerStyle={styles.scrollContainer}>
//       <View style={styles.container}>
//         <View style={styles.logoContainer}>
//           <Image
//             style={styles.logo}
//             source={require("../assets/Docisn_logo.png")}
//             resizeMode="contain"
//           />
//         </View>
//         <Text style={styles.label}>Welcome to Docisn Provider App</Text>
//         <View style={styles.logoContainer}>
//           <Image
//             style={styles.logo}
//             source={require("../assets/provider_isometric.png")}
//             resizeMode="contain"
//           />
//         </View>
//         <Text style={styles.label}>Login to continue</Text>
//         <Text></Text>
//         <Text style={styles.label}>Username:</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter your username"
//           value={username}
//           onChangeText={setUsername}
//         />

//         <Text style={styles.label}>Password:</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter your password"
//           secureTextEntry
//           value={password}
//           onChangeText={setPassword}
//         />
//         <View style={styles.checkboxRow}>
//           <Text style={styles.rememberMeText}>Remember me</Text>
//           <Text style={styles.forgotPasswordLink}>Forgot password?</Text>
//         </View>
//         <Button title="Login" onPress={handleLogin} color="#008080" />
//         <View style={styles.registerContainer}>
//           <Text style={styles.registerText}>Don't have an account.</Text>
//           <Text style={styles.registerLink} onPress={handleRegister}>Register here</Text>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

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
import {
  validateUserName,
  validatePassword,
} from "./Validation"; // Import the necessary validation functions from validation.js

const LoginForm = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState(""); // State to hold the username error message
  const [passwordError, setPasswordError] = useState(""); // State to hold the password error message
  const [submittedData, setSubmittedData] = useState([]);

  const handleLogin = () => {
    // Validate the username and password
    const usernameError = validateUserName(username);
    const passwordError = validatePassword(password);

    // Set the error messages in the state
    setUsernameError(usernameError);
    setPasswordError(passwordError);

    if (!usernameError && !passwordError) {
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
    }
  };

  const handleRegister = () => {
    navigation.navigate('Register');
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
    error: {
      color: "red",
      fontSize: windowWidth * 0.035,
      marginBottom: windowWidth * 0.015,
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
      marginBottom: 30,
    },
    registerText: {
      fontSize: windowWidth * 0.04,
      marginTop: 15,
    },
    registerLink: {
      color: "#008080",
      textDecorationLine: "none",
      marginLeft: windowWidth * 0.01,
      marginTop: 15,
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

        <Text style={styles.label}>Username:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          value={username}
          onChangeText={setUsername}
        />
        {usernameError !== "" && <Text style={styles.error}>{usernameError}</Text>}

        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        {passwordError !== "" && <Text style={styles.error}>{passwordError}</Text>} 

        <View style={styles.checkboxRow}>
          <Text style={styles.rememberMeText}>Remember me</Text>
          <Text style={styles.forgotPasswordLink}>Forgot password?</Text>
        </View>
        <Button title="Login" onPress={handleLogin} color="#008080" />
        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Don't have an account.</Text>
          <Text style={styles.registerLink} onPress={handleRegister}>Register here</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginForm;

