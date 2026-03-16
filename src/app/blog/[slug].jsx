import { Link, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, useColorScheme } from 'react-native';
import Footer from '../../components/Footer';
import Spacer from '../../components/Spacer';
import ThemedCard from '../../components/ThemedCard';
import ThemedText from '../../components/ThemedText';
import ThemedView from '../../components/ThemedView';
import Colors from '../../constants/Colors';
import posts from '../../data/posts';

const PostDetail = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  const { slug } = useLocalSearchParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <ThemedView style={styles.container}>
        <ThemedText>Post not found</ThemedText>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={{flex: 1}}>
    <ScrollView>
      <ThemedView style={styles.container}>
        <Spacer />
        <ThemedText title={true} style={styles.heading}>
         {post.title}
      </ThemedText>
      <Spacer height={5}/>
      
      <Spacer/>

        <ThemedCard style={{ marginBottom: 20, maxWidth: 700}}>
      
          <ThemedText>Blog ID: {post.id}</ThemedText>
          <ThemedText>{post.date}</ThemedText>
          <ThemedText>"{post.excerpt}" {"\n"} {"\n"}</ThemedText>
          <ThemedText>{post.content}{"\n"}{"\n"}</ThemedText>

          <ThemedView style={[styles.tagContainer, 
            {backgroundColor: theme.navBackground}]}>
            {post.tags.map((tech, index) => (
              <ThemedView key={index} style={styles.tag}>
                <ThemedText style={styles.tagText}>{tech}</ThemedText>
              </ThemedView>
             ))}
          </ThemedView>

        </ThemedCard>

        <Spacer/>

        <Link href="/blog" style={styles.link}>
          {"<- Back to Blog"}
        </Link>


      </ThemedView>
    </ScrollView>
    <Footer></Footer>
    </ThemedView>
  );
};

export default PostDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 30,
    alignItems: "center", 
    justifyContent: "center",
  },
    tagContainer: {
    flexDirection: 'row',     
    flexWrap: 'wrap',  
    gap: 10,      
    marginTop: 10,
  },
  tag: {
    backgroundColor: '#6e07bb',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 15,
  },
  tagText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  link: {
    marginVertical: 7,
    borderBottomWidth: 2,
    borderBottomColor: "blue",
    color: "blue",
  },
});