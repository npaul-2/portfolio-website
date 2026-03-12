import { StyleSheet, } from 'react-native'
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'
import TitleCard from '../../components/TitleCard'

const Blog = () => {

  return (
    <ThemedView style={styles.container}>
      <TitleCard txt='do i have anything to say'>
        <ThemedText>
          ● yeah{"\n"}{"\n"}
          ● but {"\n"}
          {"\n"}
          ● I won't
        </ThemedText>    
      </TitleCard>
    </ThemedView>

  )
}

export default Blog
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center", 
    justifyContent: 'center'
  },
})