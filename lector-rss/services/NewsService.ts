import { newApiKey } from '../apiKeys';
import { ArticleResponse } from '../types';

export const getTopArticles = async () => {
	const result = await fetch(
		`https://newsapi.org/v2/top-headlines?country=us&pageSize=20&apiKey=${newApiKey}`
	);
	const data: ArticleResponse = await result.json();
	console.log(data);
	console.log(data.articles);
};
