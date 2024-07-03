import React from 'react';
import Header from './Header';
import './App.css'
import Footer from './footer';
import Main from './Main';
import quotes from './Quote';
function App(){
	return(
		<div>
			<Header/>
			{quotes.map(x => <Main title={x.title} text={x.quote}/>)}
			<Footer/>
		</div>
	)
};
export default App;
