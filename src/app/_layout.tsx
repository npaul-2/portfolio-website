import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, useColorScheme, View } from 'react-native';
import Navbar from '../components/Navbar';

/*import ThemeColors from '@react-nvigation/core/src/ThemeColors' */

const RootLayout = () => {
  const colorScheme = useColorScheme()
  //const theme = Colors[colorScheme] ?? Colors.light

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Navbar />

      <View style={{ flex: 1 }}>
        <Stack screenOptions={{ headerShown: false }} />
      </View>
    </View>
  );
}

export default RootLayout

const styles = StyleSheet.create({
  // like a css class, 
  // use similar commands but in camelCase
  container: {
    flex: 1,
    alignItems: "center", 
    justifyContent: 'center'
  },
  heading: {
    fontWeight: "bold",
    fontSize: 30,
    justifyContent: "center",
  },
  scrollContent: {
    flexGrow: 1, 
  },
  navbarContainer: {
    position: 'absolute', 
    top: 100,
    left: 0,
    right: 0,
    zIndex: 0, 
  }
})