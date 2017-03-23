import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';

class App extends Component {
	constructor(props) {
		super(props);
	}

	clicked(e) {
		e.preventDefault();
		this.props.dispatch(actions.hello());
	}

	render() {
		return (
			<div>
				<h1>TEEHEE</h1>
				<button onClick={this.clicked.bind(this)}>adsf</button>
				<h2>{this.props.message}</h2>
			</div>
		)
	}
}

const mapStateToProps = function(state, props) {
	return {
		message: state.message
	}
}

module.exports = connect(mapStateToProps)(App);
