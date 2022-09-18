import { newApiKey } from '../apiKeys';
import { cacheFetchedArticles, getCachedArticles } from '../store/articleStorage';
import { Article, ArticleResponse } from '../types';

export const getTopArticles = async (): Promise<string | Article[]> => {
	try {
		const result = await fetch(
			`https://newsapi.org/v2/top-headlines?country=us&pageSize=20&apiKey=${newApiKey}`
		);
		const data: ArticleResponse = await result.json();

		if (data.status === 'ok') {
			cacheFetchedArticles(data.articles);
			return data.articles;
		} else {
			return data.message!;
		}
	} catch (error) {
		console.error(error);
		const cachedArticles = await getCachedArticles();
		if (typeof cachedArticles === 'string') return cachedArticles;
		return cachedArticles;
	}
};
