import React from 'react';
import TitleFormatter from '../TitleFormatter';

class HomePage extends React.Component {

	render() {
		return (
			<div className='row text-center'>
				<div className='col'>
					<h1>
						<TitleFormatter variable='name'
										content='Gabriel Alves' />
					</h1>
				</div>
			</div>
		);
	}
}

export default HomePage;        
            