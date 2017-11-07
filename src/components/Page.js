import React from 'react';

class PageComponent extends React.Component {
	titleFormatter(variable, content) {
		const capitalize = function(text) {
			const firstChar = text.charAt(0).toUpperCase();
			const constantPart = text.substring(1);
			return firstChar + constantPart;
		}

		const languages = [
			(x, y) => {			//JS
				return (
					<span>
						<span className='azul italico'>var</span>&nbsp;
						{x}&nbsp;
						<span className='rosa'>=</span>&nbsp;
						<span className='amarelo'>{y}</span>;
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
		];

		const syntaxIndex = Math.floor(Math.random() * languages.length);
		const chosenFormat = languages[syntaxIndex];

		return chosenFormat(variable, content);
	}
}

export default PageComponent;