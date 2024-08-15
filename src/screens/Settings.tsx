import { StyleSheet, Text, View } from "react-native"
import { theme } from "../utils/theme"

export default function Settings() {
	return (
		<View style={styles.container}>
			<Text>Settings</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.background,
		alignItems: "center",
		justifyContent: "center",
	},
})
