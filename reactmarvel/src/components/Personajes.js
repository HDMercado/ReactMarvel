import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Global from '../Global';
import axios from 'axios';

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
                    <div className="center">
                    <div id="mid-form" className="article-item">
                    <article className="article-item" id="personaje-template" key={personaje._id}>
                        <div className="image-wrap">
                            <Link to={'/personajes/personaje/' + personaje.id} >
                                <img src={personaje.thumbnail.path + "." + personaje.thumbnail.extension} alt={personaje.name} />
                            </Link>
                        </div>
                        <h2 className="card-text">{personaje.name}</h2>
                        <Link to={'/personajes/personaje/' + personaje.id} >Leer más</Link>

                        <div className="clearfix"></div>
                    </article>
                    </div>
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
                <div id="personajes">
                    <h2 className="subheader">Cargando...</h2>
                    <p>Espere un momento</p>
                </div>
            );
        }

    }
}

export default Personajes;