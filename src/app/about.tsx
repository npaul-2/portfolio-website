import ThemedCard from '@/components/ThemedCard'
import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'
import ThemedView from '../components/ThemedView'
//import TitleCard from '../components/TitleCard'

const About = () => {
  return (
    <ScrollView>
    <ThemedView style={styles.container}>
      <Spacer/>
      <ThemedText title={true} style={styles.heading}>
        Title
      </ThemedText>
      <Spacer/>
      <ThemedCard style={styles.container}>
        <ThemedText style>
          Nebo Paul: {"\n"}
          many years of something
        </ThemedText>    
      </ThemedCard>
      <Spacer/> 
    </ThemedView>
    </ScrollView>
  )
}

export default About

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center", 
    justifyContent: 'center'
  },
  heading: {
    //fontweight: "bold",
    fontSize: 30,
    justifyContent: "center",
  },
  link: {
    marginVertical: 7,
    borderBottomWidth: 2,
  },
})