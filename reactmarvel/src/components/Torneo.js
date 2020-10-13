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
        peleadores: [],
        victorias: [],
        status: null

    }

    componentWillMount() {
        this.validator = new SimpleReactValidator({
            messages: {
                required: '*Este campo es requerido',
                numeric: '*Ingrese un caracter numerico positivo menor a 10',
                min: '*Ingrese un caracter numero positivo menor a 10',
                max: '*Ingrese un caracter numero positivo menor a 10'

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
    ranking = () => {
        var peleador_a = this.state.peleador_a;
        var peleador_b = this.state.peleador_b;
        var victorias = [];
        var peleadores = peleador_a.concat(peleador_b);

        //Cantidad de victorias
        for (let i = 0; i < peleadores.length; i++) {
            victorias[i] = peleadores.length / 2 - i;
            if (victorias[i] < 0) {
                victorias[i] = 0;
            }
        };
        this.setState({
            peleadores: peleadores,
            victorias: victorias
        });
    }


    reload = () => {
        window.location.replace('');
    }



    render() {
        return (
            <React.Fragment>
                <Slider
                    title="Torneo"
                />
                <div className="center">
                    <div id="mid-form" className="article-item">

                        <form className="mid-form" onSubmit={this.numeroPeleas} onChange={this.numeroPeleas}>
                            <p></p>
                            <label htmlFor="peleas">Ingrese la cantidad de peleas para la velada:</label>
                            <input type="text" name="peleas" ref={this.cantidadRef} />
                            <input type="submit" value="Crear" className="btn btn-danger" onClick={this.numeroPeleas} />
                            {this.validator.message('peleas', this.state.cantidadPeleas, 'required|numeric|min:1,num|max:10,num')}
                        </form>
                        {/*Tabla inicial*/}
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
                                                            <tr key={"peleadorA" + i}>
                                                                <Peleador key={"peleadorA" + i} peleador={peleador_a} />
                                                            </tr>
                                                        )
                                                    })
                                                }
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
                                                        <tr key={"peleadorB" + i}>
                                                            <Peleador key={"peleadorB" + i} peleador={peleador_b} />
                                                        </tr>
                                                    )
                                                })
                                                }

                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="clearfix"></div>

                                </div>
                                <div className="btn-center">
                                    <button type="submit" value="Comenzar" className="btn btn-danger" onClick={this.ranking}>Comenzar</button>
                                </div>
                            </div>

                        }
                        {this.state.peleadores.length > 0 &&
                            <div className="center">
                                <div className="mid-form">
                                    <div className="tableBox">
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Posición</th>
                                                    <th>Peleador</th>
                                                    <th>Victorias</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.peleadores.map((peleadores, i) => {
                                                    return (
                                                        <tr key={"peleadores" + i}>
                                                            <td>{i}</td>
                                                            <Peleador key={"peleadores" + i} peleador={peleadores} />
                                                            <td>
                                                                {this.state.victorias[i]}
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="btn-center">
                                        <input type="submit" value="Comenzar" className="btn btn-danger" onClick={this.reload}/>
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