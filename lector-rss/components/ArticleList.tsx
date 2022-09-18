import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Article } from '../types';
import ArticleCard from './ArticleCard';

type Props = {
	articles: Article[];
};

const ArticleList = ({ articles }: Props) => {
	return (
		<FlatList
			style={styles.container}
			data={articles}
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
