import React, { Component } from 'react';
import Slider from './Slider';
import Personajes from './Personajes';

import "bootstrap/dist/css/bootstrap.min.css";

class PagPersonajes extends Component {

    render() {

        return (
            <div id="pagPersonajes">
                <Slider
                    title="Personajes"
                    size="slider"
                />
                <div className="center">
                    <div id="container">
                        <div className="row" id="marvel">
                            <Personajes />
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default PagPersonajes;