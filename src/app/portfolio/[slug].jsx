import { useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet } from 'react-native';
import Spacer from '../../components/Spacer';
import ThemedCard from '../../components/ThemedCard';
import ThemedText from '../../components/ThemedText';
import ThemedView from '../../components/ThemedView';
import projects from '../../data/projects.js';

const ProjectDetail = () => {
  const { slug } = useLocalSearchParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <ThemedView style={styles.container}>
        <ThemedText>Project not found</ThemedText>
      </ThemedView>
    );
  }

  return (
    <ScrollView>
      <ThemedView style={styles.container}>
        <Spacer />
        <ThemedCard style={{ marginBottom: 20 }}>
          <ThemedText title>{project.title}</ThemedText>
          <ThemedText>{project.description}</ThemedText>
        </ThemedCard>
      </ThemedView>
    </ScrollView>
  );
};

export default ProjectDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
});