import { Link } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import Dropdown from './Dropdown';

export default function Navbar() {
  const blogLinks = [
    { label: 'blog', href: '/blog' },
    { label: 'Internet of Things', href: '/blog/post1' },
    { label: 'Ant Colony Optimization', href: '/blog/post2' },
    { label: 'Natural Join', href: '/blog/post3' },
  ];
  const portLinks = [
    { label: 'Overview', href: '/portfolio' },
    { label: 'Minigame Mania', href: '/portfolio/minigame_mania' },
    { label: '3D Platformer', href: '/portfolio/3d_platformer' },
    { label: 'Art installer app', href: '/portfolio/art_app' },
  ];
    return (
        <View style={styles.navbar}>
      <Link href="/" style={styles.navLink}>Home</Link>
      <Link href="/resume" style={styles.navLink}>Resume</Link>
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