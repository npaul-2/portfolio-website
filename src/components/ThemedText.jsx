//placeholer from last project

import { Jersey10_400Regular, useFonts } from '@expo-google-fonts/jersey-10';
import { Text, useColorScheme } from 'react-native';
import Colors from "../constants/Colors";

const ThemedText = ({ style, title = false, ...props }) => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  const textColor = title ? theme.title : theme.text
  const [fontsLoaded] = useFonts({
    Jersey10_400Regular,
  });

  return (
    <Text 
    style={[{ color: textColor, 
      fontFamily: 'Jersey10_400Regular',
      lineHeight: 22,
      fontSize: 20,
      letterSpacing: 1,
    }, style]}
    {...props}
    />
  )
}

export default ThemedText