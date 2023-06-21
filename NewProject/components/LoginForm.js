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
// import {
//   validateUserName,
//   validatePassword,
// } from "./Validation";

// const LoginForm = ({ navigation }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [usernameError, setUsernameError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [submittedData, setSubmittedData] = useState([]);

//   const handleLogin = () => {
//     // Validate the username and password
//     const usernameError = validateUserName(username);
//     const passwordError = validatePassword(password);

//     // Set the error messages in the state
//     setUsernameError(usernameError);
//     setPasswordError(passwordError);

//     if (!usernameError && !passwordError) {
//       const newData = {
//         username,
//         password,
//       };

//       setSubmittedData([...submittedData, newData]);
//       setUsername("");
//       setPassword("");
//       navigation.navigate("SubmittedData", {
//         submittedData: [...submittedData, newData]
//       });
//     }
//   };

//   const handleRegister = () => {
//     navigation.navigate('Register');
//   };

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
//     error: {
//       color: "red",
//       fontSize: windowWidth * 0.035,
//       marginBottom: windowWidth * 0.015,
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
//       marginBottom: 30,
//     },
//     registerText: {
//       fontSize: windowWidth * 0.04,
//       marginTop: 15,
//     },
//     registerLink: {
//       color: "#008080",
//       textDecorationLine: "none",
//       marginLeft: windowWidth * 0.01,
//       marginTop: 15,
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

//         <Text style={styles.label}>Username:</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter your username"
//           value={username}
//           onChangeText={setUsername}
//         />
//         {usernameError !== "" && <Text style={styles.error}>{usernameError}</Text>}

//         <Text style={styles.label}>Password:</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter your password"
//           secureTextEntry
//           value={password}
//           onChangeText={setPassword}
//         />
//         {passwordError !== "" && <Text style={styles.error}>{passwordError}</Text>}

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

//below code --> hide and show password feature and scroll view

// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   Dimensions,
//   StyleSheet,
//   Image,
//   ScrollView,
//   TouchableOpacity,
//   Button,
// } from "react-native";
// import { validateUserName, validatePassword } from "./Validation";

// const LoginForm = ({ navigation }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [usernameError, setUsernameError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [submittedData, setSubmittedData] = useState([]);
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   const handleLogin = () => {
//     // Validate the username and password
//     const usernameError = validateUserName(username);
//     const passwordError = validatePassword(password);

//     // Set the error messages in the state
//     setUsernameError(usernameError);
//     setPasswordError(passwordError);

//     if (!usernameError && !passwordError) {
//       const newData = {
//         username,
//         password,
//       };

//       setSubmittedData([...submittedData, newData]);
//       setUsername("");
//       setPassword("");
//       navigation.navigate("SubmittedData", {
//         submittedData: [...submittedData, newData],
//       });
//     }
//   };

//   const handleRegister = () => {
//     navigation.navigate("Register");
//   };

//   const handleTogglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

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
//     inputContainer: {
//       flexDirection: "row",
//       alignItems: "center",
//       borderWidth: 1,
//       borderColor: "#ccc",
//       borderRadius: 4,
//       marginBottom: windowWidth * 0.025,
//       paddingHorizontal: windowWidth * 0.02,
//     },
//     input: {
//       flex: 1,
//       height: 40,
//     },
//     eyeIcon: {
//       padding: 8,
//     },
//     error: {
//       color: "red",
//       fontSize: windowWidth * 0.035,
//       marginBottom: windowWidth * 0.015,
//     },
//     logoContainer: {
//       alignItems: "center",
//       marginBottom: windowWidth * 0.05,
//     },
//     logo: {
//       width: windowWidth * 0.6,
//       height: windowHeight * 0.3,
//       resizeMode: "contain",
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
//       marginBottom: 30,
//     },
//     registerText: {
//       fontSize: windowWidth * 0.04,
//       marginTop: 15,
//     },
//     registerLink: {
//       color: "#008080",
//       textDecorationLine: "none",
//       marginLeft: windowWidth * 0.01,
//       marginTop: 15,
//     },
//     usernameInput: {
//       borderWidth: 1,
//       borderColor: "#ccc",
//       borderRadius: 4,
//       padding: windowWidth * 0.02,
//       marginBottom: windowWidth * 0.025,
//     },
//     passwordInput: {
//       flex: 1,
//       borderWidth: 1,
//       borderColor: "#ccc",
//       borderRadius: 4,
//       padding: windowWidth * 0.02,
//       marginBottom: windowWidth * 0.025,
//     },
//     inputContainer: {
//       flexDirection: "row",
//       alignItems: "center",
//       borderWidth: 1,
//       borderColor: "#ccc",
//       borderRadius: 4,
//       marginBottom: windowWidth * 0.025,
//     },
//     eyeIcon: {
//       padding: windowWidth * 0.02,
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

//         <Text style={styles.label}>Username:</Text>
//         <TextInput
//           style={styles.usernameInput}
//           placeholder="Enter your username"
//           value={username}
//           onChangeText={setUsername}
//         />
//         {usernameError !== "" && (
//           <Text style={styles.error}>{usernameError}</Text>
//         )}

//         <Text style={styles.label}>Password:</Text>
//         <View style={styles.inputContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter your password"
//             secureTextEntry={!passwordVisible}
//             value={password}
//             onChangeText={setPassword}
//           />
//           <TouchableOpacity
//             onPress={handleTogglePasswordVisibility}
//             style={styles.eyeIcon}
//           >
//             <Text>{passwordVisible ? "Hide" : "Show"}</Text>
//           </TouchableOpacity>
//         </View>
//         {passwordError !== "" && (
//           <Text style={styles.error}>{passwordError}</Text>
//         )}
//         <View style={styles.checkboxRow}>
//           <Text style={styles.rememberMeText}>Remember me</Text>
//           <Text style={styles.forgotPasswordLink}>Forgot password?</Text>
//         </View>
//         <Button title="Login" onPress={handleLogin} color="#008080" />
//         <View style={styles.registerContainer}>
//           <Text style={styles.registerText}>Don't have an account.</Text>
//           <Text style={styles.registerLink} onPress={handleRegister}>
//             Register here
//           </Text>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// export default LoginForm;



// below code is without scroll view and includes hide/show password feature
// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   Dimensions,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
// } from "react-native";
// import { validateUserName, validatePassword } from "./Validation";

// const LoginForm = ({ navigation }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [usernameError, setUsernameError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [submittedData, setSubmittedData] = useState([]);
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);

