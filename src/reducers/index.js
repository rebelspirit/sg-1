import {
    SET_ACTIVE_STATUS,
    GET_MOVIES,
    LOAD_MORE_MOVIES,
    GET_SERIALS,
    LOAD_MORE_SERIALS,
    GLOBAL_MULTI_SEARCH,
    IS_LOADING_MOVIES,
    IS_LOADING_SERIALS,
    GET_POPULAR_MOVIES,
    GET_POPULAR_SERIALS,
    GET_CARTOONS,
    GET_TVSHOWS
} from "../actions";

const initialState = {
    isToggleBurger: false,
    multiSearch: [],
    movies: [],
    serials: [],
    popularMovies: [],
    popularSerials: [],
    cartoons: [],
    tvShows: [],
    isLoadingMovies: false,
    isLoadingSerials: false
};

export default function (state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case SET_ACTIVE_STATUS:
            return {
                ...state,
                isToggleBurger: !state.isToggleBurger
            };
        case IS_LOADING_MOVIES:
            return {
                ...state,
                isLoadingMovies: true
            };
        case GET_MOVIES:
            return {
                ...state, movies: payload.movies, isLoadingMovies: false
            };
        case LOAD_MORE_MOVIES:
            return {
                ...state, movies: [ ...state.movies, ...payload.movies ]
            };
        case IS_LOADING_SERIALS:
            return {
                ...state,
                isLoadingSerials: true
            };
        case GET_SERIALS:
            return {
                ...state, serials: payload.serials, isLoadingSerials: false
            };
        case LOAD_MORE_SERIALS:
            return {
                ...state, serials: [ ...state.serials, ...payload.serials ]
            };
        case GLOBAL_MULTI_SEARCH:
            return {
                ...state, multiSearch: payload.content
            };
        case GET_POPULAR_MOVIES:
            return {
                ...state, popularMovies: payload.popularMovies
            };
        case GET_POPULAR_SERIALS:
            return {
                ...state, popularSerials: payload.popularSerials
            };
        case GET_CARTOONS:
            return {
                ...state, cartoons: payload.cartoons
            };
        case GET_TVSHOWS:
            return {
                ...state, tvShows: payload.tvShows
            };

        default:
            return state
    }
}