import React from 'react';
// import { Switch, Route, Link } from 'react-router-dom';
import './App.css';


//Components
import Home from './components/home/Home';

function App() {
	return (
		<div className="App">
			<Home/>
            <footer className="footer">
                <p className="footer__text">Created by <a className="footer__link" href="github.com/bonniesimon">Bonnie Simon</a>. <a className="footer__link" href="github.com/bonniesimon/corona.info">Repo</a> </p>
            </footer>
		</div>
	);
}



export default App;
