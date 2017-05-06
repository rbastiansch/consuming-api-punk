import React, {Component} from 'react';
import Beers from '../services/Beers';
import BeersList from './BeersList';

class SearchBeer extends Component{
	constructor(props){
		super(props);
		this.state = {
			beers: [],
			listVisible: false,
		}

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		Beers.getBeers().then((response) => {
			this.setState({
				beers: response.data,
				listVisible: !this.state.listVisible,
			});
		})
	}
	render(){
		const showBeerComponent = (this.state.listVisible ? 
			<BeersList 
				beers={this.state.beers}
				{...this.props} /> : null
		);

		return(
			<div>
				<button className="btn btn-primary" onClick={this.handleClick}>Buscar</button>
				{showBeerComponent}
			</div>
		);
	}
}

export default SearchBeer;
