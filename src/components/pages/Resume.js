import React from 'react';
import TitleFormatter from '../TitleFormatter';

class ResumePage extends React.Component {
	render() {
		return (
			<main className='align-middle'>
				<h1>
					<TitleFormatter variable='my'
									content='resume' />
				</h1>
			</main>
		);
	}
}

export default ResumePage;