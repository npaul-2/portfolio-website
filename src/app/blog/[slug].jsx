import { useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet } from 'react-native';
import Spacer from '../../components/Spacer.jsx';
import ThemedCard from '../../components/ThemedCard.jsx';
import ThemedText from '../../components/ThemedText.jsx';
import ThemedView from '../../components/ThemedView.jsx';
import posts from '../../data/posts.js';

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
    <ScrollView>
      <ThemedView style={styles.container}>
        <Spacer />
        <ThemedCard style={{ marginBottom: 20 }}>
          <ThemedText title>{post.title}</ThemedText>
          <ThemedText>{post.excerpt}</ThemedText>
        </ThemedCard>
      </ThemedView>
    </ScrollView>
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