import { SEARCH_MOVIE_START } from '../../consts/actionTypes';

export const searchMovie = payload => ({
    type: SEARCH_MOVIE_START,
    payload
});