import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, } from 'react-native'
import Spacer from '../components/Spacer'
import ThemedCard from '../components/ThemedCard'
import ThemedText from '../components/ThemedText'
import ThemedView from '../components/ThemedView'


const Home = () => {

  //uncomment if feel like adding flipcard to homepage
  const [flipped, setFlipped] = useState(false)

   useEffect(() => {
    const time2flip = setInterval(() => {
      setFlipped((prev) => !prev)
    }, 2000)
    return () => clearInterval(time2flip)
  }, [])

  //try putting this in body later...


   
  return (
    <ScrollView 
        style={{flex: 1,}} 
        contentContainerStyle={styles.scrollContent}
    >
    <ThemedView style={styles.container}>
      <Spacer/>
      <ThemedText title={true} style={styles.heading}>
        test homepage
      </ThemedText> 

      <Spacer height = {10}/>

      <ThemedText>
        Nebo Paul        
      </ThemedText>

      <Spacer/>

      <ThemedCard>
        <ThemedText >
          paragraph sample {"\n"}
          line 2 {"\n"}
          Made for CSUB course CMPS 3390, Application Development.
        </ThemedText>
      </ThemedCard> 

      <Spacer/>


      <Spacer/>

    </ThemedView>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  // like a css class, 
  // use similar commands but in camelCase
  container: {
    flex: 1,
    alignItems: "center", 
    justifyContent: 'center'
  },
  heading: {
    fontweight: "bold",
    fontSize: 30,
    justifyContent: "center",
  },
  scrollContent: {
    flexGrow: 1, 
  },
})