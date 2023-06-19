import React from 'react';
import { ImageBackground, StyleSheet, View, Image } from 'react-native';

const Splash = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/splash001.png')} style={styles.backgroundImage}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/Docisn_logo.png')} style={styles.logoImage} />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'flex-start',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 400, // Adjust the width as per your requirement
    height: 400, // Adjust the height as per your requirement
    resizeMode: 'contain',
  },
});

export default Splash;
