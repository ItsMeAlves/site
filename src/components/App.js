import React from 'react';
import Body from './Body';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {
	render() {
		return (
			<div style={{height: '100%'}}>
				<Header />
				<div className='container'
					 style={{height: '100%'}}>
					<Body />
				</div>
				<Footer />
			</div>
		);
	}
}

export default App;