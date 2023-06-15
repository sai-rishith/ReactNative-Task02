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





