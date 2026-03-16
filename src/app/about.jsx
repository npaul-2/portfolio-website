import { ScrollView, StyleSheet, useColorScheme } from 'react-native'
import DownloadButton from '../components/DownloadButton'
import Footer from '../components/Footer'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'
import ThemedView from '../components/ThemedView'
//import TitleCard from '../components/TitleCard'
import NeboL from '../assets/neboL.jpg'
import ImageText from '../components/ImageText'
import TitleCard from '../components/TitleCard'
import VertSpacer from '../components/VertSpacer'
import Colors from '../constants/Colors'

const About = () => {
  const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

  return (
    <ThemedView style={{flex: 1}}>
    <ScrollView>
    <ThemedView style={styles.container}>

      <Spacer/>

      <ThemedText title={true} style={styles.heading}>
        About Me
      </ThemedText>
      <Spacer/>      

      <ImageText logo={NeboL} txt="Nebo Paul" style={styles.img} />

      <Spacer height={10}/>
        <ThemedText style>
          3 years of college level experience {"\n"}
        </ThemedText>    

      <Spacer/>

      <TitleCard style={styles.container}>
        <ThemedText style>
          My name is Nebo Paul, and I'm a computer science student from Lancaster CA. {"\n"}
          3 years of college level experience {"\n"}
          3 years of college level experience {"\n"}
          3 years of college level experience {"\n"}
        </ThemedText>    
      </TitleCard>

      <Spacer/>

      <ThemedView style={[styles.double,]} safe={true}>

      <TitleCard txt='Specializations'>
        <ThemedText>
          • Database systems {"\n"}
          • Internet of Things {"\n"}
          • Coding languages: {"\n"}
              c-family, java-family {"\n"}
        </ThemedText>
      </TitleCard>

      <VertSpacer/>

      <TitleCard txt='Skills Overview'>
        <ThemedText>
          • Project leadership {"\n"}
          • Software devlopment {"\n"}
          • Problem-solving {"\n"}
          {"\n"}
        </ThemedText>
      </TitleCard>

      </ThemedView>
      
      <Spacer/> 
      <DownloadButton
        style 
        fileName="Nebo_Paul_Resume_2025"
        fileSource={require('../assets/Nebo_Paul_Resume_2025.pdf')} 
      />
      <Spacer/> 


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
  double: {
    display: "flex",
    flexDirection: "row",
    alignItems: 'center', 
    justifyContent: 'right',
    borderRadius: 5,
    paddingHorizontal: 20,
  },
})