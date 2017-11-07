import React from 'react';
import PageComponent from '../Page';

class WorkPage extends PageComponent {
	render() {
		const titleFormatter = this.titleFormatter.bind(this);

		return (
			<main className='align-middle'>
				<h1>{titleFormatter('my', 'work')}</h1>
			</main>
		);
	}
}

export default WorkPage;