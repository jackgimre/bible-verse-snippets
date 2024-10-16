import React, { useEffect, useState } from 'react';
import style from '../styles/Verse.module.css';

const Verse = (props) => {
	return (
		<div className={style.verse}>
			<h3>{props.title}</h3>
			<label>{props.verse}</label>
		</div>
	);
};

export default Verse;
