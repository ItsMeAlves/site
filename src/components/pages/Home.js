import React from 'react';
import TitleFormatter from '../TitleFormatter';

class HomePage extends React.Component {

	render() {
		return (
			<main className='center'>
				<h1>
					<TitleFormatter variable='name'
								 	content='Gabriel Alves' />
				</h1>
			</main>
		);
	}
}

export default HomePage;