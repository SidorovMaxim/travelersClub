import React, {useState, createRef, useEffect} from "react";



const Nav = props => {
	// Init props
	const {blocks, refs} = props;

	// Custom constants
	const listBlocks = blocks.map(item => <li key={item.name} className='nav-button' onClick={goTo.bind(null, item.name)}>{item.text}</li>);

	// Set states
	const [classNavButtons, setClassNavButtons] = useState('nav-buttons');

	// Refs
	const nav = createRef(null);

	// Custom methods
	function goTo(blockName) {
		refs[blockName].current.scrollIntoView({
			block: 'center', 
			behavior: 'smooth'
		});
	}

	function onScroll() {
		if (document.documentElement.scrollTop > nav.current.offsetTop) {
			setClassNavButtons('nav-buttons--scrolled');
		} else {
			setClassNavButtons('nav-buttons');
		}
	}

	// Default methods
	useEffect(() => {
		window.addEventListener('scroll', onScroll);

		return () => {
			window.removeEventListener('scroll', onScroll);
		}
	});

	// Render
	return (
		<nav ref={nav}>
			<ul className={classNavButtons}>{listBlocks}</ul>
		</nav>
	);
}



export default Nav;