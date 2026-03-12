import { Link } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface DropdownProps {
  label: string;
  items: { label: string; href: any }[];
}

const Dropdown = ({ label, items }: DropdownProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={() => setVisible(!visible)} 
        style={styles.trigger}
      >
        <Text style={styles.triggerText}>{label} {visible ? '▴' : '▾'}</Text>
      </TouchableOpacity>

      {visible && (
        <View style={styles.menu}>
          {items.map((item, index) => (
            <Link 
              key={index} 
              href={item.href} 
              style={styles.item}
              onPress={() => setVisible(false)}
            >
              <Text>{item.label}</Text>
            </Link>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 50,
  },
  trigger: {
    padding: 10,
  },
  triggerText: {
    fontSize: 16,
    fontWeight: '500',
  },
  menu: {
    position: 'absolute',
    top: 45,
    left: 0,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 10,
    minWidth: 150,
    borderWidth: 1,
    borderColor: '#ddd',
    zIndex: 1000,
    elevation: 5, 
  },
  item: {
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc',
  },
});

export default Dropdown;