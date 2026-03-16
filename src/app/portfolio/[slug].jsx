import { Link, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, useColorScheme } from 'react-native';
import Footer from '../../components/Footer';
import ImageText from '../../components/ImageText';
import Spacer from '../../components/Spacer';
import ThemedCard from '../../components/ThemedCard';
import ThemedText from '../../components/ThemedText';
import ThemedView from '../../components/ThemedView';
import Colors from '../../constants/Colors';
import { ProjectImages } from '../../data/ImageMap';
import projects from '../../data/projects';

const ProjectDetail = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  const { slug } = useLocalSearchParams();
  const project = projects.find((p) => p.slug === slug);

  const imageSource = ProjectImages[project.image];

  if (!project) {
    return (
      <ThemedView style={styles.container}>
        <ThemedText>Project not found</ThemedText>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={{flex: 1}}>
    <ScrollView>
      <ThemedView style={styles.container}>
        <Spacer />
        <ThemedText title={true} style={styles.heading}>
         {project.title}
      </ThemedText>
      <Spacer height={5}/>

      <ThemedText style>
        <Link href={project.github}
           style={styles.link}>
                <ThemedText>{project.github}</ThemedText>
        </Link> {"\n"} 
      </ThemedText>

      <Spacer/>

      <ImageText logo={imageSource} txt="" style={styles.img} />
      
      <Spacer/>

        <ThemedCard style={{ marginBottom: 20, maxWidth: 700}}>
      
          <ThemedText>{project.description}</ThemedText>

          <ThemedView style={[styles.tagContainer, 
            {backgroundColor: theme.navBackground}]}>
            {project.techStack.map((tech, index) => (
              <ThemedView key={index} style={styles.tag}>
                <ThemedText style={styles.tagText}>{tech}</ThemedText>
              </ThemedView>
             ))}
          </ThemedView>

        </ThemedCard>
      </ThemedView>
    </ScrollView>
    <Footer></Footer>
    </ThemedView>
  );
};

export default ProjectDetail;

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

