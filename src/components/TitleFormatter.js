import React from 'react';
import Typist from 'react-typist';

class TitleFormatter extends React.Component {
	constructor(props) {
		super(props);

		const capitalize = function(text) {
			const firstChar = text.charAt(0).toUpperCase();
			const constantPart = text.substring(1);
			return firstChar + constantPart;
		};

		this.state = {
			languages: [
				(x, y) => {			//JS
					return (
						<span>
							<span className='azul italico'>let</span>&nbsp;
							{x}&nbsp;
							<span className='rosa'>=</span>&nbsp;
							<span className='amarelo'>'{y}'</span>;
						</span>
					);
				},
				(x, y) => {			// Clojure
					return (
						<span>
							(<span className='azul italico'>def</span>&nbsp;
							<span className='azul'>{x}</span>&nbsp;
							<span className='amarelo'>"{y}"</span>)
						</span>
					);
				},
				(x, y) => {			// Erlang
					return (
						<span>
							{capitalize(x)}&nbsp;
							<span className='rosa'>=</span>
							<span className='amarelo'>&nbsp;"{y}"</span>.
						</span>
					);
				},
				(x, y) => {			// PHP
					return (
						<span>
							${x}&nbsp;
							<span className='rosa'>=</span>&nbsp;
							<span className='amarelo'>"{y}"</span>;
						</span>
					);
				},
				(x, y) => {			// C
					return (
						<span>
							<span className='azul italico'>char</span>&nbsp;
							{x}[]&nbsp;
							=&nbsp;
							<span className='amarelo'>"{y}"</span>;
						</span>
					);
				},
				(x, y) => {			// Scala
					return (
						<span>
							<span className='rosa italico'>val</span>&nbsp;
							{x}:<span className='verde italico'>String</span>&nbsp;
							=&nbsp;
							<span className='amarelo'>"{y}"</span>
						</span>
					);
				},
				(x, y) => {			// Java
					return (
						<span>
							<span className='azul italico'>String</span>&nbsp;
							{x}&nbsp;
							<span className='rosa'>=</span>&nbsp;
							<span className='amarelo'>"{y}"</span>;
						</span>
					);
				}
			]
		}
	}

	render() {
		const languages = this.state.languages;
		const randomSeed = Math.random() * languages.length;
		const syntaxIndex = Math.floor(randomSeed);
		const chosenFormat = languages[syntaxIndex];

		const variable = this.props.variable;
		const content = this.props.content;
		const subtitle = this.props.subtitle;

		return (
			<Typist startDelay={500}>
				{chosenFormat(variable, content)}
			</Typist>
		);
	}
}

export default TitleFormatter;