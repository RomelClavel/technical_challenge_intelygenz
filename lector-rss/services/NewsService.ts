import { newApiKey } from '../apiKeys';
import { cacheFetchedArticles, getCachedArticles } from '../store/articleStorage';
import { Article, ArticleResponse } from '../types';

// Function that fetched, stores and returns top articles from the api
export const getTopArticles = async (): Promise<string | Article[]> => {
	try {
		//First we fetch the results and parse them
		const result = await fetch(
			`https://newsapi.org/v2/top-headlines?country=us&pageSize=20&apiKey=${newApiKey}`
		);
		const data: ArticleResponse = await result.json();

		// if the status of the request is OK then we Cache the results and return the fetched data
		if (data.status === 'ok') {
			cacheFetchedArticles(data.articles);
			return data.articles;
		} else {
			return data.message!;
		}
	} catch (error) {
		// If there is a connection error then we jump to here
		console.error(error);
		// Here we get the cached articles and then (if there is a cache) we return them
		const cachedArticles = await getCachedArticles();
		if (typeof cachedArticles === 'string') return cachedArticles;
		return cachedArticles;
	}
};
