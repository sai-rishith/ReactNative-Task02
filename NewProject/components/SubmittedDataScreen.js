// use the below code 

import React from "react";
import { View, Text, FlatList, StyleSheet, Button } from "react-native";

const SubmittedDataScreen = ({ navigation, route }) => {
  const { submittedData } = route.params;

  const handleBackToLogin = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Submitted Data</Text>
      <FlatList
        data={submittedData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>Username: {item.username}</Text>
            <Text style={styles.itemText}>Password: {item.password}</Text>
          </View>
        )}
      />
       <View style={styles.buttonContainer}>
        <Button
          title="Back to Login"
          onPress={handleBackToLogin}
          color="#008080"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  buttonContainer: {
    width: "100%",
    marginTop: 16,
    marginBottom:20,
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  itemContainer: {
    backgroundColor: "#000",
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
  },
  itemText: {
    fontSize: 20,
    color:'#fff',
    marginBottom: 12,
  },
});

export default SubmittedDataScreen;




// import React from "react";
// import { View, Text, FlatList, StyleSheet, Button } from "react-native";

// // Encryption function to obfuscate the password using a substitution cipher
// const encryptPassword = (password) => {
//   const substitutionTable = {
//     a: "@",
//     b: "!",
//     c: "#",
//     d: "$",
//     e: "%",
//     f: "^",
//     g: "&",
//     h: "*",
//     i: "1",
//     j: "2",
//     k: "3",
//     l: "4",
//     m: "5",
//     n: "6",
//     o: "7",
//     p: "8",
//     q: "9",
//     r: "0",
//     s: "!",
//     t: "@",
//     u: "#",
//     v: "$",
//     w: "%",
//     x: "^",
//     y: "&",
//     z: "*",
//     0: "a",
//     1: "b",
//     2: "c",
//     3: "d",
//     4: "e",
//     5: "f",
//     6: "g",
//     7: "h",
//     8: "i",
//     9: "j",
//     "!": "k",
//     "@": "l",
//     "#": "m",
//     $: "n",
//     "%": "o",
//     "^": "p",
//     "&": "q",
//     "*": "r",
//     "-": "s",
//     _: "t",
//     "+": "u",
//     "=": "v",
//     "?": "w",
//     "/": "x",
//     "<": "y",
//     ">": "z",
//     ".": "0",
//     ",": "1",
//     ":": "2",
//     ";": "3",
//     "(": "4",
//     ")": "5",
//   };

//   const encryptedPassword = password
//     .split("")
//     .map((char) => substitutionTable[char.toLowerCase()] || char)
//     .join("");

//   return encryptedPassword;
// };

// const SubmittedDataScreen = ({ navigation, route }) => {
//   const { submittedData } = route.params;

//   const handleBackToLogin = () => {
//     navigation.goBack();
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Submitted Data</Text>
//       <FlatList
//         data={submittedData}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.itemContainer}>
//             <Text style={styles.itemText}>Username: {item.username}</Text>
//             <Text style={styles.itemText}>
//               Password: {encryptPassword(item.password)}
//             </Text>
//           </View>
//         )}
//       />
//       <View style={styles.buttonContainer}>
//         <Button
//           title="Back to Login"
//           onPress={handleBackToLogin}
//           color="#008080"
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     paddingHorizontal: 16,
//   },
//   buttonContainer: {
//     width: "100%",
//     marginTop: 16,
//     marginBottom: 20,
//     justifyContent: "flex-start",
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 16,
//   },
//   itemContainer: {
//     backgroundColor: "#000",
//     borderRadius: 8,
//     padding: 16,
//     marginBottom: 8,
//   },
//   itemText: {
//     fontSize: 20,
//     color: "#fff",
//     marginBottom: 12,
//   },
// });

// export default SubmittedDataScreen;




