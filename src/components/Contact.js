import React from 'react';

class Contact extends React.Component {
    
    render() {
        const leftStyle = {
            width: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#45ADA8' 
        };

        const rightStyle = {
            width: '50%',
            padding: '5em 10em',
            background: '#EEE'
        };

        const contactStyle = {
            display: 'flex',
            flexFlow: 'line nowrap',
            height: '100vh'
        };

        return (
            <div style={contactStyle}>
                <div style={leftStyle}>
                   <h1>Até logo!</h1>
                </div>
                <div style={rightStyle}>
                    blablabla<br />
                    blablabla<br />
                    blablabla<br />
                    blablabla<br />
                    blablabla<br />
                    blablabla<br />
                    blablabla<br />
                    blablabla<br />
                    blablabla<br />
                    blablabla<br />
                    blablabla<br />
                    blablabla<br />
                    blablabla<br />
                </div>
            </div>
        );
    }
}

export default Contact;
