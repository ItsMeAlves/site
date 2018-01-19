import React from 'react';
import Welcome from './Welcome';
import Contact from './Contact';

class App extends React.Component {
	render() {
		const appStyle = {
			display: 'flex',
			flexFlow: 'column nowrap',
			justifyContent: 'center'
		};

		return (
			<div style={appStyle}>
				<Welcome />
				<Contact />
			</div>
		);
	}
}

export default App;
