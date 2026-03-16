import { Link } from 'expo-router'
import { ScrollView, StyleSheet, useColorScheme } from 'react-native'
import Nebo2 from '../assets/neboMirror.jpg'
import Footer from '../components/Footer'
import ImageText from '../components/ImageText'
import Spacer from '../components/Spacer'
import ThemedCard from '../components/ThemedCard'
import ThemedText from '../components/ThemedText'
import ThemedView from '../components/ThemedView'
import VertSpacer from '../components/VertSpacer'
import Colors from "../constants/Colors"

const Home = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return ( 
    <ThemedView style={{flex: 1}}>
    <ScrollView>
    <ThemedView style={styles.container} safe={true}>

        

      <ThemedView style={[styles.double, 
      {backgroundColor: theme.navBackground}]} safe={true}>

      <Spacer height = {350}/>

      <ImageText logo={Nebo2} txt="" style={styles.img} />

      <VertSpacer/>

      <ThemedView style={ 
      {backgroundColor: theme.navBackground}}>

      <ThemedText title={true} style={styles.heading}>
         Nebo Paul {"\n"}
      </ThemedText>
      <Spacer height={20}/>
      <ThemedText title={true} style={styles.heading}>
        Computer Science Student at CSUB
      </ThemedText>
      <Spacer height={10}/>

      <ThemedCard style={[ { maxWidth: 500, boxShadow: '4px, 4px #6e07bb' }]}>
        <ThemedText style>
          Computer Science junior seeking software devlopment internships. {"\n"}
          Enjoys the arts, walking, and programming. {"\n"}
          Experience in something team-projects and problem solving {"\n"}
          </ThemedText>
      </ThemedCard> 

      </ThemedView>

      </ThemedView>
     

      <Spacer/>

      <ThemedText style>
        <Link href="https://github.com/npaul-2"
           style={styles.link}>
                <ThemedText>Visit my github!</ThemedText>
        </Link> {"\n"} 
      </ThemedText>

      

      <Spacer/>  

      
        
    </ThemedView>
    </ScrollView>
    <Footer></Footer>

    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center", 
    justifyContent: "center",
    paddingTop: 80,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 30,
    alignItems: "center", 
    justifyContent: "center",
  },
  link: {
    marginVertical: 7,
    borderBottomWidth: 2,
  },
  scrollContent: {
    flexGrow: 1, 
  },
    double: {
    display: "flex",
    flexDirection: "row",
    alignItems: 'center', 
    justifyContent: 'right',
    //padding: 20,
    //maxWidth: 300,
    borderRadius: 5,
    //backgroundColor: theme.navBackground,
    //boxShadow: '4px 4px #6e07bb'
    paddingHorizontal: 20,
    //width: '100%',
    //justifyContent: "space-between",
  },
})