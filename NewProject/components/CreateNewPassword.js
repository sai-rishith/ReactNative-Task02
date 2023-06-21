import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Button,
  Modal,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  validatePassword,
  validateConfirmPassword,
} from './Validation'; // Import validation functions

const CreatePasswordForm = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleSubmit = () => {
    // Perform form validation and password creation logic here
    const passwordError = validatePassword(password);
    const confirmPasswordError = validateConfirmPassword(password, confirmPassword);

    if (passwordError || confirmPasswordError) {
      setPasswordError(passwordError);
      setConfirmPasswordError(confirmPasswordError);
      return;
    }

    // Passwords match, proceed with creating password
    // Reset form fields
    setPassword('');
    setConfirmPassword('');
    setPasswordError('');
    setConfirmPasswordError('');

    // Show success modal
    setShowSuccessModal(true);
  };

  const handleReset = () => {
    setPassword('');
    setConfirmPassword('');
    setPasswordError('');
    setConfirmPasswordError('');
  };

  const handleLoginRedirect = () => {
    navigation.navigate('Login');
  };

  const handleModalClose = () => {
    setShowSuccessModal(false);
    handleLoginRedirect();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Create Password</Text>

      <Text style={styles.subLabel}>Password</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="blue"
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

      <Text style={styles.subLabel}>Confirm Password</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Confirm your password"
          placeholderTextColor="blue"
          secureTextEntry={!confirmPasswordVisible}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TouchableOpacity
          onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
          style={styles.eyeIcon}
        >
          <Text>{confirmPasswordVisible ? "Hide" : "Show"}</Text>
        </TouchableOpacity>
      </View>

      {passwordError !== '' && <Text style={styles.error}>{passwordError}</Text>}
      {confirmPasswordError !== '' && <Text style={styles.error}>{confirmPasswordError}</Text>}

      <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={handleSubmit} color="#2ecc71" />
        <Button title="Reset" onPress={handleReset} color="#e74c3c" />
      </View>

      <TouchableOpacity onPress={handleLoginRedirect}>
        <Text style={styles.link}>Back to Login</Text>
      </TouchableOpacity>

      <Modal visible={showSuccessModal} transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Password Creation Successful!</Text>
            <TouchableOpacity style={styles.modalLink} onPress={handleModalClose}>
              <Text style={styles.modalLinkText}>Go to Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
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
  },
  eyeIcon: {
    padding: windowWidth * 0.02,
  },
  error: {
    color: "red",
    fontSize: windowWidth * 0.035,
    marginBottom: windowHeight * 0.015,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 20,
  },
  link: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'none',
    fontWeight:'bold'
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight:'bold'
  },
  modalLink: {
    marginTop: 10,
  },
  modalLinkText: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'none',
    fontWeight:'bold'
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default CreatePasswordForm;
