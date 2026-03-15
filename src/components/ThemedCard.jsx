/*
placeholder from last project
*/

import { StyleSheet, View, useColorScheme } from 'react-native'
import Colors from "../constants/Colors"

const ThemedCard = ({ style, ...props }) => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  return (
    <View 
    style={[styles.card, 
      style,
      {backgroundColor: theme.navBackground}
    ]}
        {...props}
    />
  )
}

export default ThemedCard

const styles = StyleSheet.create({
    card: {
      padding: 20,
      maxWidth: 300,
      borderRadius: 5,
      boxShadow: '4px 4px #6e07bb'
    }

})