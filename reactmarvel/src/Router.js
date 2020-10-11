import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Error from './components/Error.js';
import PagPersonajes from './components/PagPersonajes';
import Personaje from './components/Personaje';
import Torneo from './components/Torneo';

class Router extends Component {
    render() {
        
        return (

            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/" component={Torneo} />
                    <Route exact path="/torneo" component={Torneo} />
                    <Route exact path="/personajes" component={PagPersonajes} />
                    <Route exact path="/personajes/personaje/:id" component={Personaje}/>
                    <Route component={Error} />

                </Switch>
                <div className="clearfix"></div>
                <Footer />
            </BrowserRouter >
        );
    }
}

export default Router
    ;