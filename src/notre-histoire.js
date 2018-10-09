import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class History extends Component {
    render(){
        return(
            <div>
            <Link to="/"> Retour accueil. </Link>
              {this.props.match.params.productNumber}
            <h1>Je vais vous racontez notre histoire. Il était une fois, à la Wild Code School...</h1>
            </div>
        )
    }
}


export default History;
