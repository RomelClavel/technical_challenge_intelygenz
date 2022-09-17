import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
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
