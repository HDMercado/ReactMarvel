
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Global from '../Global';
import axios from 'axios';

import "bootstrap/dist/css/bootstrap.min.css";

class Personajes extends Component {
    url1 = Global.url1;
    url2 = Global.url2;

    state = {
        personajes: [],
        status: null
    }

    componentWillMount() {
        this.getPersonajes();
    }
    getPersonajes = () => {
        axios.get(this.url1 + "characters" + this.url2)
            .then(res => {
                this.setState({

                    personajes: res.data.data.results,
                    status: 'success'
                });
            });
    }

    render() {

        if (this.state.personajes.length >= 1) {
            var listpersonajes = this.state.personajes.map((personaje) => {
                return (
                    <div className="card" id="personaje-template" key={personaje.id}>

                        <div className="card-img-top">
                            <Link to={'/personajes/personaje/' + personaje.id} >
                                <img src={personaje.thumbnail.path + "." + personaje.thumbnail.extension} alt={personaje.name} />
                            </Link>
                        </div>
                        <h2 className="card-title">{personaje.name}</h2>
                        <div className="card-center">
                            {/*<Link to={'/personajes/personaje/' + personaje.id} ><input type="submit" value="Ver más" className="btn btn-danger" /></Link>*/}
                            {personaje.description}
                        </div>
                        <div className="clearfix"></div>
                    </div>

                );
            });
            return (
                <div id="personajes">
                    {listpersonajes}
                </div>
            );
        } else if (this.state.personajes.length === 0 && this.state.status === "success") {
            return (
                <div id="personajes">
                    <h2 className="subheader">No hay personajes para mostrar</h2>
                </div>
            );
        } else {
            return (
                <div className="center " id="personajes">
                    <h2 className="subheader">Cargando...</h2>
                </div>
            );
        }

    }
}

export default Personajes;