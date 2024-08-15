import { StyleSheet, Text, View } from "react-native"
import { theme } from "../utils/theme"

export default function Help() {
	return (
		<View style={styles.container}>
			<Text>Help</Text>
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
