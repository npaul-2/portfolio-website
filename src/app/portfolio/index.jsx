import { Link } from 'expo-router';
import { ScrollView, StyleSheet, useColorScheme } from 'react-native';
import Footer from '../../components/Footer';
import Spacer from '../../components/Spacer';
import ThemedCard from '../../components/ThemedCard';
import ThemedText from '../../components/ThemedText';
import ThemedView from '../../components/ThemedView';
import Colors from '../../constants/Colors';
import projects from '../../data/projects';

const Portfolio = () => {

  const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

  return (
    <ThemedView style={{flex: 1}}>
    <ScrollView>
    <ThemedView style={styles.container}>

      <Spacer/>

      <ThemedText title={true} style={styles.heading}>
        Portfolio {"\n"}
      </ThemedText>

      <Spacer/>

      {projects.map((project) => (
        <Link key={project.id} href={`/portfolio/${project.slug}`} asChild>
          <ThemedCard style={{ marginBottom: 20 , width: 300,}}>
            <ThemedText title>{project.title}</ThemedText>

            <ThemedView style={[styles.tagContainer, 
      {backgroundColor: theme.navBackground}]}>
            {project.techStack.map((tech, index) => (
              <ThemedView key={index} style={styles.tag}>
                <ThemedText style={styles.tagText}>{tech}</ThemedText>
              </ThemedView>
             ))}
            </ThemedView>

          </ThemedCard>
        </Link>
      ))}

    </ThemedView>
    </ScrollView>
    <Footer></Footer>
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
  heading: {
    fontWeight: "bold",
    fontSize: 30,
    alignItems: "center", 
    justifyContent: "center",
  },
})