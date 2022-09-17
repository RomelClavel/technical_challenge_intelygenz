import { newApiKey } from '../apiKeys';
import { Article, ArticleResponse } from '../types';

export const getTopArticles = async (): Promise<string | Article[]> => {
	try {
		const result = await fetch(
			`https://newsapi.org/v2/top-headlines?country=us&pageSize=20&apiKey=${newApiKey}`
		);
		const data: ArticleResponse = await result.json();

		console.log(data);
		console.log(data.articles);
		if (data.status === 'ok') {
			return data.articles;
		} else {
			return data.message!;
		}
	} catch (error) {
		console.error(error);
		return error as string;
	}
};
