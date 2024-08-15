import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import Help from "./src/screens/Help"
import Home from "./src/screens/Home"
import Settings from "./src/screens/Settings"
import Header from "./src/components/Header"

const TabStack = createBottomTabNavigator()

export default function App() {
	return (
		<NavigationContainer>
			<StatusBar style="dark" />

			<TabStack.Navigator
				initialRouteName="Home"
				screenOptions={{
					header: () => <Header />,
				}}
			>
				<TabStack.Screen name="Home" component={Home} />
				<TabStack.Screen
					name="Settings"
					component={Settings}
				/>
				<TabStack.Screen name="Help" component={Help} />
			</TabStack.Navigator>
		</NavigationContainer>
	)
}
