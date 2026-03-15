/*
For special dark/light mode image
*/
import { Image, useColorScheme, StyleSheet } from 'react-native'
import React from 'react'
import Chair from '../assets/chair.jpg'
import Friend from '../assets/friend.png'

const ThemedLogo = ({ ...props}) => {
  const colorScheme = useColorScheme()

  const logo = colorScheme === 'dark' ? Friend : Chair
  
  return (
    <Image  source={logo} {...props} style={styles.img} />
  )
}

export default ThemedLogo

const styles = StyleSheet.create({
  container: {
    alignItems: "center", 
    borderRadius: 5,
  },
  img: {
    aspectRatio: 3/4, 
    resizeMode: 'cover',
    flex: 1,
    height: 'undefined',
    width: 300,
    //borderWidth: 2,
    borderRadius: 5,
  },
})