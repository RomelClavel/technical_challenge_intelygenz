import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Article, TopNewsStackNavigatorParamsList } from '../types';
import { getTopArticles } from '../services/NewsService';
import ArticleList from '../components/ArticleList';

type Props = {
	navigation: NativeStackNavigationProp<TopNewsStackNavigatorParamsList, 'News'>;
};

const TopNewsScreen = () => {
	const [articles, setArticles] = useState<Article[]>([]);
	useEffect(() => {
		const getArticles = async () => {
			const result = await getTopArticles();
			if (Array.isArray(result)) {
				setArticles(result);
			} else {
				console.error(result);
			}
		};
		getArticles();
	}, []);

	return (
		<View style={styles.container}>
			{articles.length > 0 ? <ArticleList articles={articles} /> : <Text>No Articles Found</Text>}
		</View>
	);
};

export default TopNewsScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
