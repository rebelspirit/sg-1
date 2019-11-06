import React from 'react'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {NavLink} from "react-router-dom";
import { useSelector } from 'react-redux'

const LeftSideBar = (props) => {
    const isToggledBurger = useSelector((store) => store.isToggleBurger);

    const menu = {
        navigation: {
            main: {
                home: {
                    name: "Главная",
                    icon: "home",
                    link: "/",
                    sublinks: {}
                },
                trends: {
                    name: "В тренде",
                    icon: "fire",
                    link: "/trends",
                    sublinks: {}
                },

            },
            movies: {
                films: {
                    name: "Фильмы",
                    icon: "film",
                    link: "/films",
                    type: "movies",
                    sublinks: {
                        drama: {
                            name: "Драма",
                            link: "/drama",
                            id: "18"
                        },
                        military: {
                            name: "Военный",
                            link: "/military",
                            id: "10752"
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
                        horrors: {
                            name: "Ужасы",
                            link: "/horrors",
                            id: "27"
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
                        syfy: {
                            name: "Фантастика",
                            link: "/syfy",
                            id: "878"
                        },
                        fight_movie: {
                            name: "Боевик",
                            link: "/thriller",
                            id: "28"
                        },
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
                        fantasy: {
                            name: "Фэнтези",
                            link: "/fantasy",
                            id: "14"
                        },
                    }
                },
                serials: {
                    name: "Сериалы",
                    icon: "pizza-slice",
                    link: "/serials",
                    type: "serials",
                    sublinks: {
                        adventure: {
                            name: "Приключения",
                            id: "10759"
                        },
                        cartoons: {
                            name: "Мультфильм",
                            id: "16"
                        },
                        comedy: {
                            name: "Комедия",
                            id: "35"
                        },
                        crime: {
                            name: "Криминал",
                            id: "80"
                        },
                        documentary: {
                            name: "Документальный",
                            id: "99"
                        },
                        drama: {
                            name: "Драма",
                            id: "18"
                        },
                        family: {
                            name: "Семейный",
                            id: "10751"
                        },
                        childly: {
                            name: "Детский",
                            id: "10762"
                        },
                        detective: {
                            name: "Детектив",
                            id: "9648"
                        },
                        news: {
                            name: "Новости",
                            id: "10763"
                        },
                        tvShow: {
                            name: "Реалити-шоу",
                            id: "10764"
                        },
                        fantasy: {
                            name: "Фэнтези",
                            id: "10765"
                        },
                        opera: {
                            name: "Опера",
                            id: "10766"
                        },
                        war: {
                            name: "Военный",
                            id: "10768"
                        },
                        western: {
                            name: "Вестерн",
                            id: "37"
                        },
                    }
                },
                cartoons: {
                    name: "Мультфильмы",
                    icon: "baby",
                    link: "/cartoons",
                    sublinks: {},
                },
                tvshows: {
                    name: "Печедачи и шоу",
                    icon: "tv",
                    link: "/tvshows",
                    sublinks: {},
                },
                categories: {
                    name: "Категории",
                    icon: "list",
                    link: "/categories",
                    sublinks: {},
                },
            },
            user: {
                library: {
                    name: "Библиотека",
                    icon: "folder",
                    link: "/library",
                    sublinks: {}
                },
                history: {
                    name: "История",
                    icon: "history",
                    link: "/history",
                    sublinks: {}
                },
                watchLater: {
                    name: "Посмотреть позже",
                    icon: "clock",
                    link: "/watchlater",
                    sublinks: {}
                },
                liked: {
                    name: "Понравившиеся",
                    icon: "thumbs-up",
                    link: "/liked",
                    sublinks: {}
                }
            },
            other: {
                settings: {
                    name: "Настройски",
                    icon: "cog",
                    link: "/settings",
                    sublinks: {}
                },
                complaints: {
                    name: "Жалобы",
                    icon: "flag",
                    link: "/complaints",
                    sublinks: {}
                },
                reference: {
                    name: "Справка",
                    icon: "question-circle",
                    link: "/reference",
                    sublinks: {}
                },
                feedback: {
                    name: "Отправить отзыв",
                    icon: "comment-alt",
                    link: "/feedback",
                    sublinks: {}
                }
            }
        },
    };

    const openSublinksMenu = (type) => {

        const sublinks = document.querySelectorAll('.sublinks');

        sublinks.forEach((item) => {
            if(item.getAttribute('content-type') !== type) {
                item.classList.remove('sublinks-item-active');
            }
        });
        sublinks.forEach((item) => {
            if(item.getAttribute('content-type') === type) {
                item.classList.toggle('sublinks-item-active');
            }
        });

    };

    return (
        <aside style={isToggledBurger ? {maxWidth: "240px"} : {maxWidth: "60px"}}>
                {Object.values(menu.navigation).map((menu, key) =>
                    <div key={key} className={'navigation'}>
                        {Object.values(menu).map((item, key) =>
                            <div key={key} className={'item'}>
                                <NavLink to={item.link} className={'itemName'}>
                                    <div className="nav-icon">
                                        <FontAwesomeIcon icon={item.icon} />
                                    </div>
                                    <h5 style={isToggledBurger ? {display: "block"} : {display: "none"}}>{item.name}</h5>
                                    {Object.keys(item.sublinks).length > 0 ?
                                        <FontAwesomeIcon className={"nav-icon nav-icon-right"} icon={"chevron-circle-down"} style={isToggledBurger ? {display: "block"} : {display: "none"}} onClick={() => openSublinksMenu(item.type)}/> : null}
                                </NavLink>
                                {Object.values(item.sublinks).map((sub, key) =>
                                    <div className={"sublinks"} key={key} content-type={item.type}>
                                        <div className="sublinks-item">
                                            {sub.name}
                                        </div>
                                    </div>
                                )}
                            </div>)}
                </div>)}
        </aside>
    )
};
export  default LeftSideBar;