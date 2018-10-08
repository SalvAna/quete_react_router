import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render(){
        return(
            <div>
                <Link to="/"> Retour à l'accueil </Link>
                <h1>Bienvenue sur l'accueil.</h1>
            </div>
        )
    }
}


export default Home;



