import React from 'react';
import HomePage from './pages/Home';
import WorkPage from './pages/Work';
import ResumePage from './pages/Resume';
import ContactPage from './pages/Contact';
import { Switch, Route } from 'react-router-dom';

class Body extends React.Component {
	render() {
		return (
			<main>
				<Switch>
					<Route exact path='/' component={HomePage}/>
					<Route exact path='/work' component={WorkPage}/>
					<Route exact path='/resume' component={ResumePage}/>
					<Route exact path='/contact' component={ContactPage}/>
				</Switch>
			</main>
		);
	}
}

export default Body;