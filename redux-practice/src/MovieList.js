import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return{
        movies: state.movies, 
        moviesToWatch: state.moviesToWatch, 
        user: state.user
    }
}
// mapStateToProps, 

export default connect(mapStateToProps, {})(MovieList)