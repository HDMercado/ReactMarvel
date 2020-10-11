import React, { Component } from 'react';


class CantidadPeleas extends Component {

    cantidadRef = React.createRef();

    state = {
        cantidadPeleas: 1
    };


    numeroPeleas = (e) => {
        e.preventDefault();
        var cantidadPeleas = this.cantidadRef;
    }

    render() {
        return (
            <form className="mid-form" onSubmit={this.numeroPeleas} onChange={this.numeroPeleas}>
                <label htmlFor="cantidad">Ingrese la cantidad de peleas para la velada: </label>
                <input type="text" name="peleas" ref={this.cantidadRef} />
                <input type="submit" value="Crear" className="btn btn-danger" />
            </form>
        );
    }
}

export default CantidadPeleas;