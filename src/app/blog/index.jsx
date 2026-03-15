import { Link } from 'expo-router'
import { StyleSheet, } from 'react-native'
import ThemedCard from '../../components/ThemedCard'
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'
import TitleCard from '../../components/TitleCard'
import posts from '../../data/posts'

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

      {posts.map((post) => (
        <Link key={post.id} href={`/blog/${post.slug}`} asChild>
          <ThemedCard style={{ marginBottom: 20 }}>
            <ThemedText title>{post.title}</ThemedText>
            <ThemedText>{post.excerpt}</ThemedText>
          </ThemedCard>
        </Link>
      ))}

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