import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	nominal: 0,
	  	withdraw: []
	  }

	  this.handleSumit = this.handleSumit.bind(this)
	  this.handleChange = this.handleChange.bind(this)
	}

	handleChange(e){
		let target = e.target
		this.setState({
			[target.name]: target.value
		})
	}

	handleSumit(e){
		const { nominal } = this.state
	}

	render() {
		const { withdraw, nominal } = this.state
		return (
			<div className="container">
				<div className="flex">
					<div className="flex-left">
						<center>
							<h3>Enter nominal to Withdraw</h3>
							<div>
								<input 
									type="text" 
									name="nominal" 
									placeholder="Nominal..."
									value={nominal}
									onChange={this.handleChange} />

								<button type="button" onClick={this.handleSumit}>
									Submit
								</button>
							</div>
							<p>* You can withdraw money with nominal: 1000, 2000, 5000, 10.000, 20.000, 50.000, 100.000</p>
						</center>
					</div>
					<div className="flex-right">
						<center>
							<h3>Output of Withdraw</h3>
							<div>
								{
									withdraw.map((money, index) => (
										<div>
											<p>{money}</p>
										</div>
									))
								}
							</div>
						</center>
					</div>					
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('react'))

