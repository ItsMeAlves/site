import React from 'react';
import PageComponent from '../Page';

class HomePage extends PageComponent {

	render() {
		const titleFormatter = this.titleFormatter.bind(this);

		return (
			<main className='center'>
				<h1>{titleFormatter('name', 'Gabriel Alves')}</h1>
			</main>
		);
	}
}

export default HomePage;