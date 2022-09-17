import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SearchNewsStackNavigatorParamsList } from '../types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type Props = {
	navigation: NativeStackNavigationProp<SearchNewsStackNavigatorParamsList, 'Search'>;
};

const SearchNewsScreen = ({ navigation }: Props) => {
	return (
		<View>
			<Text>SearchNewsScreen</Text>
			<Button title="Go To Details" onPress={() => navigation.navigate('ArticleDetails')} />
		</View>
	);
};

export default SearchNewsScreen;

const styles = StyleSheet.create({});
