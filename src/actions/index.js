import {MoviesApi} from "../service/moviesAPI";

export const SET_ACTIVE_STATUS = 'SET_ACTIVE_STATUS';
export const setActiveStatus = () => ({ type: SET_ACTIVE_STATUS });

export const GET_MOVIES = 'GET_MOVIES';
export function getMoviesFromApi(page, category) {
    return function (dispatch) {
        MoviesApi.getMovies(page, category)
            .then(movies =>
                dispatch({
                    type: GET_MOVIES,
                    payload: { movies }
                })
            )
    }
}

export const LOAD_MORE_MOVIES = 'LOAD_MORE_MOVIES';
export function loadMoreMovies(page, category) {
    return function (dispatch) {
        MoviesApi.getMovies(page, category)
            .then(movies =>
                dispatch({
                    type: LOAD_MORE_MOVIES,
                    payload: { movies }
                })
            )
    }
}

export const GET_SERIALS = 'GET_SERIALS';
export function getSerialsFromApi(page, category) {
    return function (dispatch) {
        MoviesApi.getSerials(page, category)
            .then(serials =>
                dispatch({
                    type: GET_SERIALS,
                    payload: { serials }
                })
            )
    }
}

export const LOAD_MORE_SERIALS = 'LOAD_MORE_SERIALS';
export function loadMoreSerials(page, category) {
    return function (dispatch) {
        MoviesApi.getSerials(page, category)
            .then(serials =>
                dispatch({
                    type: LOAD_MORE_SERIALS,
                    payload: { serials }
                })
            )
    }
}
