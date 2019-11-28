import {MoviesApi} from "../service/moviesAPI";

export const CHANGE_ACTIVE_STATUS = 'CHANGE_ACTIVE_STATUS';
export const changeActiveStatus = () => ({ type:  CHANGE_ACTIVE_STATUS });

export const CLOSE_BURGER = 'CLOSE_BURGER';
export const closeBurger = () => ({ type:  CLOSE_BURGER });

export const CLEAR_STORE_CONTENT_DETAILS = 'CLEAR_STORE_CONTENT_DETAILS';
export const clearStoreContentDetails = () => ({ type:  CLEAR_STORE_CONTENT_DETAILS });

export const IS_LOADING_MOVIES = "IS_LOADING_MOVIES";
export const GET_MOVIES = 'GET_MOVIES';
export function getMoviesFromApi(page, category) {
    return function (dispatch) {
        dispatch({type: IS_LOADING_MOVIES});
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

export const IS_LOADING_SERIALS = "IS_LOADING_SERIALS";
export const GET_SERIALS = 'GET_SERIALS';
export function getSerialsFromApi(page, category) {
    return function (dispatch) {
        dispatch({type: IS_LOADING_SERIALS});
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

export const GLOBAL_MULTI_SEARCH = 'GLOBAL_MULTI_SEARCH';
export function findDataByMultiSearch(query) {
    return function (dispatch) {
        MoviesApi.multiSearch(query)
            .then(content =>
                dispatch({
                    type: GLOBAL_MULTI_SEARCH,
                    payload: { content }
                })
            )
    }
}

export const GET_POPULAR_MOVIES = 'GET_POPULAR_MOVIES';
export function getPopularMovies() {
    return function (dispatch) {
        MoviesApi.getPopularMovies()
            .then(popularMovies =>
                dispatch({
                    type: GET_POPULAR_MOVIES,
                    payload: { popularMovies }
                })
            )
    }
}

export const GET_POPULAR_SERIALS = 'GET_POPULAR_SERIALS';
export function getPopularSerials() {
    return function (dispatch) {
        MoviesApi.getPopularSerials()
            .then(popularSerials =>
                dispatch({
                    type: GET_POPULAR_SERIALS,
                    payload: { popularSerials }
                })
            )
    }
}

export const GET_CARTOONS = 'GET_CARTOONS';
export function getCartoons() {
    return function (dispatch) {
        MoviesApi.getCartoons()
            .then(cartoons =>
                dispatch({
                    type: GET_CARTOONS,
                    payload: { cartoons }
                })
            )
    }
}

export const GET_TVSHOWS = 'GET_TVSHOWS';
export function getTvShows() {
    return function (dispatch) {
        MoviesApi.getTvShows()
            .then(tvShows =>
                dispatch({
                    type: GET_TVSHOWS,
                    payload: { tvShows }
                })
            )
    }
}

export const GET_CONTENT_DETAILS = 'GET_CONTENT_DETAILS';
export function getContentDetails(type, id) {
    return function (dispatch) {
        MoviesApi.getContentDetails(type, id)
            .then(details =>
                dispatch({
                    type: GET_CONTENT_DETAILS,
                    payload: { details }
                })
            )
    }
}

export const GET_RELATED_CONTENT = 'GET_RELATED_CONTENT';
export function getRelaitedContent(type, id) {
    return function (dispatch) {
        MoviesApi.getRelaitedContent(type, id)
            .then(relatedContent =>
                dispatch({
                    type: GET_RELATED_CONTENT,
                    payload: { relatedContent }
                })
            )
    }
}

export const GET_ACTORS_STUFF = 'GET_ACTORS_STUFF';
export function getActorsStuff(type, id) {
    return function (dispatch) {
        MoviesApi.getActorsStuff(type, id)
            .then(actorsStuff =>
                dispatch({
                    type: GET_ACTORS_STUFF,
                    payload: { actorsStuff }
                })
            )
    }
}

export const GET_TRENDS_MOVIES = 'GET_TRENDS_MOVIES';
export function getTrendsMovies(type, id) {
    return function (dispatch) {
        MoviesApi.getTrendsMovies(type, id)
            .then(trendsMovies =>
                dispatch({
                    type: GET_TRENDS_MOVIES,
                    payload: { trendsMovies }
                })
            )
    }
}

export const GET_TRENDS_SERIALS = 'GET_TRENDS_SERIALS';
export function getTrendsSerials(type, id) {
    return function (dispatch) {
        MoviesApi.getTrendsSerials(type, id)
            .then(trendsSerials =>
                dispatch({
                    type: GET_TRENDS_SERIALS,
                    payload: { trendsSerials }
                })
            )
    }
}
