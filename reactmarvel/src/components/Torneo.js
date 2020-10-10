import React, { Component } from 'react';
import Slider from './Slider';
import "bootstrap/dist/css/bootstrap.min.css";


class Torneo extends Component {
    
    cantidadRef = React.createRef();

    recibirCantidad = (e) => {
        e.preventDefault();
    }

    render() {
        
        return (
            <React.Fragment>
                <Slider
                    title="Torneo"
                    size="slider"
                />
                <div className="center">
                    <div id="mid-form" className="article-item">
                        <h2 className="subheader">Listado de personajes</h2>
                        {/*Crear componente de personajes*/}

                        <form className="mid-form" onSubmit = {this.recibirCantidad} onChange = {this.recibirCantidad}>
                            <label htmlFor="cantidad">Ingrese la cantidad de peleas para la velada: </label>
                            <input type="text" name="peleas" ref = {this.cantidadRef}/>
                            <input type="submit" value="Crear" className="btn btn-danger" />
                        </form>

                        <div className = "tableBox">
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
                                <tr>

                                    <td>nombre</td>
                                    <td>imagen</td>
                                    <td>VS</td>
                                    <td>imagen</td>
                                    <td>nombre</td>
                                </tr>
                                <tr>

                                    <td>nombre</td>
                                    <td>imagen</td>
                                    <td>VS</td>
                                    <td>imagen</td>
                                    <td>nombre</td>
                                </tr>
                                <tr>

                                    <td>nombre</td>
                                    <td>imagen</td>
                                    <td>VS</td>
                                    <td>imagen</td>
                                    <td>nombre</td>
                                </tr>
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