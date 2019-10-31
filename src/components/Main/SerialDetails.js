import React, {Component} from 'react';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {connect} from "react-redux";
import video404 from "../../assets/img/404_video.png"
import {ShareIcons} from "../ShareIcons";
import ActorsStuff from "../ActorsStuff";

class SerialDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            movie: {},
            cdn: {},
            openWidth: {
                paddingLeft: "240px",
            },
            closedWidth: {
                paddingLeft: "60px",
            },
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);

        const api = '37381515063aba22627eb415da0adfe3';
        axios.get(`https://api.themoviedb.org/3/tv/${this.state.id}?api_key=${api}&language=ru-UA`)

            .then(response => {
                const results = response.data;
                this.setState({movie: results}, () => console.log(this.state.movie));
                document.querySelector(".details-background").style.backgroundImage= `url(https://image.tmdb.org/t/p/w1280${results.backdrop_path})`;
            });

        axios.get(`https://api.themoviedb.org/3/tv/${this.state.id}/external_ids?api_key=${api}&language=en-US`)
            .then(response => {
                const results = response.data;
                console.log(results);

                return axios.get(`https://videocdn.tv/api/tv-series?api_token=QDH5tZqrotr27szq3U9Yx2lEgunhKbuo&direction=desc&field=global&limit=10&ordering=last_media_accepted&imdb_id=${results.imdb_id}`)

                    .then(response => {
                        const results = response.data;
                        this.setState({cdn: results}, () => console.log(this.state.cdn));

                        const iframe = document.querySelector("iframe");
                        iframe.src = results.data[0].iframe_src
                    })
                    .catch(function (error) {
                        const iframe = document.querySelector("iframe");
                        iframe.src = video404;
                        console.log(error);
                    })
            })
    }

    render() {
        return (
            <main style={this.props.isToggleBurger ? this.state.openWidth : this.state.closedWidth}>
                <div className={"details-background"}/>
                <div className={'main-container'}>
                    <h1 className={"details-title pink"}>{this.state.movie.name}</h1>
                    <h4 className={"details-original-title"}>{this.state.movie.original_name}</h4>
                    <div className={"details-container"}>
                        <section className={"details-left-container"}>
                            <img src={`https://image.tmdb.org/t/p/w1280${this.state.movie.poster_path}`} alt="poster"/>
                            <div className={"details-like-container"}>
                                <div className={"like"}>
                                    <FontAwesomeIcon icon={"thumbs-up"} />
                                    Понравилось
                                </div>
                                <div className={"dislike"}>
                                    <FontAwesomeIcon icon={"thumbs-down"} />
                                    Не понравилось
                                </div>
                            </div>
                            <div className={"details-rating-container"}>
                                <h6>Рейтинг:</h6>
                                <div className={"popularity"}>
                                    <FontAwesomeIcon icon={"star"} />
                                    {this.state.movie.popularity}
                                </div>
                                <div className={"vote-average"}>
                                    <FontAwesomeIcon icon={"poll"} />
                                    {this.state.movie.vote_average}
                                </div>
                            </div>
                            <div className={"details-description-container"}>
                                <div className={"details-description-item"}>
                                    <p className={"item-name"}>Год:</p>
                                    <p className={"item-text"}>{this.state.movie.first_air_date}</p>
                                </div>
                                <div className={"details-description-item"}>
                                    <p className={"item-name"}>Страна:</p>
                                    <p className={"item-text"}>США, Великобритания</p>
                                </div>
                                <div className={"details-description-item"}>
                                    <p className={"item-name"}>Жанр:</p>
                                    <p className={"item-text"}>Драма, Военный</p>
                                </div>
                                <div className={"details-description-item"}>
                                    <p className={"item-name"}>Язык:</p>
                                    <p className={"item-text"}>{this.state.movie.original_language}</p>
                                </div>
                                <div className={"details-description-item"}>
                                    <p className={"item-name"}>Качество:</p>
                                    <p className={"item-text"}>HD 720</p>
                                </div>
                                <div className={"details-description-item"}>
                                    <p className={"item-name"}>Время:</p>
                                    <p className={"item-text"}>{this.state.movie.runtime} минуты</p>
                                </div>
                                <div className={"details-description-item"}>
                                    <p className={"item-name"}>Возраст:</p>
                                    <p className={"item-text"}> 16+</p>
                                </div>
                                <div className={"details-description-item"}>
                                    <p className={"item-name"}>Сезонов:</p>
                                    <p className={"item-text"}>{this.state.movie.number_of_seasons}</p>
                                </div>
                                <div className={"details-description-item"}>
                                    <p className={"item-name"}>Серий:</p>
                                    <p className={"item-text"}>{this.state.movie.number_of_episodes}</p>
                                </div>
                                <div className={"details-description-item"}>
                                    <p className={"item-name"}>Статус:</p>
                                    <p className={"item-text"}>{this.state.movie.in_production ? "Продолжается" : "Завершен"}</p>
                                </div>
                            </div>
                        </section>
                        <section className={"details-right-container"}>
                            <iframe title={"movie"} height={485} width={784} allowFullScreen/>
                            <h6>Немного о сериале:</h6>
                            <p>{this.state.movie.overview}</p>
                            <ShareIcons url={this.props.match.url} title={this.state.movie.name}/>
                            {/*<ActorsStuff id={this.props.match.params.id}/>*/}
                        </section>
                    </div>
                </div>
            </main>
        )
    };
}
const mapStateToProps = (state, props) => ({
    isToggleBurger: state.isToggleBurger,
});

export default connect(mapStateToProps, null)(SerialDetails);