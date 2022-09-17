import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ArticleDetailsScreen from '../screens/ArticleDetailsScreen';
import SearchNewsScreen from '../screens/SearchNewsScreen';
import { SearchNewsStackNavigatorParamsList } from '../types';

const StackNavigator = createNativeStackNavigator<SearchNewsStackNavigatorParamsList>();
const SearchNewsStackNavigator = () => {
	return (
		<StackNavigator.Navigator>
			<StackNavigator.Screen name="Search" component={SearchNewsScreen} />
			<StackNavigator.Screen name="ArticleDetails" component={ArticleDetailsScreen} />
		</StackNavigator.Navigator>
	);
};

export default SearchNewsStackNavigator;
