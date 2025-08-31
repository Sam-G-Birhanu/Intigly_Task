import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import VideoPlayerScreen from "./Components/VideoPlayer";

export default function App() {
  return (
    <View style={styles.container}>
      <VideoPlayerScreen></VideoPlayerScreen>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: '#fff',
		// backgroundColor: "#000", // black background for video

		alignItems: "center",
		// justifyContent: "center",
	},
});
