/*
Text card with title on top
*/

import { StyleSheet, View, useColorScheme } from 'react-native'
import React from 'react'
import  Colors  from "../constants/Colors"
import ThemedText from './ThemedText'
import ThemedView from './ThemedView'

const TitleCard = ({ style, txt, ...props }) => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  return (
    <ThemedView>
      <ThemedText title={true} style={styles.heading}>
        {txt}
      </ThemedText>
      <View 
        style={[styles.card, 
        style,
        {backgroundColor: theme.navBackground}
        ]}
        {...props}
       />
    </ThemedView>
  )
}

export default TitleCard

const styles = StyleSheet.create({
    card: {
      padding: 20,
      maxWidth: 300,
      borderRadius: 5,
      boxShadow: '4px 4px #6e07bb'
    },
    heading: {
      fontweight: "bold",
      fontSize: 24,
      textAlign: 'center',
      //justifyContent: "center",
      //alignContent: "center",
      //flex: 1,
    },
})