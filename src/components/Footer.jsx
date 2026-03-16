import { StyleSheet } from 'react-native';
import ThemedText from './ThemedText';
import ThemedView from './ThemedView';

const Footer = () => {
  return (
    <ThemedView container>
      <ThemedText>Footer text, 2026</ThemedText>
    </ThemedView>
  )
}

export default Footer

const styles = StyleSheet.create({})