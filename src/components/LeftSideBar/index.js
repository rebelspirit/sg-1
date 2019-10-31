import React, {Component} from 'react'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

class LeftSideBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navigation: {
                main: {
                    home: {
                        name: "Главная",
                        icon: "home",
                        link: "/",
                        sublinks: {
                            ukrainian: {
                                name: "Украинский",
                            },
                            military: {
                                name: "Военный",
                            }
                        }
                    },
                    trends: {
                        name: "В тренде",
                        icon: "fire",
                        link: "/trends",
                        sublinks: {
                            ukrainian: {
                                name: "Украинский",
                            },
                            military: {
                                name: "Военный",
                            }
                        }
                    },

                },
                movies: {
                    films: {
                        name: "Фильмы",
                        icon: "film",
                        link: "/films",
                        sublinks: {
                            ukrainian: {
                                name: "Украинский",
                            },
                            military: {
                                name: "Военный",
                            }
                        }
                    },
                    serials: {
                        name: "Сериалы",
                        icon: "pizza-slice",
                        link: "/serials",
                        sublinks: {
                            ukrainian: {
                                name: "Украинский",
                            },
                            military: {
                                name: "Военный",
                            }
                        }
                    },
                    cartoons: {
                        name: "Мультфильмы",
                        icon: "baby",
                        link: "/cartoons",
                        sublinks: {
                            ukrainian: {
                                name: "Украинский",
                            },
                            military: {
                                name: "Военный",
                            }
                        }
                    },
                    tvshows: {
                        name: "Печедачи и шоу",
                        icon: "tv",
                        link: "/tvshows",
                        sublinks: {
                            ukrainian: {
                                name: "Украинский",
                            },
                            military: {
                                name: "Военный",
                            }
                        }
                    },
                    categories: {
                        name: "Категории",
                        icon: "list",
                        link: "/categories",
                        sublinks: {
                            ukrainian: {
                                name: "Украинский",
                            },
                            military: {
                                name: "Военный",
                            }
                        }
                    },
                },
                user: {
                    library: {
                        name: "Библиотека",
                        icon: "folder",
                        link: "/library",
                        sublinks: {
                            ukrainian: {
                                name: "Украинский",
                            },
                            military: {
                                name: "Военный",
                            }
                        }
                    },
                    history: {
                        name: "История",
                        icon: "history",
                        link: "/history",
                        sublinks: {
                            ukrainian: {
                                name: "Украинский",
                            },
                            military: {
                                name: "Военный",
                            }
                        }
                    },
                    watchLater: {
                        name: "Посмотреть позже",
                        icon: "clock",
                        link: "/watchlater",
                        sublinks: {
                            ukrainian: {
                                name: "Украинский",
                            },
                            military: {
                                name: "Военный",
                            }
                        }
                    },
                    liked: {
                        name: "Понравившиеся",
                        icon: "thumbs-up",
                        link: "/liked",
                        sublinks: {
                            ukrainian: {
                                name: "Украинский",
                            },
                            military: {
                                name: "Военный",
                            }
                        }
                    }
                },
                other: {
                    settings: {
                        name: "Настройски",
                        icon: "cog",
                        link: "/settings",
                        sublinks: {
                            ukrainian: {
                                name: "Украинский",
                            },
                            military: {
                                name: "Военный",
                            }
                        }
                    },
                    complaints: {
                        name: "Жалобы",
                        icon: "flag",
                        link: "/complaints",
                        sublinks: {
                            ukrainian: {
                                name: "Украинский",
                            },
                            military: {
                                name: "Военный",
                            }
                        }
                    },
                    reference: {
                        name: "Справка",
                        icon: "question-circle",
                        link: "/reference",
                        sublinks: {
                            ukrainian: {
                                name: "Украинский",
                            },
                            military: {
                                name: "Военный",
                            }
                        }
                    },
                    feedback: {
                        name: "Отправить отзыв",
                        icon: "comment-alt",
                        link: "/feedback",
                        sublinks: {
                            ukrainian: {
                                name: "Украинский",
                            },
                            military: {
                                name: "Военный",
                            }
                        }
                    }
                }
            },
            openWidth: {
                maxWidth: "240px"
            },
            closedWidth: {
                maxWidth: "60px"
            },
            titleOpenStyle: {
                display: "block"
            },
            titleCloseStyle: {
                display: "none"
            }
        };
    }

    render() {
        return (
            <aside style={this.props.isToggleBurger ? this.state.openWidth : this.state.closedWidth}>
                {Object.values(this.state.navigation).map((menu, key) =>
                    <div key={key} className={'navigation'}>
                        {Object.values(menu).map((item, key) =>
                            <div key={key} className={'item'}>
                                <NavLink to={item.link} className={'itemName'}>
                                    <div className="nav-icon">
                                        <FontAwesomeIcon icon={item.icon} />
                                    </div>
                                    <h5 style={this.props.isToggleBurger ? this.state.titleOpenStyle : this.state.titleCloseStyle}>{item.name}</h5>
                                </NavLink>
                            </div>)}
                    </div>)}
            </aside>
        )
    }
}
const mapStateToProps = (state, props) => ({
    isToggleBurger: state.isToggleBurger
});
export default connect(mapStateToProps)(LeftSideBar);