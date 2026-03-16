import ThemedCard from '@/components/ThemedCard'
import { ScrollView, StyleSheet } from 'react-native'
import DownloadButton from '../components/DownloadButton'
import Footer from '../components/Footer'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'
import ThemedView from '../components/ThemedView'
//import TitleCard from '../components/TitleCard'

const About = () => {
  return (
    <ThemedView style={{flex: 1}}>
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
      <DownloadButton
        style 
        fileName="a resume"
        fileSource={require('../assets/Nebo_Paul_Resume_2025.pdf')} 
      />


    </ThemedView>
    </ScrollView>
    <Footer></Footer>
    </ThemedView>
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