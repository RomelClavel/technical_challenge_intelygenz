import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Article } from '../types';
import ArticleCard from './ArticleCard';

type Props = {
	articles: Article[];
};

// A component that renders a list of articles passed through props
const ArticleList = ({ articles }: Props) => {
	return (
		<FlatList
			style={styles.container}
			data={articles}
			// We use the url of the article as it will always different (the api doesn't provide an id)
			keyExtractor={(item) => item.url}
			renderItem={({ item }) => <ArticleCard article={item} />}
		/>
	);
};

export default ArticleList;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
