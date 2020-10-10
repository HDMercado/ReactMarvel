import React, { Component } from 'react';
import logo from '../assets/images/logo.png';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header id="header">
                <div className="center">

                    <div id="logo">
                        <Link exact to = "/torneo">
                            <img src={logo} className="app-logo" alt="Logotipo" />
                        </Link> 
                    </div>

                    <nav id="menu">
                        <ul>

                        <li>
                            <NavLink exact to = "/torneo" activeClassName="active">Torneo</NavLink>
                        </li>
                        <li>
                            <NavLink exact to = "/Personajes" activeClassName="active">Personajes</NavLink>
                        </li>
                        </ul>
                    </nav>

                    <div className="clearfix"></div>
                </div>
            </header>
        );
    }
}

export default Header;