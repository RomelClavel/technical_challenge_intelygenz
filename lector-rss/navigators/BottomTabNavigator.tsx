import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabNavigationParamsList } from '../types';
import TopNewsScreen from '../screens/TopNewsScreen';
import SearchNewsScreen from '../screens/SearchNewsScreen';
import TopNewsStackNavigator from './TopNewsStackNavigator';
import SearchNewsStackNavigator from './SearchNewsStackNavigator';

const BottomTab = createBottomTabNavigator<BottomTabNavigationParamsList>();

const BottomTabNavigator = () => {
	return (
		<NavigationContainer>
			<BottomTab.Navigator
				initialRouteName="TopNews"
				// screenOptions={{
				// 	tabBarActiveTintColor: Colors[colorScheme].tint,
				// }}
			>
				<BottomTab.Screen
					name="TopNews"
					component={TopNewsStackNavigator}
					options={{
						title: 'Top News',
						// tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
					}}
				/>

				<BottomTab.Screen
					name="SearchNews"
					component={SearchNewsStackNavigator}
					options={{
						title: 'Search News',
						// tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
					}}
				/>
			</BottomTab.Navigator>
		</NavigationContainer>
	);
};

export default BottomTabNavigator;
