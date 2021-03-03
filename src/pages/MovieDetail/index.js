import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

import { Container, CircularProgress, Typography, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import { movieResult as movieResultSelector } from "../../redux/selectors";
import { searchMovieById } from "../../redux/actions/search";


export default ({ match }) => {
    const dispatch = useDispatch();
    const movieResult = useSelector((state) => movieResultSelector(state));

    const history = useHistory();
   
    const goBackHandle = () => {
        history.goBack();
    }
    
    
    useEffect(() => {
        const movieId = match.params.id;
        if (!movieResult || movieResult && movieResult.imdbID !== movieId) {
            dispatch(searchMovieById({ movieId }));
        }
    }, []);

    if(!movieResult){
        return  <CircularProgress size={100} color="primary" />
    }

    return <Container>
        <Typography variant="h2" >{movieResult.Title}</Typography>
        <img src={movieResult.Poster} alt={movieResult.Title} />
        <Typography > <strong>Actors: </strong> {movieResult.Actors}</Typography>
        <Typography > <strong>Director: </strong> {movieResult.Director}</Typography>
        <Typography > <strong>Country: </strong> {movieResult.Country}</Typography>
        <Typography > <strong>Rated: </strong> {movieResult.Rated}</Typography>
        <Typography > <strong>Awards: </strong> {movieResult.Awards}</Typography>
        <Typography > <strong>Plot: </strong> {movieResult.Plot}</Typography>
        <Button color="primary" variant="contained" onClick={goBackHandle} >Back</Button>
    </Container>;
};
