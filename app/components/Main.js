import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import Home from './Home';
import SearchBeer from './SearchBeer';

class Main extends Component{
	render(){
		return(
			<div>
				<nav className="nav">
					<Link className="nav-link" activeClassName="active" to="/">Home</Link>
					<Link className="nav-link" activeClassName="active" to="/buscar">Buscar Cerveja</Link>
				</nav>
				{this.props.children}			
			</div>
		);
	}
}

export default Main;