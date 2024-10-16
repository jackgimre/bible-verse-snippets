'use client';
import React, { useState } from 'react';
import style from '../styles/Search.module.css';

// List of books of the Bible
const booksOfTheBible = [
	'Genesis',
	'Exodus',
	'Leviticus',
	'Numbers',
	'Deuteronomy',
	'Joshua',
	'Judges',
	'Ruth',
	'1 Samuel',
	'2 Samuel',
	'1 Kings',
	'2 Kings',
	'1 Chronicles',
	'2 Chronicles',
	'Ezra',
	'Nehemiah',
	'Esther',
	'Job',
	'Psalms',
	'Proverbs',
	'Ecclesiastes',
	'Song of Solomon',
	'Isaiah',
	'Jeremiah',
	'Lamentations',
	'Ezekiel',
	'Daniel',
	'Hosea',
	'Joel',
	'Amos',
	'Obadiah',
	'Jonah',
	'Micah',
	'Nahum',
	'Habakkuk',
	'Zephaniah',
	'Haggai',
	'Zechariah',
	'Malachi', // Old Testament
	'Matthew',
	'Mark',
	'Luke',
	'John',
	'Acts',
	'Romans',
	'1 Corinthians',
	'2 Corinthians',
	'Galatians',
	'Ephesians',
	'Philippians',
	'Colossians',
	'1 Thessalonians',
	'2 Thessalonians',
	'1 Timothy',
	'2 Timothy',
	'Titus',
	'Philemon',
	'Hebrews',
	'James',
	'1 Peter',
	'2 Peter',
	'1 John',
	'2 John',
	'3 John',
	'Jude',
	'Revelation' // New Testament
];

const Dropdown = () => {
	const [selectedBook, setSelectedBook] = useState('');
	const [selectedIndex, setSelectedIndex] = useState(-1);

	const handleChange = (event) => {
		setSelectedBook(event.target.value); // You can use this value as needed
	};

	return (
		<div className={style.search}>
			<select id="book" value={selectedBook} key={selectedIndex} onChange={handleChange}>
				<option value="" disabled>
					Select a book
				</option>
				{booksOfTheBible.map((book, index) => (
					<option key={index + 1} value={book}>
						{book}
					</option>
				))}
			</select>
		</div>
	);
};

export default Dropdown;
