/*
Image with caption
*/
import React from 'react'
import { Image, StyleSheet, useColorScheme, View } from 'react-native'
import ThemedText from './ThemedText'

const ImageText = ({ logo, txt, ...props}) => {
  const colorScheme = useColorScheme()
  
  return (
    <View style={styles.container}>
      <Image source={logo} {...props} style={styles.img}></Image>
      <ThemedText style={{textAlign: 'right'}}> 
        {txt}
      </ThemedText>
    </View>
  )
}

export default ImageText

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //justifyContent: "center",
    //width: 200,
    //alignSelf: 'strech',
    alignItems: "center", 
    borderRadius: 5,
  },
  img: {
    //margin: 10,
    //width: '2%',
    //height: undefined,
    //maxHeight: 400,
    //maxWidth: 300,
    aspectRatio: 1/1, 
    resizeMode: 'cover',
    flex: 1,
    height: 'undefined',
    width: 300,
    borderWidth: 3,
    borderColor: '#ffffff',
    borderRadius: 25,
  },
})