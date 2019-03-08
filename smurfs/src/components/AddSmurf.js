import React, {Component} from 'react';
import {connect} from 'react-redux';

import {addSmurf} from '../actions';
import './AddSmurf.css';

class AddSmurf extends Component {
    state = {
        name:'',
        age:'',
        height:'',
      };
    
      addSmurf = e => {
        e.preventDefault();
        const newSmurf = {...this.state};
        this.props.addSmurf(newSmurf);
        this.resetForm(e);
      }

    handleChange = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
      }
    
      resetForm = e => {
        e.preventDefault();
        this.setState({
          name:'',
          age:'',
          height:'',
        });
      }

    render() { 
        return ( 
            <form className="FriendForm" onSubmit={this.addSmurf}>
            <h2>AddSmurf</h2>
            <input onChange={this.handleChange}
                name="name"
                type="text"
                placeholder="name"
                value={this.state.name}
            required />
                
            <input onChange={this.handleChange}
                name="age"
                type="text"
                placeholder="age"
                value={this.state.age}
            required />

            <input onChange={this.handleChange}
                name="height"
                type="text"
                placeholder="height"
                value={this.state.height}
            required />

            <div className="FriendForm__buttons">
            <input type="submit"/>
            <input type="reset" onClick={this.resetForm}/>
            </div>

        </form>
         );
    }
}
 
export default connect(null,{addSmurf})(AddSmurf);