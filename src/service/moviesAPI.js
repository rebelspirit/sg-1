import axios from "axios";

const api = '37381515063aba22627eb415da0adfe3';
const language = '&language=ru';
const region = '&region=UA';

export class MoviesApi {
    static getMovies(page = 1, ganre = '') {
        return axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api}${language}${region}&sort_by=popularity.desc&page=${page}&with_genres=${ganre}`)
            .then(response => response.data.results)
    }
    static getSerials(page = 1, ganre = '') {
        return axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${api}${language}${region}&sort_by=popularity.desc&page=${page}&with_genres=${ganre}`)
            .then(response => response.data.results)
    }
    static multiSearch(query) {
        return axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${api}${language}${region}&query=${query}`)
            .then(response => response.data.results)
    }
}