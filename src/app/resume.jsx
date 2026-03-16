import { ScrollView, StyleSheet, } from 'react-native'
import Footer from '../components/Footer'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'
import ThemedView from '../components/ThemedView'
import TitleCard from '../components/TitleCard'

const Resume = () => {

  return (
    <ThemedView style={{flex: 1}}>
    <ScrollView>
      <Spacer/>
    <ThemedView style={styles.container}>
      <TitleCard txt='Professional Summary' style={{ maxWidth: 600 }}>
        <ThemedText>
          Computer Science junior seeking a software engineering internship.{"\n"}
          Hands-on experience developing applications using C in Unity and Godot, and designing relational databases with SQL. {"\n"}
          Collaborator in team-based projects with a strong foundation in problem-solving and software development. {"\n"}
        </ThemedText>    
      </TitleCard>

      <Spacer height={10}/>

      <TitleCard txt='Technical skills' style={{ maxWidth: 600 }}>
        <ThemedText>
          Languages: Python, JavaScript, C#, C++, C, Java, HTML/CSS, SQL {"\n"}
          Technologies & Tools: Git, MySQL, Unity Engine, Godot Engine {"\n"}
        </ThemedText>    
      </TitleCard>

      <Spacer height={10}/>

      <TitleCard txt='Education' style={{ maxWidth: 600 }}>
        <ThemedText>
          California State University, Bakersfield - Bakersfield, CA {"\n"}
          Bachelor of Science in Computer Science Expected May 2027 {"\n"}
          Antelope Valley College - Lancaster, CA {"\n"}
          Associate in Science in Computer Science for Transfer Aug 2023 - May 2025 {"\n"}
        </ThemedText>    
      </TitleCard>

      <Spacer height={10}/>

      <TitleCard txt='Experience' style={{ maxWidth: 600 }}>
        <ThemedText>
          Senior Art Program Leader - Lancaster, CA {"\n"}
          MOAH Museum of Art and History Sep 2019 - Present {"\n"}
          • Coordinate facilities management, exhibit maintenance, and the secure transportation, handling, and installation of
          artwork. {"\n"}
          • Serve as a primary point-of-contact for visitors, providing customer service and acting as a docent to enhance guest
          experience. {"\n"}
        </ThemedText>    
      </TitleCard>

    </ThemedView>
    </ScrollView>
    <Footer></Footer>
    </ThemedView>

  )
}

export default Resume
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center", 
    justifyContent: 'center'
  },
})