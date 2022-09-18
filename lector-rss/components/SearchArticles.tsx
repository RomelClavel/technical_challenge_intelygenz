import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import SearchIcon from '../assets/icons/SearchIcon';
import { Article } from '../types';

type Props = {
	articleList: Article[];
	setSearchedArticles: React.Dispatch<React.SetStateAction<Article[]>>;
};

const SearchArticles = ({ articleList, setSearchedArticles }: Props) => {
	return (
		<View style={styles.searchSection}>
			<TextInput
				style={styles.input}
				placeholder="Search Articles by title"
				onChangeText={(searchString) => {
					if (searchString === '') {
						setSearchedArticles(articleList);
					} else {
						setSearchedArticles(articleList.filter((art) => art.title.includes(searchString)));
					}
				}}
				underlineColorAndroid="transparent"
			/>
			<View style={styles.searchIcon}>
				<SearchIcon size={26} />
			</View>
		</View>
	);
};

export default SearchArticles;

const styles = StyleSheet.create({
	searchSection: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
		marginHorizontal: 30,
		marginVertical: 10,
		paddingHorizontal: 10,
		borderRadius: 6,
	},
	searchIcon: {
		padding: 10,
	},
	input: {
		flex: 1,
		paddingTop: 10,
		paddingRight: 10,
		paddingBottom: 10,
		backgroundColor: '#fff',
		color: '#424242',
	},
});
