import { get } from "lodash";
import {
    SEARCH_MOVIE_START,
    SEARCH_MOVIE_ERROR,
    SEARCH_MOVIE_COMPLETE,
} from "../../consts/actionTypes";

const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case SEARCH_MOVIE_START:
            return {...state};
            break;
        case SEARCH_MOVIE_ERROR:
            return {...state};
            break;
        case SEARCH_MOVIE_COMPLETE:
            return {...state};
            break;

        default:
            return {...state};   
    }
}
