import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { Article, TopNewsStackNavigatorParamsList } from '../types';
import { saveArticleInStorage } from '../store/articleStorage';

type Props = {
	article: Article;
};

// Renders the Article Card, showing summary info and allowing navigation to the Detailed Article View
const ArticleCard = ({ article }: Props) => {
	// We setup the navigation via the Use Navigation hook
	const navigation = useNavigation<NativeStackNavigationProp<TopNewsStackNavigatorParamsList>>();

	// Function that stores the click article information and navigates to the Article Details View
	const saveArticleAndNavigate = async () => {
		await saveArticleInStorage(article);
		navigation.navigate('ArticleDetails');
	};
	return (
		<Pressable onPress={saveArticleAndNavigate}>
			<View style={styles.cardContainer}>
				<Image source={{ uri: article.urlToImage }} style={styles.cardImage} />
				<Text style={styles.cardTitle}> {article.title} </Text>
				<Text style={styles.cardDescription} numberOfLines={2}>
					{article.description}
				</Text>
				<Text style={styles.dateText}>
					{article.publishedAt?.replace('T', ' ')?.replace('Z', '')}
				</Text>
			</View>
		</Pressable>
	);
};

export default ArticleCard;

const styles = StyleSheet.create({
	cardContainer: {
		backgroundColor: 'white',
		width: '80%',
		alignSelf: 'center',
		borderRadius: 8,
		marginTop: 8,
		padding: 8,
	},
	cardImage: { width: '100%', height: 175, borderRadius: 6 },
	cardTitle: {
		fontWeight: 'bold',
		fontSize: 14,
		marginVertical: 6,
		paddingHorizontal: 4,
		textAlign: 'auto',
	},
	cardDescription: {
		marginBottom: 6,
		paddingHorizontal: 4,
		textAlign: 'justify',
	},
	dateText: {
		alignSelf: 'flex-end',
		color: '#BBBBBB',
	},
});
