import React, { Component } from 'react';
import Profile from './components/profile';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';

class App extends Component {
  
  state= {
    responseData: [],
    currentval : []
  }

  componentDidMount() {
    
    fetch('http://localhost:5000/get_all_data?values='+'hanshuo-aws', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
    })
    .then(function(response) {
      return response.json();
    })
    .then(json =>{
      console.log(json);
      this.setState({ responseData: json})
      console.log(this.state)
      console.log(this.state.responseData.potential.overall_score)
   })
    .catch(console.log);
    
    
    
  }

  //   axios.post('http://localhost:5000/get_all_data', {
  //     values: 'hanshuo-aws'
  //   })
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  //   console.log("y");

  // }

  handleChange(event) {
    let fieldVal = event.target.value;
    this.setState({currentval : fieldVal});
  }

  render() {
    console.log(this.state.responseData);
    
  return (
    
    <div>
      <style type="text/css">
    {`
    .navbar-colors{
      background-image: linear-gradient(to bottom, #09385B , #0A66A4);
    }

    .btn-nav {
      background-color: white
    }
    `}
    </style>
    <Navbar variant='colors'>
  <Navbar.Brand href="#home"><font color="white">IMPACT</font></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home"><font color="white">Home</font></Nav.Link>
      <Nav.Link href="#link"><font color="white">About Us</font></Nav.Link>
      <NavDropdown title="Search as" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Recruiter</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Developer</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Student</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
    <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            </InputGroup.Prepend>
    </InputGroup>
      <FormControl type="text" placeholder="Search Username" className="mr-sm-2" onChange={this.handleChange.bind(this)}/>
      
    </Form>
  </Navbar.Collapse>
</Navbar>

    
      <header className="App-header">
        
      </header>
      <Profile fulldata={this.state.responseData} />
    </div>
  );
}

}

export default App;
