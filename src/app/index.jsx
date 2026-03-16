import { Link } from 'expo-router'
import { ScrollView, StyleSheet } from 'react-native'
import Nebo from '../assets/nebo_transparent_print_2.jpg'
import Footer from '../components/Footer'
import ImageText from '../components/ImageText'
import Spacer from '../components/Spacer'
import ThemedCard from '../components/ThemedCard'
import ThemedText from '../components/ThemedText'
import ThemedView from '../components/ThemedView'

const Home = () => {
  return ( 
    <ThemedView style={{flex: 1}}>
    <ScrollView>
    <ThemedView style={styles.container} safe={true}>
      <Spacer/>

      <ThemedText title={true} style={styles.heading}>
        It's "me"
      </ThemedText>
      <Spacer/>
      <ThemedText title={true} style={styles.heading}>
        Nebo Paul {"\n"}
        Computer Science Student
      </ThemedText>
      <Spacer height={20}/>
      <ThemedText style>
        GitHub:  <Link href="https://github.com/npaul-2"
           style={styles.link}>
                <ThemedText>https://github.com/npaul-2</ThemedText>
        </Link> {"\n"}
        Email:    npaul2@csub.edu 
      </ThemedText>

      <ImageText logo={Nebo} txt="" style={styles.img} />

      <Spacer/>

      <ThemedCard style>
        <ThemedText style>
          yeah man just say whatever here i guess {"\n"}
          i hope noone reads this {"\n"}
          </ThemedText>
      </ThemedCard> 

      <Spacer height={60}/>  

      
        
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
})