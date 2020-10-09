import React, { Component } from 'react';
import Personaje from './Personaje';
import Slider from './Slider';

class Personajes extends Component {

    state = {};

    render() {//ciclo de vida - escencial

        return (
            <React.Fragment>
                <Slider
                    title="Personajes"
                    size="slider"
                />
                <div className="center">
                    <div id="mid-form" className="personajes">
                        <h2 className="subheader">Listado de personajes</h2>
                        {/*Crear componente de personajes*/}
                        <div id="articles" className="personajes">
                            {/*} {this.state.personajes.map((personaje, i) => {
                            return (
                                <Personaje
                                    key={i}
                                    personaje={personaje}
                                    indice={i}
                                    marcarFavorita={this.favorita}
                                />
                            )
                        })
                        }*/}
                        </div>
                    </div>
                </div>
            </React.Fragment >
        );
    }
}

export default Personajes;