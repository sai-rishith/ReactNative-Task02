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
  ScrollView,
  Button
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { showMessage, hideMessage } from 'react-native-flash-message';
import {
  validateFirstName,
  validateLastName,
  validateEmail,
  validatePhoneNumber,
  validateOTP
} from './Validation';

const RegistrationForm = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOTP] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [otpError, setOTPError] = useState('');

  const handleSubmit = () => {
    // Perform form validation
    const firstNameError = validateFirstName(firstName);
    const lastNameError = validateLastName(lastName);
    const emailError = validateEmail(email);
    const phoneNumberError = validatePhoneNumber(phoneNumber);
    const otpError = validateOTP(otp);

    setFirstNameError(firstNameError);
    setLastNameError(lastNameError);
    setEmailError(emailError);
    setPhoneNumberError(phoneNumberError);
    setOTPError(otpError);

    if (!firstNameError && !lastNameError && !emailError && !phoneNumberError && !otpError) {
      // Perform registration logic here
      // Reset form fields
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhoneNumber('');
      setOTP('');

    
      showMessage({
        message: 'Success',
        description: 'Registration completed!',
        type: 'success',
        duration: 2000, // milliseconds
      });

      navigation.navigate('Login');
    }
  };

  const handleLogin = () => {
    // Navigate to the login page
    navigation.navigate('Login');
  };

  const handleReset = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhoneNumber('');
    setOTP('');
    setFirstNameError('');
    setLastNameError('');
    setEmailError('');
    setPhoneNumberError('');
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
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../assets/Docisn_logo.png')}
          resizeMode="contain"
        />
      </View>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../assets/registration_img.png')}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.label}>Register</Text>
      <Text style={styles.label}>First Name</Text>
      <TextInput
        style={styles.input}
        value={firstName}
        onChangeText={setFirstName}
        placeholder="Enter first name"
        keyboardType="default"
      />
      {firstNameError ? <Text style={styles.error}>{firstNameError}</Text> : null}

      <Text style={styles.label}>Last Name</Text>
      <TextInput
        style={styles.input}
        value={lastName}
        onChangeText={setLastName}
        placeholder="Enter last name"
        keyboardType="default"
      />
      {lastNameError ? <Text style={styles.error}>{lastNameError}</Text> : null}

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter email"
        keyboardType="email-address"
      />
      {emailError ? <Text style={styles.error}>{emailError}</Text> : null}

      <Text style={styles.label}>Phone Number</Text>
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text.replace(/[^0-9]/g, '').slice(0, 10))}
        placeholder="Enter phone number"
        keyboardType="phone-pad"
        maxLength={10}
      />
      {phoneNumberError ? <Text style={styles.error}>{phoneNumberError}</Text> : null}

      <Text style={styles.label}>OTP</Text>
      <View style={styles.otpContainer}>
        <TextInput
          style={[styles.input, styles.otpInput]}
          value={otp}
          onChangeText={(text) => setOTP(text.replace(/[^0-9]/g, '').slice(0, 6))}
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
        <Button title="Submit" onPress={handleSubmit} color="green" />
        <View style={styles.buttonSpacer} />
        <Button title="Reset" onPress={handleReset} color="red" />
      </View>

      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account. </Text>
        <Text style={[styles.loginText, styles.highlightedText]} onPress={handleLogin}>Log in</Text>
      </View>
    </ScrollView>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  logo: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.2,
  },
  label: {
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
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
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
  resendText: {
    color: 'blue',
    textDecorationLine: 'none',
    fontWeight:'bold',
    alignSelf: 'flex-end',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  buttonSpacer: {
    width: 10,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loginText: {
    fontSize: 16,
  },
  highlightedText: {
    fontWeight: 'bold',
    textDecorationLine: 'none',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default RegistrationForm;