//   const handleLogin = () => {
//     // Validate the username and password
//     const usernameError = validateUserName(username);
//     const passwordError = validatePassword(password);

//     // Set the error messages in the state
//     setUsernameError(usernameError);
//     setPasswordError(passwordError);

//     if (!usernameError && !passwordError) {
//       const newData = {
//         username,
//         password,
//       };

//       setSubmittedData([...submittedData, newData]);
//       setUsername("");
//       setPassword("");
//       navigation.navigate("SubmittedData", {
//         submittedData: [...submittedData, newData],
//       });
//     }
//   };

//   const handleRegister = () => {
//     navigation.navigate("Register");
//   };

//   const handleTogglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   const handleRememberMe = () => {
//     setRememberMe(!rememberMe);
//   };

//   const windowWidth = Dimensions.get("window").width;
//   const windowHeight = Dimensions.get("window").height;

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: "center",
//       paddingHorizontal: windowWidth * 0.1,
//       paddingTop: windowHeight * 0.05,
//       paddingBottom: windowHeight * 0.05,
//     },
//     logoContainer: {
//       alignItems: "center",
//       marginBottom: windowHeight * 0.05,
//     },
//     logo: {
//       width: windowWidth * 0.6,
//       height: windowHeight * 0.2,
//       resizeMode: "contain",
//     },
//     label: {
//       fontSize: windowWidth * 0.04,
//       fontWeight: "bold",
//       marginBottom: windowHeight * 0.02,
//     },
//     inputContainer: {
//       flexDirection: "row",
//       alignItems: "center",
//       borderWidth: 1,
//       borderColor: "#ccc",
//       borderRadius: 4,
//       marginBottom: windowHeight * 0.025,
//       paddingHorizontal: windowWidth * 0.02,
//       height: windowHeight * 0.06,
//     },
//     input: {
//       flex: 1,
//       height: "100%",
//     },
//     eyeIcon: {
//       padding: windowWidth * 0.02,
//     },
//     error: {
//       color: "red",
//       fontSize: windowWidth * 0.035,
//       marginBottom: windowHeight * 0.015,
//     },
//     checkboxRow: {
//       flexDirection: "row",
//       alignItems: "center",
//       marginTop: windowHeight * 0.02,
//       marginBottom: windowHeight * 0.03,
//     },
//     rememberMeCheckbox: {
//       width: windowWidth * 0.05,
//       height: windowWidth * 0.05,
//       marginRight: windowWidth * 0.02,
//       borderWidth: 1,
//       borderColor: "#ccc",
//       borderRadius: 4,
//       justifyContent: "center",
//       alignItems: "center",
//     },
//     rememberMeText: {
//       fontSize: windowWidth * 0.04,
//     },
//     forgotPasswordLink: {
//       color: "#008080",
//       textDecorationLine: "underline",
//       marginLeft: windowWidth * 0.02,
//     },
//     loginButton: {
//       backgroundColor: "#008080",
//       paddingVertical: windowHeight * 0.015,
//       borderRadius: 4,
//       marginTop: windowHeight * 0.03,
//     },
//     loginButtonText: {
//       color: "#fff",
//       fontSize: windowWidth * 0.04,
//       textAlign: "center",
//     },
//     registerContainer: {
//       flexDirection: "row",
//       marginTop: windowHeight * 0.02,
//       marginBottom: windowHeight * 0.03,
//     },
//     registerText: {
//       fontSize: windowWidth * 0.04,
//     },
//     registerLink: {
//       color: "#008080",
//       textDecorationLine: "underline",
//       marginLeft: windowWidth * 0.01,
//     },
//   });

