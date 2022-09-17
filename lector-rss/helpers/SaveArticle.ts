import AsyncStorage from '@react-native-async-storage/async-storage';
import { Article } from '../types';

export const saveArticleInStorage = async (value: Article) => {
	try {
		const stringifiedValue = JSON.stringify(value);
		console.log(stringifiedValue);
		await AsyncStorage.setItem('detailed-article-key', stringifiedValue);
	} catch (e) {
		// saving error
		console.log(e);
	}
};
