import React, { Component } from 'react';
import Slider from './Slider';
import "bootstrap/dist/css/bootstrap.min.css";
import Peleador from './Peleador';
import CantidadPeleas from './CantidadPeleas';

class Torneo extends Component {

    render() {
        return (
            <React.Fragment>
                <Slider
                    title="Torneo"
                    size="slider"
                />
                <div className="center">
                    <div id="mid-form" className="article-item">
                        <h1></h1>
                        <CantidadPeleas />
                        <div className="tableBox">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th> </th>
                                        <th>Personaje</th>
                                        <th>VS</th>
                                        <th>Personaje</th>
                                        <th> </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <Peleador />
                                    <td>VS</td>
                                    <Peleador />
                                </tbody>
                            </table>
                        </div>

                        <div className="clearfix"></div>
                        <div className="btn-center">
                            <input type="submit" value="Comenzar" className="btn btn-danger" />
                        </div>
                    </div>
                </div>
            </React.Fragment >
        );
    }
}

export default Torneo;