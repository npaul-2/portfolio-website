import { Asset } from 'expo-asset';
import * as Sharing from 'expo-sharing';
import { Alert, Platform, StyleSheet, TouchableOpacity } from 'react-native';
import ThemedText from './ThemedText';

const DownloadButton = ({ fileSource, fileName, style }) => {
  const handleDownload = async () => {
    try {
      // 1. Load asset
      const asset = Asset.fromModule(fileSource);
      await asset.downloadAsync();

      // 2. Handle Web
      if (Platform.OS === 'web') {
        const link = document.createElement('a');
        link.href = asset.localUri;
        link.download = fileName.endsWith('.pdf') ? fileName : `${fileName}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        return;
      }

      // 3. Handle Mobile
      const isAvailable = await Sharing.isAvailableAsync();
      if (isAvailable) {
        await Sharing.shareAsync(asset.localUri);
      } else {
        Alert.alert("Error", "Sharing is not available on this device.");
      }
    } catch (error) {
      console.error("Download Error:", error);
      Alert.alert("Error", "Could not access the file.");
    }
  };

  return (
    <TouchableOpacity style={[styles.button, style]} onPress={handleDownload}>
      <ThemedText style={styles.text}>Download Resume</ThemedText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default DownloadButton;