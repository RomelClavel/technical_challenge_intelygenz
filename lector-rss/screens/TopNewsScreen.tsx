import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TopNewsStackNavigatorParamsList } from '../types';

type Props = {
	navigation: NativeStackNavigationProp<TopNewsStackNavigatorParamsList, 'News'>;
};

const TopNewsScreen = ({ navigation }: Props) => {
	return (
		<View>
			<Text>TopNewsScreen</Text>
			<Button title="Go To Details" onPress={() => navigation.navigate('ArticleDetails')} />
		</View>
	);
};

export default TopNewsScreen;

const styles = StyleSheet.create({});
