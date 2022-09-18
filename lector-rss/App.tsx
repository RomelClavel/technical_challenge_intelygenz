import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import TopNewsStackNavigator from './navigators/TopNewsStackNavigator';

export default function App() {
	return (
		<NavigationContainer>
			<StatusBar />
			<TopNewsStackNavigator />
		</NavigationContainer>
	);
}
