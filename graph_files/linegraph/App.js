import React, { Component } from 'react'
import LineChart from './LineChart'
const data =[
        [{x: 0, y: 0},{x: 1, y: 9},{x: 2, y: 6},
        {x: 3, y: 5},{x: 4, y: 2},{x: 6, y: 4},
	{x: 7, y: 2},{x: 8, y: 5},{x: 9, y: 0}]
    ];
const peopleData = [{userId: "ti250", score: 50},
	{userId: "sjakdjf", score: 20}]

class App extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
          <h2>React D3.js line chart</h2>
	  <LineChart  data={data} peopleData={peopleData}/>
      </div>
    )
  }
}

export default App
