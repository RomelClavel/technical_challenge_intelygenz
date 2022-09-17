import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ArticleDetailsScreen from '../screens/ArticleDetailsScreen';
import TopNewsScreen from '../screens/TopNewsScreen';
import { TopNewsStackNavigatorParamsList } from '../types';

const StackNavigator = createNativeStackNavigator<TopNewsStackNavigatorParamsList>();
const TopNewsStackNavigator = () => {
	return (
		<StackNavigator.Navigator>
			<StackNavigator.Screen
				name="News"
				component={TopNewsScreen}
				options={{ title: 'Top News' }}
			/>
			<StackNavigator.Screen
				name="ArticleDetails"
				component={ArticleDetailsScreen}
				options={{ title: 'Article Details' }}
			/>
		</StackNavigator.Navigator>
	);
};

export default TopNewsStackNavigator;
