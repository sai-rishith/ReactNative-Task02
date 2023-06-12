
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
    },
    scrollContainer: {
      flexGrow: 1,
      justifyContent: "center",
    },
    
  });

export default SubmittedDataScreen;
