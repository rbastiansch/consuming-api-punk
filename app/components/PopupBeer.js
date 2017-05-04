import React, {Component} from 'react';


class PopupBeer extends Component{
	constructor(props){
		super(props);

	}

	render(){
		const {parentValue} = this.props;
		return(
				<div className="modal bd-example-modal-lg">
				  <div className="modal-dialog modal-lg" role="document">
				    <div className="modal-content">
				      <div className="modal-header">
				        <h5 className="modal-title">{parentValue.beerDetails.name}</h5>
				        <button type="button" className="close" onClick={this.props.handlePopup}>
				          <span aria-hidden="true">&times;</span>
				        </button>
				      </div>
				      <div className="modal-body">
				        <p>{parentValue.beerDetails.tagline}</p>
				        <p>{parentValue.beerDetails.description}</p>
				      </div>
				      <div className="modal-body">
				      	<img className="modal-img" src={parentValue.beerDetails.image_url}/>
				      </div>
				      <div className="modal-footer">
				        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.props.handlePopup}>Close</button>
				      </div>
				    </div>
				  </div>
				</div>
		);
	}
}

export default PopupBeer;