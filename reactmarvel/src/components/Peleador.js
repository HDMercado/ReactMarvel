import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Global from '../Global';
import CantidadPeleas from './CantidadPeleas';

class Peleador extends Component {
    url1 = Global.url1;
    url2 = Global.url2;

    state = {
        peleas: {}
    };

    state = {
        personajes: [],
        status: null,
    }

    componentWillMount() {
        this.getRandomCharacter();
    }

    getRandomCharacter = () => {
        var cantidadPeleas = CantidadPeleas.cantidadPeleas;
        var personajes = this.state.personajes;
        var peleadores_a = [];
        var a = 0;
        
        console.log(cantidadPeleas);
        for (let i = 0; i < cantidadPeleas; i++) {
            a = Math.floor(Math.random() * personajes.length);
            peleadores_a[i] = personajes[a];
        }

    }


    render() {
        if (this.state.peleadores_a.length) {
            var listpeleadores = this.state.peleadores_a.map((peleadores_a) => {
        return (
            <tr>
                <td>{peleadores_a.name}</td>
                <td> <img src={peleadores_a.thumbnail.path + "." + peleadores_a.thumbnail.extension} alt={peleadores_a.name} /></td>
            </tr>
        );
    });
    return (
        <div id="peleadores">
            {listpeleadores}
        </div>
    );
    }}
}

export default Peleador;