import React from "react";
import Header from './page/Header.js';
import Nav from './page/Nav.js';
import Main from './page/Main.js';



const Page = () => {
	// Custom constants
	const refs = {};

	const blocks = [
		{name: 'about', text: 'О компании'},
		{name: 'countries', text: 'Страны'},
		{name: 'news', text: 'Новости'}, 
		{name: 'contacts', text: 'Контакты'}
	];

	// Render
	return (
		<div className="App">
			<Header />

			<Nav blocks={blocks} refs={refs} />

			<Main blocks={blocks} refs={refs} />

			<footer></footer>
		</div>
	);
}



export default Page;