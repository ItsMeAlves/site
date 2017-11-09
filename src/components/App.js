import React from 'react';
import Body from './Body';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<div className='container'>
					<Body />
				</div>
				<Footer />
			</div>
		);
	}
}

export default App;