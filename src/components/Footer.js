import React from 'react';

class Footer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			icons: [
				{
					location: 'https://github.com/ItsMeAlves',
					icon: 'static/img/github.png'
				},
				{
					location: 'https://medium.com/@itsmealves',
					icon: 'static/img/medium.png'
				}
			]
		};
	}

	render() {
		const socialIcons = this.state.icons;
		const footerStyle = {
			position: 'fixed',
			bottom: 0,
			left: 0,
			right: 0,
			backgroundColor: '#272822',
			zIndex: '100',
			padding: 0
		};

		const iconStyle = {
			paddingLeft: '1em',
			maxHeight: '40px'
		};

		const itemStyle = {
			display: 'inline-block'
		};

		const listStyle = {
			float: 'right'
		};

		return (
			<footer style={footerStyle}
					className='container'>
		    	&copy; Gabriel Alves
	    		<ul style={listStyle}>
	    			{socialIcons.map((iconData, id) => {
	    				return (
	    					<li key={id} style={itemStyle}>
		    					<a target='_blank' href={iconData.location}>
									<img style={iconStyle}
										 src={iconData.icon} />
								</a>
							</li>	
	    				);	
	    			})}
				</ul>
			</footer>
		);
	}
}

export default Footer;