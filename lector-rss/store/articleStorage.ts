import AsyncStorage from '@react-native-async-storage/async-storage';
import { Article } from '../types';

// Function that stores the detailed article
export const saveArticleInStorage = async (value: Article) => {
	try {
		const stringifiedValue = JSON.stringify(value);
		await AsyncStorage.setItem('detailed-article-key', stringifiedValue);
	} catch (e) {
		// Saving error
		console.log(e);
	}
};

// Function that get the detailed article
export const getSavedArticle = async (): Promise<Article | string> => {
	try {
		const value = await AsyncStorage.getItem('detailed-article-key');
		if (value !== null) {
			// value previously stored
			const article = JSON.parse(value);
			return article;
		}
		return 'No value in Storage';
	} catch (e) {
		console.error(e);
		return e as string;
	}
};

// Function that stores the fetched article array
export const cacheFetchedArticles = async (articles: Article[]) => {
	try {
		const stringifiedValue = JSON.stringify(articles);
		await AsyncStorage.setItem('article-cache-storage', stringifiedValue);
	} catch (e) {
		// saving error
		console.log(e);
	}
};

// Function that gets the cached article array
export const getCachedArticles = async (): Promise<Article[] | string> => {
	try {
		const value = await AsyncStorage.getItem('article-cache-storage');
		if (value !== null) {
			// value previously stored
			const articles = JSON.parse(value);
			return articles;
		}
		return 'No value in Storage';
	} catch (e) {
		console.error(e);
		return e as string;
	}
};