//   return (
//     <View style={styles.container}>
//       <View style={styles.logoContainer}>
//         <Image
//           style={styles.logo}
//           source={require("../assets/Docisn_logo.png")}
//           resizeMode="contain"
//         />
//       </View>
//       <Text style={styles.label}>Welcome to Docisn Provider App</Text>
//       <Text style={styles.label}>Login to continue</Text>

//       <Text style={styles.label}>Username:</Text>
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter your username"
//           value={username}
//           onChangeText={setUsername}
//         />
//       </View>
//       {usernameError !== "" && <Text style={styles.error}>{usernameError}</Text>}

//       <Text style={styles.label}>Password:</Text>
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter your password"
//           secureTextEntry={!passwordVisible}
//           value={password}
//           onChangeText={setPassword}
//         />
//         <TouchableOpacity
//           onPress={handleTogglePasswordVisibility}
//           style={styles.eyeIcon}
//         >
//           <Text>{passwordVisible ? "Hide" : "Show"}</Text>
//         </TouchableOpacity>
//       </View>
//       {passwordError !== "" && <Text style={styles.error}>{passwordError}</Text>}

//       <View style={styles.checkboxRow}>
//         <TouchableOpacity
//           style={styles.rememberMeCheckbox}
//           onPress={handleRememberMe}
//         >
//           {rememberMe && <Text>✓</Text>}
//         </TouchableOpacity>
//         <Text style={styles.rememberMeText}>Remember me</Text>
//         <TouchableOpacity>
//           <Text style={styles.forgotPasswordLink}>Forgot password?</Text>
//         </TouchableOpacity>
//       </View>

//       <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
//         <Text style={styles.loginButtonText}>Login</Text>
//       </TouchableOpacity>

//       <View style={styles.registerContainer}>
//         <Text style={styles.registerText}>Don't have an account?</Text>
//         <TouchableOpacity onPress={handleRegister}>
//           <Text style={styles.registerLink}>Register here</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default LoginForm;



//below code supports AsyncStorage
import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  TextInput,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { validateUserName, validatePassword } from "./Validation";

