import React from 'react';
import PageComponent from '../Page';

class ResumePage extends PageComponent {
	render() {
		const titleFormatter = this.titleFormatter.bind(this);

		return (
			<main className='align-middle'>
				<h1>{titleFormatter('my', 'resume')}</h1>
			</main>
		);
	}
}

export default ResumePage;