import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Article } from '../types';
import { getTopArticles } from '../services/NewsService';
import ArticleList from '../components/ArticleList';
import SearchArticles from '../components/SearchArticles';

const TopNewsScreen = () => {
	// State to store the response to the get articles service
	const [articles, setArticles] = useState<Article[]>([]);
	// State to manage the filtering and rendering of the articles
	const [searchArticles, setSearchArticles] = useState<Article[]>([]);

	// Effect that gets the articles via the service and sets the state
	useEffect(() => {
		const getArticles = async () => {
			const result = await getTopArticles();
			if (Array.isArray(result)) {
				setArticles(result);
				setSearchArticles(result);
			} else {
				console.error(result);
			}
		};
		getArticles();
	}, []);

	return (
		<View style={styles.container}>
			<SearchArticles articleList={articles} setSearchedArticles={setSearchArticles} />
			{searchArticles.length > 0 ? (
				<ArticleList articles={searchArticles} />
			) : (
				<Text>No Articles Found</Text>
			)}
		</View>
	);
};

export default TopNewsScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
