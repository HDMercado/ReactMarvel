import React, { Component } from 'react';
import Slider from './Slider';
import "bootstrap/dist/css/bootstrap.min.css";
import Peleador from './Peleador';
import Global from '../Global';
import axios from 'axios';
import SimpleReactValidator from 'simple-react-validator';

class Torneo extends Component {
    url1 = Global.url1;
    url2 = Global.url2;

    cantidadRef = React.createRef();

    state = {
        personajes: [],
        peleador_a: [],
        peleador_b: [],
        status: null,
    }

    componentWillMount() {
        this.validator = new SimpleReactValidator({
            messages: {
                required: '*Este campo es requerido',
                numeric: '*Ingrese un caracter numerico positivo menor a 10',
                min:'*Ingrese un caracter numero positivo menor a 10',
                max:'*Ingrese un caracter numero positivo menor a 10' 

            }
        });
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

    numeroPeleas = (e) => {
        e.preventDefault();
        var cantidadPeleas = this.cantidadRef.current.value;
        var personajes = this.state.personajes;
        var peleador_a = [];
        var peleador_b = [];
        var a = 0;
        var b = 0;
        if (this.validator.allValid()) {
            for (let i = 0; i < cantidadPeleas; i++) {
                a = Math.floor(Math.random() * personajes.length);
                b = Math.floor(Math.random() * personajes.length);
                peleador_a[i] = personajes[a];
                peleador_b[i] = personajes[b];
                personajes.splice(a, 1);
                personajes.splice(b, 1);

            }
        } else {
            this.setState({
                status: 'failed'
            });
            this.validator.showMessages();
            this.forceUpdate();

        }


        this.setState({
            cantidadPeleas: cantidadPeleas,
            peleador_a: peleador_a,
            peleador_b: peleador_b
        });

    }

    render() {

        return (
            <React.Fragment>
                <Slider
                    title="Torneo"
                />
                <div className="center">
                    <div id="mid-form" className="article-item">
                        <h1></h1>
                        <form className="mid-form" onSubmit={this.numeroPeleas} onChange={this.numeroPeleas}>
                            <label htmlFor="peleas">Ingrese la cantidad de peleas para la velada:</label>
                            <input type="text" name="peleas" ref={this.cantidadRef} />
                            <input type="submit" value="Crear" className="btn btn-danger" />
                                {this.validator.message('peleas', this.state.cantidadPeleas, 'required|numeric|min:0,num|max:10,num')}
                            </form>
                        {this.state.peleador_a.length > 0 &&
                            <div className="center">
                                <div className="mid-form">
                                    <div className="tableBox">
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Peleador</th>
                                                    <th></th>
                                                </tr>
                                            </thead>

                                            <tbody>

                                                {
                                                    this.state.peleador_a.map((peleador_a, i) => {
                                                        return (
                                                            <tr>
                                                                <Peleador key={"peleadorA" + i} peleador={peleador_a} />
                                                            </tr>
                                                        )
                                                    })}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="tableBox">
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Peleador</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.peleador_b.map((peleador_b, i) => {
                                                    return (
                                                        <tr>
                                                            <Peleador key={"peleadorB" + i} peleador={peleador_b} />
                                                        </tr>
                                                    )
                                                })
                                                }

                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="btn-center">
                                        <input type="submit" value="Comenzar" className="btn btn-danger" />
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </React.Fragment >
        );
    }
}

export default Torneo;