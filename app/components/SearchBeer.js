import React, {Component} from 'react';
import Beers from '../services/Beers';

class SearchBeer extends Component{
	constructor(props){
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		Beers.getBeers().then((response) => {
			this.props.updateBeers(response.data);
		})
	}
	render(){
		return(
			<div>
				<button className="btn btn-primary" onClick={this.handleClick}>Search</button>
			</div>
		);
	}
}

export default SearchBeer;