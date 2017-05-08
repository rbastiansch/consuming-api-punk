import React, {Component} from 'react';

class Home extends Component{
	constructor(props){
		super(props);

	}

	render(){
		return(
			<div>
				<div className="card">
					<div className="card-block">
						<p>E ssa é uma aplicação em React consumindo uma API chamada punk, clicando no botão Buscar na aba Buscar Cerveja, listará as cervejas da API.</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;