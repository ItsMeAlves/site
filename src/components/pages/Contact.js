import React from 'react';
import TitleFormatter from '../TitleFormatter';

class ContactPage extends React.Component {
	render() {
		return (
			<main className='align-middle'>
				<h1>
					<TitleFormatter variable='my'
									content='contact' />
				</h1>
			</main>
		);
	}
}

export default ContactPage;