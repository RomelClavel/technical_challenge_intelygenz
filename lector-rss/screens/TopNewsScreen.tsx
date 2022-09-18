import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Article, TopNewsStackNavigatorParamsList } from '../types';
import { getTopArticles } from '../services/NewsService';
import ArticleList from '../components/ArticleList';
import SearchIcon from '../assets/icons/SearchIcon';
import SearchArticles from '../components/SearchArticles';

const TopNewsScreen = () => {
	const [articles, setArticles] = useState<Article[]>([]);
	const [searchArticles, setSearchArticles] = useState<Article[]>([]);
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
