import React from 'react';
import TitleFormatter from '../TitleFormatter';

class WorkPage extends React.Component {
	render() {

		return (
			<main className='align-middle'>
				<h1>
					<TitleFormatter variable='my'
									content='work' />
				</h1>
			</main>
		);
	}
}

export default WorkPage;