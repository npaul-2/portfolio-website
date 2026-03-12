import { StyleSheet, } from 'react-native'
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'
import TitleCard from '../../components/TitleCard'

const Portfolio = () => {

  return (
    <ThemedView style={styles.container}>
      <TitleCard txt='do i have projects'>
        <ThemedText>
          ● oh yeah{"\n"}{"\n"}
          ● they comin {"\n"}
        </ThemedText>    
      </TitleCard>
    </ThemedView>

  )
}

export default Portfolio
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center", 
    justifyContent: 'center'
  },
})