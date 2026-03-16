import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';
import ThemedText from './ThemedText';
import ThemedView from './ThemedView';

const Footer = () => {
  return (
    <ThemedView container 
    style={ 
      {
        borderTopWidth: 2,
        borderTopColor: "white",

      }}>
      <ThemedText>
        {"\n"}
        © 2026 Nebo Paul | 
        <Link href="https://github.com/npaul-2"
           style={styles.link}>
                <ThemedText> Github </ThemedText>
        </Link>
        |
        <Link href="https://www.linkedin.com/in/nebo-paul-822649324/"
           style={styles.link}>
                <ThemedText> LinkedIn {"\n"} </ThemedText>
        </Link> {"\n"} 
      </ThemedText>
    </ThemedView>
  )
}

export default Footer

const styles = StyleSheet.create({
  link: {
    marginVertical: 7,
    //borderBottomWidth: 2,
    borderBottomColor: "blue",
    color: "blue",
  },
})