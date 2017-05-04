import React, {Component} from 'react';
import PopupBeer from './PopupBeer';

class BeersList extends Component{
	constructor(props){
		super(props);
		this.state = {
			popupVisible: false,
			beerDetails: [],
		}
		this.handlePopup = this.handlePopup.bind(this);
	}
	handlePopup(beer){
		this.setState({
			popupVisible: !this.state.popupVisible,
			beerDetails: beer,
		})
	}
	render(){
		const popup = (this.state.popupVisible ? <PopupBeer handlePopup={this.handlePopup.bind(this)} parentValue={this.state}/> : null);
		const beers = this.props.beers.map((beer, key) => {
			return(
				<li className="" key={key}>
					<button className="list-group-item" onClick={() => this.handlePopup(beer)} data-toggle="modal">
						{beer.name + ' - '}
						{beer.tagline}
					</button>
				</li>
			)
		})
		
		return(
			<div className="container">
				<ul className="list-group">
					{beers}
				</ul>
					{popup}
			</div>
		)
	}
}

export default BeersList;