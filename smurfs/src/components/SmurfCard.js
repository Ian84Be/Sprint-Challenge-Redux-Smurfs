import React from 'react';
import {connect} from 'react-redux';

import {deleteSmurf} from '../actions';
import './SmurfCard.css';

const SmurfCard = props => {
    return ( 
        <div className="SmurfCard" key={props.id}>
            <h3>{props.name}</h3>
            <p>Smurf Years: {props.age} years old</p>
            <p>Smurf Height: {props.height}</p>
            <p>ID: {props.id}</p>
            <button onClick={props.deleteSmurf} value={props.id}>Delete</button>
        </div>
     );
}
 
export default connect(null,{deleteSmurf})(SmurfCard);