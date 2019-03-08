import React from 'react';

const SmurfCard = props => {
    return ( 
        <div className="smurfCard" key={props.id} >
              <h2>{props.name}</h2>
              <ul>
                  <li>{props.age}</li>
                  <li>{props.height}</li>
              </ul>
        </div>
     );
}
 
export default SmurfCard;