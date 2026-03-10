// placeholder from last project

import { StyleSheet, View, useColorScheme } from 'react-native'
import Colors from "../constants/Colors"

const ThemedView = ({ style, safe=false, ...props }) => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  
  return (
    <View
    style={[{backgroundColor: theme.background}, style]}
    {...props}
    />
  )

}

export default ThemedView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch", 
    justifyContent: "center",
  },
  heading: {
    fontweight: "bold",
    fontSize: 18,
    justifyContent: "center",
  },
})