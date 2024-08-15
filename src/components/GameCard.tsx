import { Image, StyleSheet, Text, View } from "react-native"

type Props = {
	name: string | null
	console: string | null
	image_src: string | null
}

export default function GameCard({ name, console, image_src }: Props) {
	if (!image_src) {
		image_src = "../../assets/icon.png"
	}

	return (
		<View style={styles.container}>
			<View>
				<Image
					source={require(image_src)}
					// source={image_src ? require(image_src) : require("../../assets/icon.png")}
				/>
			</View>

			<View>
				<Text>{name ? name : "Game name"}</Text>
				<Text>{console ? console : "Console"}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {},
})
