import React, { Component } from "react";
import { connect } from "react-redux";
import CardMovie from "./../commons/cards/CardMovie";
import {Row, Col} from 'react-bootstrap';
import * as actFavorite from "./../actions/movie/favorite";
import * as jot from "./../jot";

class CViewMoviePopular extends Component {
	constructor(props) {
		super(props);
		
		this.onClickDetail = this.onClickDetail.bind(this)
		this.onClickFavorite = this.onClickFavorite.bind(this)
	}

	onClickDetail() {
		alert("Detail-sin implementar")
	}

	onClickFavorite(movieId, favorite) {
		console.log("onClickFavorite",favorite)
		if (favorite) {
			// Remover de favoritos
			this.props.removeFavorite(movieId)
		} else {
			// Agregar a favoritos
			this.props.addFavorite(movieId)
		}
	}

	render() {
    const {movie, favorite} = {...this.props}
		const favoriteIds = Object.keys(favorite);

		if(jot.isEmpty(movie)) return <div>Cargando...</div> 

		let components = []
		jot.each(movie, (row, i) => {
      components.push(
        <Col key={`col-movie-${i}`}>
          <CardMovie
            title={ row.title }
            overview={ row.overview }
            voteCount={ row.vote_count }
            releaseDate={ row.release_date }
            uriImg={ row.poster_path }
						removeFavorite={favoriteIds.includes(i.toString())}
						onClickDetail={() => this.onClickDetail(row.id)}
						onClickFavorite={() => this.onClickFavorite(row.id, favoriteIds.includes(i.toString()))}
						/>
        </Col>
      )
		})
	
		return (
			<Row>
				{components}
			</Row>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		movie: state.entities.movie,
		favorite: (state.entities.favorite || {})
	}
};

const mapDispatchToProps = (dispatch, ownProps) => ({
	addFavorite(movieId) {
		dispatch(actFavorite.add(movieId))
	},
	removeFavorite(movieId) {
		dispatch(actFavorite.remove(movieId))
	}
});

const ViewMoviePopular = connect(
  mapStateToProps,
  mapDispatchToProps
)(CViewMoviePopular);

export default ViewMoviePopular;