import React, {Component} from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InfiniteScroll from 'react-infinite-scroller';
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import Loader from "../Loader";
import {bindActionCreators} from "redux";
import {getMoviesFromApi, loadMoreMovies} from "../../actions";

class Films extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 1,
            isOpenCategory: false,
            currentCategory: "",
            openWidth: {
                paddingLeft: "240px"
            },
            closedWidth: {
                paddingLeft: "60px"
            },
            filmsNavigation: {
                firstColumn: {
                    ukrainian: {
                        name: "Украинский",
                        link: "/ukrainian",
                        id: ""
                    },
                    military: {
                        name: "Военный",
                        link: "/military",
                        id: "10752"
                    },
                    drama: {
                        name: "Драма",
                        link: "/drama",
                        id: "18"
                    },
                    crime: {
                        name: "Криминал",
                        link: "/crime",
                        id: "80"
                    },
                    adventure: {
                        name: "Приключения",
                        link: "/adventure",
                        id: "12"
                    },
                    thriller: {
                        name: "Триллер",
                        link: "/thriller",
                        id: "53"
                    }
                },
                secondColumn: {
                    anime: {
                        name: "Аниме",
                        link: "/anime",
                        id: ""
                    },
                    detective: {
                        name: "Детектив",
                        link: "/detective",
                        id: "9648"
                    },
                    history: {
                        name: "История",
                        link: "/history",
                        id: "36"
                    },
                    melodrama: {
                        name: "Мелодрама",
                        link: "/melodrama",
                        id: "10749"
                    },
                    tvshow: {
                        name: "ТВ-шоу",
                        link: "/tvshow",
                        id: ""
                    },
                    horrors: {
                        name: "Ужасы",
                        link: "/horrors",
                        id: "27"
                    }
                },
                thirdColumn: {
                    biography: {
                        name: "Биография",
                        link: "/biography",
                        id: ""
                    },
                    childly: {
                        name: "Детский",
                        link: "/childly",
                        id: "16"
                    },
                    comedy: {
                        name: "Комедия",
                        link: "/comedy",
                        id: "35"
                    },
                    music: {
                        name: "Музыка",
                        link: "/music",
                        id: "10402"
                    },
                    family: {
                        name: "Семейный",
                        link: "/family",
                        id: "10751"
                    },
                    filmnoir: {
                        name: "Фильм-Нуар",
                        link: "/filmnoir",
                        id: ""
                    }
                },
                fourthColumn: {
                    thriller: {
                        name: "Боевик",
                        link: "/thriller",
                        id: "28"
                    },
                    adults: {
                        name: "Для взрослых",
                        link: "/adults",
                        id: ""
                    },
                    shortfilm: {
                        name: "Короткометражка",
                        link: "/shortfilm",
                        id: ""
                    },
                    musical: {
                        name: "Мюзикл",
                        link: "/musical",
                        id: ""
                    },
                    sport: {
                        name: "Спорт",
                        link: "/sport",
                        id: ""
                    },
                    syfy: {
                        name: "Фантастика",
                        link: "/syfy",
                        id: "878"
                    }
                },
                fivesColumn: {
                    western: {
                        name: "Вестерн",
                        link: "/western",
                        id: "37"
                    },
                    documentary: {
                        name: "Документальный",
                        link: "/documentary",
                        id: "99"
                    },
                    concert: {
                        name: "Концерт",
                        link: "/concert",
                        id: ""
                    },
                    news: {
                        name: "Новости",
                        link: "/news",
                        id: ""
                    },
                    talkshow: {
                        name: "Ток-шоу",
                        link: "/talkshow",
                        id: ""
                    },
                    fantasy: {
                        name: "Фэнтези",
                        link: "/fantasy",
                        id: "14"
                    }
                }
            }
        };
    };

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    setCategory = (id) => {
        this.setState({
            currentCategory: id,
            page: 1,
        }, () => this.props.getMoviesFromApi(1, this.state.currentCategory));
    };

    openCategory = () => {
        this.setState({isOpenCategory: !this.state.isOpenCategory})
    };

    render() {
        return (
            <main style={this.props.isToggleBurger ? this.state.openWidth : this.state.closedWidth}>
                <div className={'main-container'}>
                    <div className={'row'}>
                        <h2 className={'movie-type yellow'} onClick={this.openCategory}>
                            <div className="nav-icon">
                                <FontAwesomeIcon icon={"film"} />
                            </div>
                            Фильмы
                            <div className={this.state.isOpenCategory ? 'arrow-right arrow-right-rotate' : 'arrow-right'}>
                                <FontAwesomeIcon icon={"chevron-down"} />
                            </div>
                        </h2>
                        <div className={this.state.isOpenCategory ? 'category category-open' : 'category'}>
                            {Object.values(this.state.filmsNavigation).map((col, key) =>
                                <div className={"category-container yellow"} key={key}>
                                    {Object.values(col).map((submenu, key) =>
                                        <p key={key} onClick={() => this.setCategory(submenu.id)}>{submenu.name}</p>
                                    )}
                                </div>
                            )}
                        </div>
                        <InfiniteScroll
                            pageStart={this.state.page}
                            loadMore={() => {
                                this.setState((prevState) => {
                                    page: prevState.page++
                                }, () => this.props.loadMoreMovies(this.state.page, this.state.currentCategory))
                            }}
                            hasMore={true}
                            loader={<Loader key={0}/>}
                            useWindow={true}
                            threshold={500}
                        >
                        <div className={'movies'}>
                                {Object.values(this.props.movies).map((movie, key) =>
                                    <div key={key} className={'movies-item'}>
                                        <NavLink to={`/films/${movie.id}`}>
                                            <img src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`} alt="poster"/>
                                            <h6>{movie.title}</h6>
                                        </NavLink>
                                        <p>США, {movie.release_date.slice(0, 4)}</p>
                                    </div>
                                )}
                        </div>
                        </InfiniteScroll>
                    </div>
                </div>
            </main>
        )};
}

const mapStateToProps = (state, props) => ({
    isToggleBurger: state.isToggleBurger,
    movies: state.movies,
});

const mapDispatchToProps = (dispatch) => ({
    getMoviesFromApi: bindActionCreators(getMoviesFromApi, dispatch),
    loadMoreMovies: bindActionCreators(loadMoreMovies, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(Films);