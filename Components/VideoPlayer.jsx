import { View,Text, SafeAreaView } from "react-native";
import { useVideoPlayer, VideoView } from "expo-video";
import { StyleSheet } from "react-native";
import { useEffect,useState } from "react";

function VideoPlayerScreen () {
    const [timeStamp, setTimeStamp] = useState(0);
    const Source = ""
    const player = useVideoPlayer(Source, player => {
        player.play()
    });

    useEffect(() =>{
 const sub = player.addListener("timeUpdate", (event) => {
		setTimeStamp(event.currentTime);
 });
 return () => {
		sub.remove(); // cleanup listener when component unmounts or player changes
 };
    },[player])
return (
	<View style={styles.container}>
		<VideoView style={styles.video} player={player}></VideoView>
        <Text>Time stamp : {timeStamp}</Text>
	</View>
);
}

const styles = StyleSheet.create({
	container: { flex: 1, paddingVertical: "10%" },
	video: {
		width: 390,
		height: 275,
		marginVertical: "5%",
		// top: '10%',
	},
});

export default VideoPlayerScreen;