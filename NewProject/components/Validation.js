//Validations for login and registrations forms
export const validateFirstName = (firstName) => {
    if (firstName.trim() === '') {
      return 'First name is required.';
    }
    return '';
  };
  export const validateUserName = (userName) => {
    if (userName.trim() === '') {
      return 'User name is required. Enter your email-id';
    }
    return '';
  };
  
  export const validateLastName = (lastName) => {
    if (lastName.trim() === '') {
      return 'Last name is required.';
    }
    return '';
  };
  
  export const validateEmail = (email) => {
    if (email.trim() === '') {
      return 'Email is required.';
    }
  
    // Email validation using regular expression
    const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailPattern.test(email)) {
      return 'Invalid email format.';
    }
  
    return '';
  };
  
  export const validatePhoneNumber = (phoneNumber) => {
    if (phoneNumber === '') {
      return 'Phone Number is required.';
    } else if (phoneNumber.length !== 10) {
      return 'Phone Number must be exactly 10 digits.';
    }
    return '';
  };
  
  export const validateOTP = (otp) => {
    if (otp === '') {
      return 'OTP is required.';
    } else if (otp.length !== 6) {
      return 'OTP must be exactly 6 digits.';
    } else if (!/^\d+$/.test(otp)) {
      return 'OTP must contain only digits.';
    }
    return '';
  };

  export const validatePassword = (password) => {
    if (password.trim() === '') {
      return 'Password is required.';
    } else if (password.length < 6) {
      return 'Password must be at least 6 characters long.';
    }
    return '';
  };
  