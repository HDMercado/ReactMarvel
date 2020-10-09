import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Personaje extends Component {

    render(){
        {/*const pelicula = this.props.pelicula;
        const {titulo, image} = this.props.pelicula;
        */}
         return (
            <article className="article-item" id="article-template">
            <div className="image-wrap">
                < img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/433ybv_com_crd_01.jpg" alt="black widow" />
            </div>
            <h2>Black Widow</h2>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            <Link to="/personaje">Leer más</Link>
            <div className="clearfix"></div>
        </article>
         );
    }
}

export default Personaje;