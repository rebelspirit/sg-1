import React, {Component} from 'react';
import './index.css';
import Burger from  './Burger';
import Logo from  './Logo';
import Search from  './Search';
import MoviePosition from './MoviePosition';
import Notifications from './Notifications';
import SignIn from './SignIn';

class Header extends Component {

    render() {
        return (
            <header className={'header'}>
                <div className={'navigation-container'}>
                    <Burger/>
                    <Logo/>
                </div>
                <Search/>
                <div className={'navigation-container'}>
                    <MoviePosition/>
                    <Notifications/>
                    <SignIn/>
                </div>
            </header>
        );
    };
};

export default Header;