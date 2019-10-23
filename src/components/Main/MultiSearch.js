import React, {Component} from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";

class MultiSearch extends Component {
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
                                <FontAwesomeIcon icon={"search"} />
                            </div>
                            Поиск по каталогу..
                        </h2>
                            <div className={'movies'}>
                                {Object.values(this.props.multiSearch).map((content, key) =>
                                    <div key={key} className={'movies-item'}>
                                        <NavLink to={content.media_type === "movie" ? `/films/${content.id}` : `/serials/${content.id}`}>
                                            <img src={`https://image.tmdb.org/t/p/w1280${content.poster_path}`} alt="poster"/>
                                            <h6>{content.title ? content.title : content.name}</h6>
                                        </NavLink>
                                        <p>США, {content.release_date ? content.release_date.slice(0, 4) : content.first_air_date.slice(0, 4)}</p>
                                    </div>
                                )}
                            </div>
                    </div>
                </div>
            </main>
        )};
}

const mapStateToProps = (state, props) => ({
    isToggleBurger: state.isToggleBurger,
    multiSearch: state.multiSearch,
});

export default connect(mapStateToProps)(MultiSearch);