import { Link } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import Dropdown from './Dropdown';

export default function Navbar() {
  const blogLinks = [
    { label: 'blog', href: '/blog' },
    { label: 'post 1', href: '/blog/post1' },
    { label: 'post 2', href: '/blog/post2' },
  ];
  const portLinks = [
    { label: 'portfolio', href: '/portfolio' },
    { label: 'project 1', href: '/portfolio/minigame_mania' },
    { label: 'project 2', href: '/portfolio/3d_platformer' },
    { label: 'project 3', href: '/portfolio/proj3' },
  ];
    return (
        <View style={styles.navbar}>
      <Link href="/" style={styles.navLink}>Home</Link>
      <Link href="/resume" style={styles.navLink}>Resume yeah</Link>
      <Link href="/about" style={styles.navLink}>About</Link>
      <Link href="/contact" style={styles.navLink}>Contact</Link>
      
      <Dropdown label="blog" items={blogLinks} />
      <Dropdown label="portfolio" items={portLinks} />
    </View>
    );
}

const styles = StyleSheet.create({
  navbar: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    
    zIndex: 100,
  },
  navLink: {
    fontSize: 16,
  }
});