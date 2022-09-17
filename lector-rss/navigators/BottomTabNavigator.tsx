import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabNavigationParamsList } from '../types';
import TopNewsScreen from '../screens/TopNewsScreen';
import SearchNewsScreen from '../screens/SearchNewsScreen';
import TopNewsStackNavigator from './TopNewsStackNavigator';
import SearchNewsStackNavigator from './SearchNewsStackNavigator';
import SearchIcon from '../assets/icons/SearchIcon';
import NewsIcon from '../assets/icons/NewsIcon';

const BottomTab = createBottomTabNavigator<BottomTabNavigationParamsList>();

const BottomTabNavigator = () => {
	return (
		<NavigationContainer>
			<BottomTab.Navigator
				initialRouteName="TopNews"
				screenOptions={{
					// tabBarActiveTintColor: Colors[colorScheme].tint,
					headerShown: false,
				}}
			>
				<BottomTab.Screen
					name="TopNews"
					component={TopNewsStackNavigator}
					options={{
						title: 'Top News',
						tabBarIcon: ({ color }) => <NewsIcon size={32} color={color} />,
					}}
				/>

				<BottomTab.Screen
					name="SearchNews"
					component={SearchNewsStackNavigator}
					options={{
						title: 'Search News',
						tabBarIcon: ({ color }) => <SearchIcon size={32} color={color} />,
					}}
				/>
			</BottomTab.Navigator>
		</NavigationContainer>
	);
};

export default BottomTabNavigator;
