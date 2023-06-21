import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  StyleSheet,
  Dimensions,
  Button
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { validatePhoneNumber, validateOTP } from './Validation';

const ForgotPasswordForm = () => {
  const navigation = useNavigation();
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOTP] = useState('');
  const [mobileNumberError, setMobileNumberError] = useState('');
  const [otpError, setOTPError] = useState('');

  const handleSubmit = () => {
    const mobileNumberError = validatePhoneNumber(mobileNumber);
    const otpError = validateOTP(otp);

    setMobileNumberError(mobileNumberError);
    setOTPError(otpError);

    if (!mobileNumberError && !otpError) {
      navigation.navigate('CreatePassword');
    }
  };

  const handleLogin = () => {
    // Navigate to the login page
    navigation.navigate('Login');
  };

  const handleReset = () => {
    setMobileNumber('');
    setOTP('');
    setMobileNumberError('');
    setOTPError('');
  };

  const handleGetOTP = () => {
    // Logic to send OTP to the provided phone number
    Alert.alert('OTP sent', 'Please check your phone for the OTP');
  };

  const handleResendOTP = () => {
    // Logic to resend OTP
    Alert.alert('OTP resent', 'Please check your phone for the new OTP');
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/Docisn_logo.png')}
        resizeMode="contain"
      />
      <Image
        style={styles.logo}
        source={require('../assets/password.png')}
        resizeMode="contain"
      />

      <Text style={styles.label}>Mobile Number</Text>
      <TextInput
  style={styles.input}
  value={mobileNumber}
  onChangeText={(text) => {
    // Filter out non-numeric characters
    const numericValue = text.replace(/[^0-9]/g, '');
    setMobileNumber(numericValue);
  }}
  placeholder="Enter mobile number"
  keyboardType="numeric"
  maxLength={10}
/>

      {mobileNumberError ? <Text style={styles.error}>{mobileNumberError}</Text> : null}

      <Text style={styles.label}>OTP</Text>
      <View style={styles.otpContainer}>
        <TextInput
          style={[styles.input, styles.otpInput]}
          value={otp}
          onChangeText={setOTP}
          placeholder="Enter OTP"
          keyboardType="numeric"
          maxLength={6}
        />
        <TouchableOpacity style={styles.getOTPButton} onPress={handleGetOTP}>
          <Text style={styles.buttonText}>Get OTP</Text>
        </TouchableOpacity>
      </View>
      {otpError ? <Text style={styles.error}>{otpError}</Text> : null}

      <TouchableOpacity onPress={handleResendOTP}>
        <Text style={styles.resendText}>Didn't receive OTP? Resend</Text>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={handleSubmit} color="#2ecc71" style={styles.button} />
        <Button title="Reset" onPress={handleReset} color="#e74c3c" style={styles.button} />
      </View>

      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Remember your password? </Text>
        <Text style={[styles.loginText, styles.highlightedText]} onPress={handleLogin}>Log in</Text>
      </View>
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
    backgroundColor: '#f2f2f2',
  },
  logo: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.2,
    marginBottom: 20,
  },
  label: {
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 16,
    color: '#333333',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: '#ffffff',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  otpInput: {
    width: '70%',
  },
  getOTPButton: {
    backgroundColor: '#2ecc71',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  resendText: {
    color: '#3498db',
    textDecorationLine: 'underline',
    alignSelf: 'flex-end',
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 10,
    width: '100%',
  },
  button: {
    width: '40%',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loginText: {
    fontSize: 16,
    color: '#333333',
  },
  highlightedText: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  error: {
    color: '#e74c3c',
    marginBottom: 10,
    fontSize: 16,
  },
});

export default ForgotPasswordForm;
