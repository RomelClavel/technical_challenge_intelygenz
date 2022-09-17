import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import { Article, TopNewsStackNavigatorParamsList } from '../types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { saveArticleInStorage } from '../helpers/SaveArticle';

type Props = {
	article: Article;
};

const ArticleCard = ({ article }: Props) => {
	const navigation = useNavigation<NativeStackNavigationProp<TopNewsStackNavigatorParamsList>>();
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
});
