import { StyleSheet, } from 'react-native'
import ThemedText from '../components/ThemedText'
import ThemedView from '../components/ThemedView'
import TitleCard from '../components/TitleCard'

const Contact = () => {

  return (
    <ThemedView style={styles.container}>
      <TitleCard txt='please dont call me'>
        <ThemedText>
          ● hoi{"\n"}{"\n"}
          ● plox{"\n"}
          {"\n"}{"\n"}
          ● just dont
        </ThemedText>    
      </TitleCard>
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
})