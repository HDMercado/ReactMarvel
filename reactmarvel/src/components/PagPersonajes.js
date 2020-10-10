import React, { Component } from 'react';
import Slider from './Slider';
import Personajes from './Personajes';

class PagPersonajes extends Component {

    render() {

        return (
            <div id = "pagPersonajes">
                <Slider
                    title = "Personajes"
                    size = "slider"
                />
                <div className="center">
                    <div id="content">
                        <Personajes/>
                    </div>
            </div>
            </div>

        );
    }
}

export default PagPersonajes;