import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Article, TopNewsStackNavigatorParamsList } from '../types';
import { getTopArticles } from '../services/NewsService';
import ArticleList from '../components/ArticleList';
import SearchIcon from '../assets/icons/SearchIcon';

const TopNewsScreen = () => {
	const [articles, setArticles] = useState<Article[]>([]);
	const [searchArticles, setSearchArticles] = useState<Article[]>([]);
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
			<View style={styles.searchSection}>
				<TextInput
					style={styles.input}
					placeholder="Search Articles by title"
					onChangeText={(searchString) => {
						if (searchString === '') {
							setSearchArticles(articles);
						} else {
							setSearchArticles(articles.filter((art) => art.title.includes(searchString)));
						}
					}}
					underlineColorAndroid="transparent"
				/>
				<View style={styles.searchIcon}>
					<SearchIcon size={26} />
				</View>
			</View>
			{articles.length > 0 ? (
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
	searchSection: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
		marginHorizontal: 30,
		marginVertical: 10,
		paddingHorizontal: 10,
		borderRadius: 6,
	},
	searchIcon: {
		padding: 10,
	},
	input: {
		flex: 1,
		paddingTop: 10,
		paddingRight: 10,
		paddingBottom: 10,
		backgroundColor: '#fff',
		color: '#424242',
	},
});