const LoginForm = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [submittedData, setSubmittedData] = useState([]);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = useCallback(async () => {
    const usernameError = validateUserName(username);
    const passwordError = validatePassword(password);

    setUsernameError(usernameError);
    setPasswordError(passwordError);

    if (!usernameError && !passwordError) {
      const newData = {
        username,
        password,
      };

      try {
        const storedData = await AsyncStorage.getItem("submittedData");
        const existingData = storedData ? JSON.parse(storedData) : [];
        const updatedData = [...existingData, newData];
        await AsyncStorage.setItem("submittedData", JSON.stringify(updatedData));

        setSubmittedData(updatedData);
        setUsername("");
        setPassword("");
        navigation.navigate("SubmittedData", { submittedData: updatedData });
      } catch (error) {
        console.log("Error saving data:", error);
      }
    }
  }, [username, password, navigation]);

  const handleRegister = useCallback(() => {
    navigation.navigate("Register");
  }, [navigation]);

  
  const handleForgotPassword = useCallback(() => {
    navigation.navigate("ForgotPassword");
  }, [navigation]);

  
  

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: windowWidth * 0.1,
      paddingTop: windowHeight * 0.05,
      paddingBottom: windowHeight * 0.05,
    },
    logoContainer: {
      alignItems: "center",
      marginBottom: windowHeight * 0.05,
    },
    logo: {
      width: windowWidth * 0.6,
      height: windowHeight * 0.2,
      resizeMode: "contain",
    },
    label: {
      fontSize: windowWidth * 0.04,
      fontWeight: "bold",
      marginBottom: windowHeight * 0.02,
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 4,
      marginBottom: windowHeight * 0.025,
      paddingHorizontal: windowWidth * 0.02,
      height: windowHeight * 0.06,
    },
    input: {
      flex: 1,
      height: "100%",
      color: "brown",
      fontWeight:'bold'
    },
    eyeIcon: {
      padding: windowWidth * 0.02,
    },
    error: {
      color: "red",
      fontSize: windowWidth * 0.035,
      marginBottom: windowHeight * 0.015,
    },
    checkboxRow: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: windowHeight * 0.02,
      marginBottom: windowHeight * 0.03,
    },
    rememberMeCheckbox: {
      width: windowWidth * 0.05,
      height: windowWidth * 0.05,
      marginRight: windowWidth * 0.02,
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 4,
      justifyContent: "center",
      alignItems: "center",
    },
    rememberMeText: {
      fontSize: windowWidth * 0.04,
    },
    forgotPasswordLink: {
      color: "#008080",
      textDecorationLine: "none",
      fontWeight:'bold',
      marginLeft: windowWidth * 0.02,
    },
    loginButton: {
      backgroundColor: "#008080",
      paddingVertical: windowHeight * 0.015,
      borderRadius: 4,
      marginTop: windowHeight * 0.03,
    },
    loginButtonText: {
      color: "#fff",
      fontSize: windowWidth * 0.04,
      textAlign: "center",
    },
    registerContainer: {
      flexDirection: "row",
      marginTop: windowHeight * 0.02,
      marginBottom: windowHeight * 0.03,
    },
    registerText: {
      fontSize: windowWidth * 0.04,
    },
    registerLink: {
      color: "#008080",
      textDecorationLine: "none",
      fontWeight:'bold',
      marginLeft: windowWidth * 0.01,
    },
    label01: {
      textAlign: "center",
      fontSize: windowWidth * 0.05,
      fontWeight: "bold",
      marginBottom: windowHeight * 0.02,
    },
    label02: {
      fontSize: windowWidth * 0.05,
      fontWeight: "bold",
      marginBottom: windowHeight * 0.02,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/Docisn_logo.png")}
          resizeMode="contain"
        />
        <Text style={styles.label01}>Welcome to Docisn Provider App</Text>
      </View>

      <Text style={styles.label02}>Login to continue</Text>

      <Text style={styles.label}>Username:</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Here you have to enter your email id"
          placeholderTextColor="black"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      {usernameError !== "" && <Text style={styles.error}>{usernameError}</Text>}

      <Text style={styles.label}>Password:</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="black"
          secureTextEntry={!passwordVisible}
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TouchableOpacity
          onPress={() => setPasswordVisible(!passwordVisible)}
          style={styles.eyeIcon}
        >
          <Text>{passwordVisible ? "Hide" : "Show"}</Text>
        </TouchableOpacity>
      </View>
      {passwordError !== "" && <Text style={styles.error}>{passwordError}</Text>}

      <View style={styles.checkboxRow}>
        <TouchableOpacity
          style={styles.rememberMeCheckbox}
          onPress={() => setRememberMe(!rememberMe)}
        >
          {rememberMe && <Text>✓</Text>}
        </TouchableOpacity>
        <Text style={styles.rememberMeText}>Remember me</Text>
        <TouchableOpacity>
          <Text style={styles.forgotPasswordLink} onPress={handleForgotPassword}>Forgot password?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Don't have an account?</Text>
        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.registerLink}>Register here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginForm;
