import {SET_ACTIVE_STATUS, GET_MOVIES, LOAD_MORE_MOVIES, GET_SERIALS, LOAD_MORE_SERIALS, GLOBAL_MULTI_SEARCH} from "../actions";

const initialState = {
    isToggleBurger: false,
    multiSearch: [],
    movies: [],
    serials: [],
};

export default function (state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case SET_ACTIVE_STATUS:
            return {
                ...state,
                isToggleBurger: !state.isToggleBurger
            };
        case GET_MOVIES:
            return {
                ...state, movies: payload.movies
            };
        case LOAD_MORE_MOVIES:
            return {
                ...state, movies: [ ...state.movies, ...payload.movies ]
            };
        case GET_SERIALS:
            return {
                ...state, serials: payload.serials
            };
        case LOAD_MORE_SERIALS:
            return {
                ...state, serials: [ ...state.serials, ...payload.serials ]
            };
        case GLOBAL_MULTI_SEARCH:
            return {
                ...state, multiSearch: payload.content
            };

        default:
            return state
    }
}