import { useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet } from 'react-native';
import Footer from '../../components/Footer';
import Spacer from '../../components/Spacer';
import ThemedCard from '../../components/ThemedCard';
import ThemedText from '../../components/ThemedText';
import ThemedView from '../../components/ThemedView';
import posts from '../../data/posts';

const PostDetail = () => {
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
        <ThemedCard style={{ marginBottom: 20 }}>
          <ThemedText title>{post.title}</ThemedText>
          <ThemedText>{post.excerpt}</ThemedText>
        </ThemedCard>
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
});