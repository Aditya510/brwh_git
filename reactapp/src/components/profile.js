import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import GraphChart from './Graphs/GraphChart'
import LineChart from './Graphs/LineChart'
import FutureLineChart from './Graphs/FutureLineChart'
import BCGraphChart from './Graphs/BCGraphChart'
import Popup from 'reactjs-popup'
//BCTestData
const bcdata = [{"name": "Me!", "r": 1}, {"name": "mt3", "r": 1.0}, {"name": "frankscholten", "r": 0.923994038748137}, {"name": "jonbaer", "r": 0.8397913561847988}, {"name": "mmasaki", "r": 0.717585692995529}, {"name": "mattweber", "r": 0.6669150521609538}, {"name": "cainanyang", "r": 0.6572280178837555}, {"name": "sunnygleason", "r": 0.6110283159463488}, {"name": "karussell", "r": 0.6050670640834575}, {"name": "umit", "r": 0.5797317436661699}, {"name": "jillesvangurp", "r": 0.5655737704918032}];
// data for testing graph on 3 end



const data =[
	[{userId: "ti250", before: 10, after: 20},
	 {userId: "munetomot", before: 4, after: 2},
	 {userId: "asdfjk", before: 30, after: 32}]
];

const personalData = [
	[{userId: "Me!"}]
]

//testing end

const linegraphdata =[
  [{x: 0, y: 0},{x: 1, y: 9},{x: 2, y: 6},
  {x: 3, y: 5},{x: 4, y: 2},{x: 6, y: 4},
{x: 7, y: 2},{x: 8, y: 5},{x: 9, y: 0}]
];
const linegraphpeopleData = [{userId: "ti250", score: 90},
{userId: "sjakdjf", score: 50}]
 //////


 const futurelinedata =[
  [{x: 0, y: 0},{x: 1, y: 9},{x: 2, y: 6},
{x: 3, y: 5},{x: 4, y: 2},{x: 6, y: 4}
]]
const futurelinefutureData=[
[{x: 6, y:4}, {x:7, y:9}, {x:8, y:3}, {x: 9, y:5}]
]

/////

const Profile = ({ profile }) => {
  return (
    <div>
      <style type="text/css">
    {`
    .btn-round {
      border-radius: 75px;
      // background-color: #03a5fc;
      background-image: linear-gradient(to bottom, #4DB1F5 , #0A66A4);
      color: white;
      height:150px;
      font-size : 50px;
      width:150px;
      margin:15px;
    }


    .profiledata {
      margin : 15px;
      margin-left : 30px;
    }

    .profiledata h1 {
      font-weight:bold;
    }


    .subset-container {
      border-radius:15px;
      background-color: #FFFFFF;
      // box-shadow: 10px 10px #888888;
      padding: 20px;
      padding-left: 20px;
      padding-right:30px;
      margin-right:30px
    }

    .subset-container h3{
      color: #0A66A4;
    }

    .subset-container h6{
      color: #0A66A4;
      padding-top:5px;
      
    }

    .circular--square {
      border-radius: 50%;
    }

    .col-namewidth {
      padding:100px;
    }

    .secondimage {
      
      padding:10px;
      margin:5px;
      border-radius: 50%;
    }

    p {
      line-height: 32px;   /* within paragraph */
      padding:0px;
      margin-bottom: 0px; /* between paragraphs */
      }

      .alignleft {
        float: left;
      }
      .alignright {
        float: right;
      }

      .buttondetails {
        height = 10px;
        border-radius:50px;
      }
  
    `}
  </style>
      <div class="profiledata">
        
        <Container>
          <Row >
            <Col xs={1} md={1}>
              <img src="https://avatars0.githubusercontent.com/u/6372489?s=88&v=4" class="circular--square" width="80px" height="80px" ></img>
            </Col>
            <Col xs={10} md={15}>
              <Row>
                <h1>Aditya Bansal</h1>
              </Row>
              <Row>
                <h4>Profile Summary</h4>
              </Row>
            </Col>
            <Col xs={8} md={16}></Col>
          </Row>
        </Container>
      </div>
          <Container>


  <Row>
  <Col xs={6} md={4}>
      
        <div class="subset-container">
        <h3>Potential Impact  
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>
        </h3>
        
        <center><Button color="primary" variant="round">100</Button></center>
        <h6>Similar to:</h6>
        <div>
          <p>
            <img src="https://avatars0.githubusercontent.com/u/6372489?s=88&v=4" class="secondimage" width="50px" height="50px" ></img> ti250
          </p>

          <h6>Details:</h6>
        <p class="alignright"> 5/5</p>
          <p>Future Growth
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>
          
          </p>
          
          <p class="alignright"> 5/5</p>
          <p>Java Expertise
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>
          </p>

          <p class="alignright"> 5/5</p>
          <p>Commitment
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>
          </p>
        </div>
        <FutureLineChart  data={futurelinedata} futureData={futurelinefutureData}/>
        <BCGraphChart  data={bcdata} />
        </div>
      
    </Col>


    <Col xs={6} md={4}>
      
        <div class="subset-container">
        <h3>Team Impact
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>
        </h3>

        <center><Button color="primary" variant="round">100</Button></center>
        <h6>Similar to:</h6>
        <div>
          <p>
            <img src="https://avatars0.githubusercontent.com/u/6372489?s=88&v=4" class="secondimage" width="50px" height="50px" ></img> ti250
          </p>

          <h6>Details:</h6>
        <p class="alignright"> 5/5</p>
          <p>Inspiration Coefficient
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>
          </p>
        
          <p class="alignright"> 5/5</p>
          <p>Team Value
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>
          </p>

          <p class="alignright"> 5/5</p>
          <p>Ingenuity
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>
          </p>

        </div>
        <GraphChart  data={data} personalData={personalData}/>
        </div>
      
    </Col>


    <Col xs={6} md={4}>
      
        <div class="subset-container">
        <h3>World Impact
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>
        </h3>
        <center><Button color="primary" variant="round">100</Button></center>
        <h6>Similar to:</h6>
        
          <p>
            <img src="https://avatars0.githubusercontent.com/u/6372489?s=88&v=4" class="secondimage" width="50px" height="50px" ></img> ti250
          </p>
        

        <h6>Details:</h6>
        <p class="alignright"> 5/5</p>
          <p>Java ecosystem importance
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>
          </p>
        
          <p class="alignright"> 5/5</p>
          <p>Repository impact
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>
          </p>

          <p class="alignright"> 5/5</p>
          <p>Ingenuity
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>
          </p>
        
          <LineChart  data={linegraphdata} peopleData={linegraphpeopleData}/>
        
        </div>
    </Col>
    
  </Row>
</Container>
            
      
    </div>
  )
};

export default Profile