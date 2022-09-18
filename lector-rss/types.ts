export type TopNewsStackNavigatorParamsList = {
	News: undefined;
	ArticleDetails: undefined;
};

export type Article = {
	title: string;
	description: string;
	url: string;
	urlToImage: string;
	publishedAt: string;
};

export type ArticleResponse = {
	status: string;
	totalResults: number;
	articles: Article[];
	message?: string;
};
