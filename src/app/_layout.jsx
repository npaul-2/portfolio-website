import { Stack } from 'expo-router';
import { StyleSheet, useColorScheme, View } from 'react-native';
import Navbar from '../components/Navbar';

const RootLayout = () => {
  const colorScheme = useColorScheme();

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {/* 1. Navbar stays at the top of the file to render on top */}
      <Navbar />

      {/* 2. The Stack fills the remaining screen space */}
      <View style={{ flex: 1 }}>
        <Stack screenOptions={{ headerShown: false }} />
      </View>
    </View>
  );
}

export default RootLayout;

const styles = StyleSheet.create({
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
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100, 
  }
});