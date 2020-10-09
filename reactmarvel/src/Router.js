import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';


import Header from './components/Header';
import Footer from './components/Footer';
import Error from './components/Error.js';
import Personajes from './components/Personajes';
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
                    <Route exact path="/personajes" component={Personajes} />
                    <Route exact path="/personaje" component={Personaje}/>
                    {/*<Route exact path="/personajes/busqueda/:search" component={Search} />*/}
                    {/*<Route exact path="/redirect/:search" render={
                        (props) =>{
                            var search = props.match.params.search;
                            return (
                                <Redirect to = {'/blog/busqueda/' + search}></Redirect>
                            );
                        }
                    }/>*/}
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