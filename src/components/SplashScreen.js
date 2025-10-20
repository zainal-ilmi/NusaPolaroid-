// src/components/SplashScreen.js
import React from 'react';
import { Animated, Image, StyleSheet, Text, View } from 'react-native';

const SplashScreen = () => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const scaleAnim = React.useRef(new Animated.Value(0.8)).current;
  const slideAnim = React.useRef(new Animated.Value(50)).current;

  React.useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 10,
        friction: 2,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 1200,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View 
        style={[
          styles.logoContainer,
          {
            opacity: fadeAnim,
            transform: [
              { scale: scaleAnim },
              { translateY: slideAnim }
            ]
          }
        ]}
      >
        {/* Your logo from local assets */}
        <Image 
          source={require('../../assets/images/logo.png')} 
          style={styles.logoImage}
          resizeMode="contain"
        />
        <Text style={styles.appName}>NusaPolaroid</Text>
        <Text style={styles.tagline}>Koleksi Karakter Lokal</Text>
      </Animated.View>
      
      {/* Animated decorative element */}
      <Animated.View 
        style={[
          styles.decoration,
          {
            opacity: fadeAnim,
            transform: [{ rotate: fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '360deg']
            })}]
          }
        ]}
      >
        <Image 
          source={require('../../assets/images/logo-icon.png')} 
          style={styles.decorationIcon}
          resizeMode="contain"
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a', // Dark blue background
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    backgroundColor: '#1e293b',
    padding: 40,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
    borderWidth: 2,
    borderColor: '#334155',
  },
  logoImage: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  appName: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#60a5fa', // Light blue accent
    marginBottom: 10,
  },
  tagline: {
    fontSize: 18,
    color: '#cbd5e1',
    opacity: 0.9,
  },
  decoration: {
    position: 'absolute',
    bottom: 50,
  },
  decorationIcon: {
    width: 60,
    height: 60,
    opacity: 0.4,
  },
});

export default SplashScreen;