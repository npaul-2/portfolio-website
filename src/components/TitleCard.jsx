import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import Colors from "../constants/Colors";

const TitleCard = ({ style, txt, children, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  
  return (
    <View style={{ alignItems: 'center', marginBottom: 20 }}>
      <Text style={styles.heading}>
        {txt}
      </Text>
      <View 
        style={[
          styles.card, 
          { backgroundColor: theme.navBackground },
          style
        ]}
        {...props}
      >
        {children}
      </View>
    </View>
  );
};

export default TitleCard;

const styles = StyleSheet.create({
    card: {
      padding: 20,
      minWidth: 280,
      maxWidth: 320,
      borderRadius: 8,
      shadowColor: '#6e07bb',
      shadowOffset: { width: 4, height: 4 },
      shadowOpacity: 1,
      shadowRadius: 0,
      elevation: 5,
    },
    heading: {
      fontWeight: "bold", 
      fontSize: 24,
      textAlign: 'center',
      marginBottom: 10,
    },
});