import axios from 'axios';
import React, { Component } from 'react';
import Global from '../Global';
import Slider from './Slider';

class Personaje extends Component {
    url1 = Global.url1;
    url2 = Global.url2;

    state = {
        personaje: {},
        status: null
    };

    componentWillMount() {
        this.getPersonaje();
    }

    getPersonaje = () => {
        var id = this.props.match.params.id;
        axios.get(this.url1 + "characters/" + id + this.url2)
            .then(res => {
                this.setState({
                    personaje: res.data.data.results,
                    status: 'success'
                });
            });
    }
    render() {
        
        var personaje = this.state.personaje;
        console.log(personaje);
        return (
            <React.Fragment>
                <Slider
                    title={personaje.name}
                    size="slider"
                />
                <div className="center">
                    <section id="content">

                        {this.state.personaje &&
                            <article className="article-item article-detail" id="article-template">
                                <div className="image-wrap">
                                    <img src={this.url + "get-image/" + personaje.image} alt={personaje.name} />
                                </div>
                                <h1 className="subheader">{personaje.name}</h1>
                                <p>
                                    {personaje.description}
                                </p>
                                <div className="clearfix"></div>
                            </article>
                        }
                        {!personaje && this.state.status === 'success' &&
                            <div id="article">
                                <h2 className="subheader"> El artículo no exite</h2>

                            </div>
                        }
                        {!personaje == null &&
                            <div id="article">
                                <h2 className="subheader">Cargando...</h2>
                            </div>
                        }

                    </section>
                    <div className="clearfix"></div>
                </div>
            </React.Fragment>
        );
    }
}

export default Personaje;