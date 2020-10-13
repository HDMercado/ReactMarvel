import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

class Peleador extends Component {

    render() {
        const { name, thumbnail } = this.props.peleador;
        return (
            <React.Fragment>
                <td>{name}</td>
                <td>
                    <img className="image-peleador" src={thumbnail.path + "." + thumbnail.extension} alt={name} />
                </td>
            </React.Fragment>
        );

    }
}

export default Peleador;