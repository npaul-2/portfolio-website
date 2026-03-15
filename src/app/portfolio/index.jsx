import { Link } from 'expo-router';
import { ScrollView, StyleSheet } from 'react-native';
import Spacer from '../../components/Spacer.jsx';
import ThemedCard from '../../components/ThemedCard.jsx';
import ThemedText from '../../components/ThemedText.jsx';
import ThemedView from '../../components/ThemedView.jsx';
import TitleCard from '../../components/TitleCard.jsx';
import projects from '../../data/projects.js';
const Portfolio = () => {

  return (
    <ScrollView>
    <ThemedView style={styles.container}>

      <TitleCard txt='do i have projects'>
        <ThemedText>
          ● oh yeah{"\n"}{"\n"}
          ● they comin {"\n"}
        </ThemedText>    
      </TitleCard>

      <Spacer></Spacer>

      {projects.map((project) => (
        <Link key={project.id} href={`/portfolio/${project.slug}`} asChild>
          <ThemedCard style={{ marginBottom: 20 }}>
            <ThemedText title>{project.title}</ThemedText>
            <ThemedText>{project.description}</ThemedText>
          </ThemedCard>
        </Link>
      ))}

    </ThemedView>
    </ScrollView>

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