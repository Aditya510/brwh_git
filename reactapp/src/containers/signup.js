import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class LoginForm extends React.Component {

    constructor(props){
      super(props);
      this.state = { username: '' , profile:[]};
    }
   
    handleChange = event => {
      this.setState({ username: event.target.value });
    };

    handleClick = event =>{
        fetch('http://127.0.0.1:5000/home', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: {
         "githubid": this.state.username
        }
       }
       )
      .catch(console.log)

    }
   
    render() {
      return (
        <React.Fragment>
          <form>
            <label htmlFor="username">username</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </form>
   
          <button onClick = {this.handleClick}>Submit</button>
        </React.Fragment>
      );
    }
   }
  export default LoginForm