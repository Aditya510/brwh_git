import React, { Component } from 'react'
import GraphChart from './GraphChart'
const data =[
	[{userId: "ti250", before: 10, after: 20},
	 {userId: "munetomot", before: 4, after: 2},
	 {userId: "asdfjk", before: 30, after: 32}]
];

const personalData = [
	[{userId: "Me!"}]
]

class App extends Component {
  render() {
    return (
      <div>
          <h2>React D3.js line chart</h2>
		  <GraphChart  data={data} personalData={personalData}/>
      </div>
    )
  }
}

export default App
