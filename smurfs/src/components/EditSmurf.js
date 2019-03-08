import React, {Component} from 'react';
import {connect} from 'react-redux';

import {editSmurf} from '../actions';
import './EditSmurf.css';

class EditSmurf extends Component {
    state = {
        name:'',
        age:'',
        height:'',
        id: '',
      };
    
      editSmurf = e => {
        e.preventDefault();
        const newSmurf = {...this.state};
        this.props.editSmurf(newSmurf);
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
          id:'',
        });
      }

    render() { 
        return ( 
            <form className="FriendForm" onSubmit={this.editSmurf}>
            <h2>EditSmurf</h2>
            <input onChange={this.handleChange}
                name="id"
                type="text"
                placeholder="id"
                value={this.state.id}
            required/>

            <input onChange={this.handleChange}
                name="name"
                type="text"
                placeholder="name"
                value={this.state.name}
            />
                
            <input onChange={this.handleChange}
                name="age"
                type="text"
                placeholder="age"
                value={this.state.age}
            />

            <input onChange={this.handleChange}
                name="height"
                type="text"
                placeholder="height"
                value={this.state.height}
            />

            <div className="FriendForm__buttons">
            <input type="submit"/>
            <input type="reset" onClick={this.resetForm}/>
            </div>

        </form>
         );
    }
}
 
export default connect(null,{editSmurf})(EditSmurf);