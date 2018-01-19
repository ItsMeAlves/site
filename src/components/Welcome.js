import React from 'react';
import Snap from 'snapsvg-cjs';

class Welcome extends React.Component {
    renderWelcomeAnimation() {
        const s = Snap("#welcome-svg");

        var text = s.text(0, 100, "It's me, Alves!");
        text.attr({
            fill: '#EEE',
            fontSize: 100,
            fontFamily: 'Merriweather'
        });

    }

    componentDidMount() {
        this.renderWelcomeAnimation();
    }
    componentDidUpdate() {
        this.renderWelcomeAnimation();
    }

    render() {
        const svgStyle = {
            width: '100%',
            height: '50%',
            verticalAlign: 'middle'
        };

        const welcomeStyle = {
            width: '100%',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#594f4f'
        };

        return (
            <div style={welcomeStyle}>
                <svg style={svgStyle} id="welcome-svg" version="1.1" xmlns="http://www.w3.org/2000/svg"></svg>
            </div>
        );
    }
}




export default Welcome;
