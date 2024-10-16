'use client';
import React, { useState, useEffect } from 'react';
import Verse from './Verse';
import style from '../styles/Submit.module.css';

const qs = (query) => {
	return document.querySelector(query);
};

const Submit = () => {
	const [showComponent, setShowComponent] = useState(false);
	const [componentParams, setComponentParams] = useState({});

	const handle = async () => {
		let index = qs('#book').selectedIndex;
		let book = qs('#book').value;
		let chapter = qs('#chapter').value;
		let verse = qs('#verse').value;
		const resp = await fetch(`https://bolls.life/get-chapter/ESV/${index}/${chapter}/`);
		if (!resp.ok) {
			throw new Error(`Error: ${resp.status}`);
		}
		const res = await resp.json();
		console.log(res);

		setComponentParams({
			verse: res[verse - 1].text,
			title: `${book} ${chapter}:${verse}`
		});
		setShowComponent(true);
	};

	return (
		<div className={style.submit}>
			<button onClick={() => handle()}>Submit</button>
			{showComponent && <Verse {...componentParams} />}
		</div>
	);
};

export default Submit;
