import React, { Component } from "react";
import { connect } from "react-redux";

import { Container, ButtonGroup, Button } from 'react-bootstrap';
import ViewMoviePopular from "./ViewMoviePopular";
import ViewFavorite from "./ViewFavorite";
import * as actMovie from "./../actions/movie/movie";
import load from "./../actions/load";

class CApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			view: "home"
		};

		this.onClickView = this.onClickView.bind(this);
	}

	componentWillMount() {
		this.props.initData();
	}

	onClickView(view) {
		this.setState({view});
	}

	render() {
		const view = this.state.view
		
		let component = <ViewMoviePopular/>
		if (view === "favorite") {
			component = <ViewFavorite/>
		}

		return (
			<Container>
				<div className="d-flex flex-column">
					<ButtonGroup size="lg">
						<Button
							active={view === "home"} 
							onClick={() => this.onClickView("home")}>
							Home
						</Button>
						<Button 
							active={view === "favorite"} 
							onClick={() => this.onClickView("favorite")}>
							Favorites
						</Button>
					</ButtonGroup>
				</div>
				<Container>
					{ component }
				</Container>
			</Container>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
	}
};

const mapDispatchToProps = (dispatch, ownProps) => ({
	initData() {
		dispatch(actMovie.getPopular())
		dispatch(load())
	}
});

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(CApp);

export default App;