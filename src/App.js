import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';


//Components
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Graph from './components/graph'

function App() {
	return (
		<div className="App">
            <Navbar/>
            <Switch>
                <Route path="/corona.info" exact>
                    <Home/>
                </Route>
                <Route path="/corona.info/graph">
                    <Graph/>
                </Route>
            </Switch>
            <footer className="footer">
                <p className="footer__text">Created by <a className="footer__link" href="https://github.com/bonniesimon" target="_blank">Bonnie Simon</a>. <a className="footer__link" href="https://github.com/bonniesimon/corona.info" target="_blank">Repo</a> </p>
            </footer>
		</div>
	);
}



export default App;
