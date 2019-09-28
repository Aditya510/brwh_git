import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


const Profile = ({ profile }) => {
  return (
    <div>
      <style type="text/css">
    {`
    .btn-round {
      border-radius: 75px;
      // background-color: #03a5fc;
      background-image: linear-gradient(to bottom, #03a5fc , #0085cc);
      color: white;
      height:150px;
      font-size : 50px;
      width:150px
    }

    .subset-container {
      border-radius:15px;
      background-color: #FFFFFF;
      // box-shadow: 10px 10px #888888;
      padding: 10px;
      padding-left: 20px
    }

    .profiledata {
      margin : 15px;
      margin-left : 250px;
      
    }

    .subset-container h3{
      color: #1d51a3;
    }
    
    `}
  </style>
      <div class="profiledata">
        <h1>Aditya Bansal</h1>
        <h4>Profile Summary</h4>
        
        <img src="https://avatars0.githubusercontent.com/u/6372489?s=88&v=4" width="80px" height="80px" ></img>
      </div>
          <Container>
  <Row>
  <Col xs={6} md={4}>
      
        <div class="subset-container">
        <h3>Personal Impact</h3>
        <center><Button color="primary" variant="round">54</Button></center>
        </div>
      
    </Col>
    <Col xs={6} md={4}>
      
        <div class="subset-container">
        <h3>World Impact</h3>
        <center><Button color="primary" variant="round">32</Button></center>
        </div>
      
    </Col>
    <Col xs={6} md={4}>
      
        <div class="subset-container">
        <h3>Team Impact</h3>
        <center><Button color="primary" variant="round">69</Button></center>
        </div>
      
    </Col>
    
  </Row>
</Container>
            
      
    </div>
  )
};

export default Profile