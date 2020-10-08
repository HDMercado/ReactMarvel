import React, { Component } from 'react';
import logo from '../assets/images/logo.png';


class Header extends Component {
    render() {
        return (
            <header id="header">
                <div className="center">

                    <div id="logo">
                        <img src={logo} className="app-logo" alt="Logotipo" />
                    </div>

                    <nav id="menu">
                        <ul>
                            <li>
                                <a href="#">Torneo</a>
                            </li>
                            <li>
                                <a href="#">Heroes</a>
                            </li>
                            <li>
                                <a href="#">Comics</a>
                            </li>
                            <li>
                                <a href="#">Series</a>
                            </li>
                            <li>
                                <a href="*">Eventos</a>
                            </li>
                            {/*
                                            <li>
                          <NavLink exact to = "/" activeClassName="active">Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink exact to = "/torneo" activeClassName="active">Torneo</NavLink>
                        </li>
                        <li>
                            <NavLink exact to = "/heroes" activeClassName="active">Heroes</NavLink>
                        </li>
                        <li>
                            <NavLink exact to = "/comics" activeClassName="active">Comics</NavLink>
                        </li>
                        <li>
                            <NavLink exact to = "/series" activeClassName="active">Series</NavLink>
                        </li>
                        <li>
                            <NavLink exact to = "/eventos" activeClassName="active">Eventos</NavLink>
                        </li>  
                    */}

                        </ul>
                    </nav>

                    <div className="clearfix"></div>
                </div>
            </header>
        );
    }
}

export default Header;