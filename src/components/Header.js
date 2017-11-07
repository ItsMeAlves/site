import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
	render() {
		return (
			<header>
				<nav className='navbar sticky-top navbar-expand-lg'>
					<div className='container'>
						<Link to='/' className='navbar-brand'>Link</Link>
						<div>
							<ul className='navbar-nav'>
				    			<li>
				    				<span className='azul'>function </span>
				    				<span className='verde'>navbar</span>() {'{'}
				    			</li>
				    			<li className='nav-item'>
				    				<Link to='/'>Home;</Link>
				    			</li>
				    			<li className='nav-item'>
				    				<Link to='/work'>Work;</Link>
				    			</li>
				    			<li className='nav-item'>
				    				<Link to='/resume'>Resume;</Link>
				    			</li>
				    			<li className='nav-item'>
				    				<Link to='/contact'>Contact;</Link>
				    			</li>
				    			<li className='nav-item'>
				    				{'}'}
				    			</li>
							</ul>
						</div>
					</div>
				</nav>
			</header>
		);
	}
}

export default Header;