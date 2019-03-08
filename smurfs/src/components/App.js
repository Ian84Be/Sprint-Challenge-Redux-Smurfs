import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getSmurf} from '../actions';

import SmurfCard from './SmurfCard';
import AddSmurf from './AddSmurf';
import EditSmurf from './EditSmurf';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getSmurf();
  }

  render() {
    return (
      <div className="App">
      <div className="crud-forms">
        <AddSmurf />
        <EditSmurf />
      </div>
        {this.props.fetching && ( <div className="fetching">fetching..</div> )}
        {this.props.smurfs.map(smurf => {
          return (
            <SmurfCard {...smurf} key={smurf.id} />
          );
        })}
      </div>
    );
  }
}

const mstp = state => ({
  fetching: state.fetching,
  smurfs: state.smurfs,
});

export default connect(mstp,{getSmurf})(App);
