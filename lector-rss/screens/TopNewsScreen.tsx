import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Article, TopNewsStackNavigatorParamsList } from '../types';
import { getTopArticles } from '../services/NewsService';
import ArticleList from '../components/ArticleList';

type Props = {
	navigation: NativeStackNavigationProp<TopNewsStackNavigatorParamsList, 'News'>;
};

const TopNewsScreen = ({ navigation }: Props) => {
	const [articles, setArticles] = useState<Article[]>([
		// {
		// 	title:
		// 		"On Martha's Vineyard, a migrant and a resident are thrown together - The Washington Post",
		// 	description:
		// 		'Earlier this week, two lives intersected after Florida Gov. Ron DeSantis (R) chartered two planes to fly a group of migrants from Texas to this island in Mass.',
		// 	url: 'https://www.washingtonpost.com/nation/2022/09/17/marthas-vineyard-migrant-crisis/',
		// 	urlToImage:
		// 		'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/242FGBBV7II63IGWIFJJTP7L2U.jpg&w=1440',
		// 	publishedAt: '2022-09-17T14:37:21Z',
		// },
		// {
		// 	title:
		// 		"On Martha's Vineyard, a migrant and a resident are thrown together - The Washington Post",
		// 	description:
		// 		'Earlier this week, two lives intersected after Florida Gov. Ron DeSantis (R) chartered two planes to fly a group of migrants from Texas to this island in Mass.',
		// 	url: 'https://www.washingtonpost.com/nation/2022/09/17/marthas-vineyard-migrant-crisis/',
		// 	urlToImage:
		// 		'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/242FGBBV7II63IGWIFJJTP7L2U.jpg&w=1440',
		// 	publishedAt: '2022-09-17T14:37:21Z',
		// },
	]);
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
