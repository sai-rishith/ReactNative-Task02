// import React from "react";
// import { View, Text, FlatList, StyleSheet } from "react-native";

// const SubmittedDataScreen = ({ route }) => {
//     const navigation = useNavigation();
//     const submittedData = route.params.submittedData;
//   const handleGoBack = () => {
//     navigation.goBack();
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>Submitted Data:</Text>
//       <FlatList
//         data={submittedData}
//         renderItem={({ item }) => (
//           <View style={styles.submittedDataItem}>
//             <Text>Username: {item.username}</Text>
//             <Text>Password: {item.password}</Text>
//           </View>
//         )}
//         keyExtractor={(item, index) => index.toString()}
//       />
//             <Button title="Go Back" onPress={handleGoBack} />

//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     paddingHorizontal: 20,
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: "bold",
//     marginBottom: 5,
//   },
//   submittedDataItem: {
//     marginBottom: 10,
//     padding: 10,
//     backgroundColor: "#f9f9f9",
//     borderRadius: 4,
//   },
// });

// export default SubmittedDataScreen;



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
      <Button
        title="Back to Login"
        onPress={handleBackToLogin}
        color="#008080"
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      // paddingHorizontal: windowWidth * 0.1,
      // paddingVertical: windowHeight * 0.1,
    },
    scrollContainer: {
      flexGrow: 1,
      justifyContent: "center",
    },
    
  });

export default SubmittedDataScreen;
