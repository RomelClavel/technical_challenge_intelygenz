import AsyncStorage from '@react-native-async-storage/async-storage';
import { Article } from '../types';

export const saveArticleInStorage = async (value: Article) => {
	try {
		const stringifiedValue = JSON.stringify(value);
		await AsyncStorage.setItem('detailed-article-key', stringifiedValue);
	} catch (e) {
		// saving error
		console.log(e);
	}
};

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

export const cacheFetchedArticles = async (articles: Article[]) => {
	try {
		const stringifiedValue = JSON.stringify(articles);
		await AsyncStorage.setItem('article-cache-storage', stringifiedValue);
	} catch (e) {
		// saving error
		console.log(e);
	}
};

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
