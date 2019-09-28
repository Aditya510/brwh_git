import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import GraphChart from './Graphs/GraphChart'
import LineChart from './Graphs/LineChart'
import FutureLineChart from './Graphs/FutureLineChart'

import Popup from 'reactjs-popup'
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
	[{x: 0, y: 0.5},{x: 1, y: 1.0},{x: 2, y: 2.2},
	  {x: 3, y: 4.2},{x: 4, y: 6}, {x:5, y: 7}, {x: 6, y: 6},
		{x: 7, y: 4.2},{x: 8, y: 2.2},{x: 9, y: 1.0}, {x:10, y:0.5}]
];
const linegraphpeopleData = [{userId: "ti250", score: 90},
{userId: "sjakdjf", score: 50}]
 //////


 const futurelinedata =[
  [
    {
      x: 0.0,
      y: 0.0
    },
    {
      x: 0.17857142857142858,
      y: 0.3692836954270712
    },
    {
      x: 0.35714285714285715,
      y: 0.5539255431406067
    },
    {
      x: 0.5357142857142857,
      y: 0.6770201082829638
    },
    {
      x: 0.7142857142857143,
      y: 0.8001146734253208
    },
    {
      x: 0.8928571428571429,
      y: 0.9232092385676779
    },
    {
      x: 1.0714285714285714,
      y: 1.1693983688523921
    },
    {
      x: 1.25,
      y: 1.3540402165659275
    },
    {
      x: 1.4285714285714286,
      y: 1.5386820642794632
    },
    {
      x: 1.6071428571428572,
      y: 1.969513042277713
    },
    {
      x: 1.7857142857142858,
      y: 2.215702172562427
    },
    {
      x: 1.9642857142857142,
      y: 2.4003440202759627
    },
    {
      x: 2.142857142857143,
      y: 2.461891302847141
    },
    {
      x: 2.3214285714285716,
      y: 2.708080433131855
    },
    {
      x: 2.5,
      y: 2.892722280845391
    },
    {
      x: 2.6785714285714284,
      y: 2.892722280845391
    },
    {
      x: 2.857142857142857,
      y: 3.015816845987748
    },
    {
      x: 3.0357142857142856,
      y: 3.015816845987748
    },
    {
      x: 3.2142857142857144,
      y: 3.2004586937012833
    },
    {
      x: 3.392857142857143,
      y: 3.508195106557176
    },
    {
      x: 3.5714285714285716,
      y: 3.631289671699533
    },
    {
      x: 3.75,
      y: 3.6928369542707116
    },
    {
      x: 3.9285714285714284,
      y: 3.75438423684189
    },
    {
      x: 4.107142857142857,
      y: 3.8774788019842474
    },
    {
      x: 4.285714285714286,
      y: 4.246762497411319
    },
    {
      x: 4.464285714285714,
      y: 4.800688040551925
    },
    {
      x: 4.642857142857143,
      y: 5.231519018550175
    },
    {
      x: 4.821428571428571,
      y: 5.41616086626371
    },
    {
      x: 5.0,
      y: 5.600802713977246
    },
    {
      x: 5.178571428571429,
      y: 5.785444561690782
    },
    {
      x: 5.357142857142857,
      y: 5.908539126833139
    }
  ]]
const futurelinefutureData=[
  [
    {
      x: 5.535714285714286,
      y: 6.021631603825848
    },
    {
      x: 5.714285714285714,
      y: 6.118125890661705
    },
    {
      x: 5.892857142857143,
      y: 6.200458046076099
    },
    {
      x: 6.071428571428571,
      y: 6.270706596922524
    },
    {
      x: 6.25,
      y: 6.330645011885496
    },
    {
      x: 6.428571428571429,
      y: 6.3817864738087025
    },
    {
      x: 6.607142857142857,
      y: 6.4254220809441
    },
    {
      x: 6.785714285714286,
      y: 6.462653441536305
    },
    {
      x: 6.964285714285714,
      y: 6.494420484612967
    },
    {
      x: 7.142857142857143,
      y: 6.521525189082077
    },
    {
      x: 7.321428571428571,
      y: 6.544651830192003
    },
    {
      x: 7.5,
      y: 6.564384254488946
    },
    {
      x: 7.678571428571429,
      y: 6.581220619388792
    },
    {
      x: 7.857142857142857,
      y: 6.595585969473234
    },
    {
      x: 8.035714285714286,
      y: 6.607842967006631
    },
    {
      x: 8.214285714285714,
      y: 6.618301047572072
    },
    {
      x: 8.392857142857142,
      y: 6.6272242319665535
    },
    {
      x: 8.571428571428571,
      y: 6.63483779157146
    },
    {
      x: 8.75,
      y: 6.641333935469737
    },
    {
      x: 8.928571428571429,
      y: 6.646876662884656
    },
    {
      x: 9.107142857142858,
      y: 6.65160590344292
    },
    {
      x: 9.285714285714286,
      y: 6.65564104978579
    },
    {
      x: 9.464285714285714,
      y: 6.659083971711181
    },
    {
      x: 9.642857142857142,
      y: 6.662021587940438
    },
    {
      x: 9.821428571428571,
      y: 6.664528060436032
    },
    {
      x: 10.0,
      y: 6.666666666666667
    }
  ]
]

///// ^^ redundant



const Profile = ({ potential, worldimpact, teamimpact }) => {
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

        <center><Button color="primary" variant="round">71</Button></center>
        <h6>Similar to:</h6>
        <div>
          <p>
            <img src="https://avatars0.githubusercontent.com/u/6372489?s=88&v=4" class="secondimage" width="50px" height="50px" ></img> ti250
          </p>

          <h6>Details:</h6>
        <p class="alignright"> 4/5</p>
          <p>Future Growth
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>

          </p>

          <p class="alignright"> 4/5</p>
          <p>Java Expertise
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>
          </p>

          <p class="alignright"> 5/5</p>
          <p>Commitment
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>
          </p>
        </div>
        <FutureLineChart  data={futurelinedata} futureData={futurelinefutureData}/>
        
        </div>

    </Col>


    <Col xs={6} md={4}>

        <div class="subset-container">
        <h3>Team Impact
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>
        </h3>

        <center><Button color="primary" variant="round">56</Button></center>
        <h6>Similar to:</h6>
        <div>
          <p>
            <img src="https://avatars0.githubusercontent.com/u/6372489?s=88&v=4" class="secondimage" width="50px" height="50px" ></img> ti250
          </p>

          <h6>Details:</h6>
        <p class="alignright"> 3/5</p>
          <p>Inspiration Coefficient
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>
          </p>

          <p class="alignright"> 5/5</p>
          <p>Team Value
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>
          </p>

          {/* <p class="alignright"> 4/5</p>
          <p>Ingenuity
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>
          </p> */}

        </div>
        <GraphChart  data={data} personalData={personalData}/>
        </div>

    </Col>


    <Col xs={6} md={4}>

        <div class="subset-container">
        <h3>World Impact
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>
        </h3>
        <center><Button color="primary" variant="round">43</Button></center>
        <h6>Similar to:</h6>

          <p>
            <img src="https://avatars0.githubusercontent.com/u/6372489?s=88&v=4" class="secondimage" width="50px" height="50px" ></img> ti250
          </p>


        <h6>Details:</h6>
        <p class="alignright"> 4/5</p>
          <p>Java ecosystem importance
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>
          </p>

          <p class="alignright"> 4/5</p>
          <p>Repository impact
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>
          </p>

          <p class="alignright"> 3/5</p>
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
