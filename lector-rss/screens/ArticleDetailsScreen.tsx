import { Image, Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Article } from '../types';
import LinkIcon from '../assets/icons/LinkIcon';

const ArticleDetailsScreen = () => {
	const [detailedArticle, setDetailedArticle] = useState<Article>();
	const goToURL = () => {
		try {
			Linking.openURL(detailedArticle?.url!);
		} catch (error) {
			console.error(error);
		}
	};
	useEffect(() => {
		const getDetailedArticle = async () => {
			try {
				const value = await AsyncStorage.getItem('detailed-article-key');
				if (value !== null) {
					// value previously stored
					const article = JSON.parse(value);
					setDetailedArticle(article);
				}
			} catch (e) {
				console.error(e);
			}
		};
		getDetailedArticle();
	}, []);

	return (
		<View style={styles.container}>
			<Text style={styles.articleTitle}>{detailedArticle?.title}</Text>
			<Image style={styles.articleImg} source={{ uri: detailedArticle?.urlToImage }} />
			<Text style={styles.articleDescription}>{detailedArticle?.description}</Text>
			<Pressable style={styles.pressable} onPress={goToURL}>
				<Text style={styles.pressableText}>Check Out In Browser</Text>
				<LinkIcon color="white" size={30} />
			</Pressable>
		</View>
	);
};

export default ArticleDetailsScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 30,
	},
	articleTitle: {
		fontWeight: 'bold',
		fontSize: 18,
		marginTop: 16,
	},
	articleImg: {
		width: '100%',
		height: 260,
		borderRadius: 8,
		marginVertical: 16,
	},
	articleDescription: {
		fontWeight: '500',
		fontSize: 16,
		textAlign: 'justify',
		marginBottom: 16,
	},
	pressable: {
		backgroundColor: '#406BC9',
		alignSelf: 'center',
		paddingHorizontal: 18,
		paddingVertical: 12,
		borderRadius: 8,
		marginTop: 32,
		flexDirection: 'row',
		alignItems: 'center',
	},
	pressableText: {
		color: 'white',
		fontSize: 17,
		margin: 4,
	},
});
