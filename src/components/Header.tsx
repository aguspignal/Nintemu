import { StyleSheet, Text, View } from "react-native"
import { theme } from "../utils/theme"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

export default function Header() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Nintemu</Text>
			<Icon
				name="help-circle"
				size={theme.fontSize.m}
				color={theme.colors.secondary}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: theme.spacing.m,
	},
	title: {
		fontSize: theme.fontSize.l,
	},
})
