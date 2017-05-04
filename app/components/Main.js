import React, {Component} from 'react';
import SearchBeer from './SearchBeer';
import BeersList from './BeersList';
import Beers from '../services/Beers';

class Main extends Component{
	constructor(props){
		super(props);
		this.state = {
			beers: [],
			listVisible: false,
		}
		this.updateBeers = this.updateBeers.bind(this);

	}
	updateBeers(beers){
		this.setState({
			beers: beers,
			listVisible: !this.state.listVisible,
		});
	}

	render(){
		const showBeerComponent = (this.state.listVisible ? 
			<BeersList 
				beers={this.state.beers}
				{...this.props}
			/> : null);
		return(
				<div>
					<div className="card">
						<div className="card-block">
							<h1 className="card-title">Consumindo Punk API</h1>
							<SearchBeer 
								updateBeers={this.updateBeers}
							/>
						</div>
					</div>
					{showBeerComponent}
				</div>
		);
	}
}

export default Main;