import React from 'react';
import Submit from './Submit';
import style from '../styles/Search.module.css';
import Dropdown from './Dropdown';

const Search = () => {
	return (
		<div className={style.search}>
			<label for="book">Book</label>
			<Dropdown />
			<label for="chapter">Chapter</label>
			<input id="chapter" placeholder="Chapter number"></input>
			<label for="verse">Verse</label>
			<input id="verse" placeholder="Verse number"></input>
			<Submit />
		</div>
	);
};

export default Search;
