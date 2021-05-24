import React, {useState, createRef, useEffect} from "react";



const ContactsShort = () => {
	// Set states
	const [classContacts, setClassContacts] = useState('contacts-short');

	// Refs
	const contactsShort = createRef(null);

	// Custom methods
	function onScroll() {
		if (document.documentElement.scrollTop > contactsShort.current.offsetTop) {
			setClassContacts('contacts-short--scrolled');

		} else {
			setClassContacts('contacts-short');
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
		<div className={classContacts} ref={contactsShort}>
			+7 (908) 152 38 81
		</div>
	);
}



export default ContactsShort;