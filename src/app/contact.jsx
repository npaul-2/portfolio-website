import { Link } from 'expo-router'
import { ScrollView, StyleSheet } from 'react-native'
import Footer from '../components/Footer'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'
import ThemedView from '../components/ThemedView'
import TitleCard from '../components/TitleCard'

const Contact = () => {

  return (
    <ThemedView style={{flex: 1}}>
    <ScrollView>
    <ThemedView style={styles.container}>

      <Spacer/>
      <TitleCard txt='Contact Form'>
        <ThemedText>
          add one that works{"\n"}
          plz{"\n"}  
        </ThemedText>    
      </TitleCard>

      <Spacer/>

      <ThemedText style>
        Github: 
        <Link href="https://github.com/npaul-2"
           style={styles.link}>
                <ThemedText> https://github.com/npaul-2</ThemedText>
        </Link> {"\n"} 
      </ThemedText>

      <ThemedText style>
        LinkedIn: 
        <Link href="https://www.linkedin.com/in/nebo-paul-822649324/"
           style={styles.link}>
                <ThemedText> https://www.linkedin.com/in/nebo-paul-822649324/</ThemedText>
        </Link> {"\n"} 
      </ThemedText>

    </ThemedView>
    </ScrollView>
    <Footer></Footer>
    </ThemedView>

  )
}

export default Contact
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center", 
    justifyContent: 'center'
  },
  link: {
    marginVertical: 7,
    borderBottomWidth: 2,
    borderBottomColor: "blue",
    color: "blue",
  },
})