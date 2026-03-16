import { Link } from 'expo-router'
import { ScrollView, StyleSheet } from 'react-native'
import Footer from '../../components/Footer'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'
import TitleCard from '../../components/TitleCard'
import posts from '../../data/posts'

const Blog = () => {

  return (
    <ThemedView style={{flex: 1}}>
    <ScrollView>
    <ThemedView style={styles.container}>

      <Spacer/>

      <ThemedText title={true} style={styles.heading}>
         Blog {"\n"}
      </ThemedText>

      <Spacer/>

      {posts.map((post) => (
        <Link key={post.id} href={`/blog/${post.slug}`} asChild>
          <TitleCard txt={post.title}
          style={{ marginBottom: 20, width: 300, }}>
            <ThemedText>{post.date}</ThemedText>
            <ThemedText>{post.excerpt}</ThemedText>
          </TitleCard>
        </Link>
      ))}

    </ThemedView>
    </ScrollView>
    <Footer></Footer>
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
  heading: {
    fontWeight: "bold",
    fontSize: 30,
    alignItems: "center", 
    justifyContent: "center",
  },
})