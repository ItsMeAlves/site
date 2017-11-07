import React from 'react';
import PageComponent from '../Page';

class ContactPage extends PageComponent {
	render() {
		const titleFormatter = this.titleFormatter.bind(this);

		return (
			<main className='align-middle'>
				<h1>{titleFormatter('my', 'contact')}</h1>
			</main>
		);
	}
}

export default ContactPage;