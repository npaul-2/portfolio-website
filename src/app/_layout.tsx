import { Tabs } from 'expo-router'
import React from 'react'
import { useColorScheme, } from 'react-native'
import Colors from "../constants/Colors"

/*import ThemeColors from '@react-nvigation/core/src/ThemeColors' */

const RootLayout = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
      <Tabs 
        screenOptions={{ 
            headerShown: false,
            tabBarStyle: {
              backgroundColor: theme.navBackground,
              paddingTop: 10,
              height: 90,
            },
            tabBarActiveTintColor: theme.iconColorFocused,
        tabBarInactiveTintColor: theme.iconColor}}      
      >
        <Tabs.Screen name="index" 
          options={{title: 'Home'}}
        />
        <Tabs.Screen name="about" 
          options={{title: 'About page'}}
        />
        
      </Tabs>
  )
}

export default RootLayout