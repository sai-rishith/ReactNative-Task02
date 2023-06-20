// import React from "react";
// import { View, Text, FlatList, StyleSheet, Button } from "react-native";

// const SubmittedDataScreen = ({ navigation, route }) => {
//   const { submittedData } = route.params;

//   function handleBackToLogin() {
//     navigation.goBack();
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Submitted Data</Text>
//       <FlatList
//         data={submittedData}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.itemContainer}>
//             <Text style={styles.itemText}>Username: {item.username}</Text>
//             <Text style={styles.itemText}>Password: {item.password}</Text>
//           </View>
//         )}
//       />
//        <View style={styles.buttonContainer}>
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
//     marginBottom:20,
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
//     color:'#fff',
//     marginBottom: 12,
//   },
// });

// export default SubmittedDataScreen;

//below code with features to save, edit, and delete submitted data
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  TextInput,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SubmittedDataScreen = ({ navigation }) => {
  const [submittedData, setSubmittedData] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedUsername, setEditedUsername] = useState("");
  const [editedPassword, setEditedPassword] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await AsyncStorage.getItem("submittedData");
      if (data) {
        setSubmittedData(JSON.parse(data));
      }
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const handleEditData = async () => {
    try {
      if (editingIndex !== null) {
        const updatedData = [...submittedData];
        const editedItem = { ...updatedData[editingIndex] };

        editedItem.username = editedUsername;
        editedItem.password = editedPassword;

        updatedData[editingIndex] = editedItem;

        await AsyncStorage.setItem(
          "submittedData",
          JSON.stringify(updatedData)
        );
        setSubmittedData(updatedData);

        setEditingIndex(null);
        setEditedUsername("");
        setEditedPassword("");
      }
    } catch (error) {
      console.log("Error editing data:", error);
    }
  };

  const handleDeleteData = async (index) => {
    try {
      const updatedData = [...submittedData];
      updatedData.splice(index, 1);

      await AsyncStorage.setItem("submittedData", JSON.stringify(updatedData));
      setSubmittedData(updatedData);
    } catch (error) {
      console.log("Error deleting data:", error);
    }
  };

  const handleEditButton = (index, item) => {
    setEditingIndex(index);
    setEditedUsername(item.username);
    setEditedPassword(item.password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Submitted Data</Text>
      <FlatList
        data={submittedData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>Username: {item.username}</Text>
            <Text style={styles.itemText}>Password: {item.password}</Text>
            <View style={styles.buttonContainer}>
              <Button
                title="Edit"
                onPress={() => handleEditButton(index, item)}
                color="#008080"
              />
              <Button
                title="Delete"
                onPress={() => handleDeleteData(index)}
                color="#FF0000"
              />
            </View>
          </View>
        )}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Back to Login"
          onPress={() => navigation.goBack()}
          color="#008080"
        />
      </View>
      {editingIndex !== null && (
        <View style={styles.editContainer}>
          <Text style={styles.editTitle}>Edit Data</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Username:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter username"
              value={editedUsername}
              onChangeText={(text) => setEditedUsername(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Password:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter password"
              value={editedPassword}
              onChangeText={(text) => setEditedPassword(text)}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Save" onPress={handleEditData} color="#008080" />
            <Button
              title="Cancel"
              onPress={() => setEditingIndex(null)}
              color="#FF0000"
            />
          </View>
        </View>
      )}
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
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  editTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  itemContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
  },
  itemText: {
    fontSize: 20,
    color: "#000",
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    marginBottom: 8,
    padding: 8,
    width: "100%",
  },
  editContainer: {
    backgroundColor: "#F0F0F0",
    borderRadius: 8,
    padding: 16,
    marginVertical: 16,
    width: "90%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  inputContainer: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
});

export default SubmittedDataScreen;
