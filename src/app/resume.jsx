import { ScrollView, StyleSheet, } from 'react-native'
import Footer from '../components/Footer'
import ThemedText from '../components/ThemedText'
import ThemedView from '../components/ThemedView'
import TitleCard from '../components/TitleCard'

const Resume = () => {

  return (
    <ThemedView style={{flex: 1}}>
    <ScrollView>
    <ThemedView style={styles.container}>
      <TitleCard txt='yeah i got skills'>
        <ThemedText>
          ● oh yeah{"\n"}{"\n"}
          ● lots of em{"\n"}
          {"\n"}
          ● just you wait buddy
        </ThemedText>    
      </TitleCard>
    </ThemedView>
    </ScrollView>
    <Footer></Footer>
    </ThemedView>

  )
}

export default Resume
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center", 
    justifyContent: 'center'
  },
})