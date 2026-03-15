/* 
Old page, only needed if adding themed logo to homepage
*/

import { Image, useColorScheme } from 'react-native'
import React from 'react'
import Green from '../assets/green.png'
import Red from '../assets/red.png'

const ThemedLogo = ({ ...props}) => {
  const colorScheme = useColorScheme()

  const logo = colorScheme === 'dark' ? Red : Green
  
  return (
    <Image source={logo} {...props} />
  )
}

export default ThemedLogo