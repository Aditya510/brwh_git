import React, { Component } from 'react'
import FutureLineChart from './FutureLineChart'
const data =[
        [{x: 0, y: 0},{x: 1, y: 9},{x: 2, y: 6},
		{x: 3, y: 5},{x: 4, y: 2},{x: 6, y: 4}
	]]
const futureData=[
	[{x: 6, y:4}, {x:7, y:9}, {x:8, y:3}, {x: 9, y:5}]
]

class App extends Component {

  render() {
    return (
      <div>
          <h2>React D3.js line chart</h2>
	  <FutureLineChart  data={data} futureData={futureData}/>
      </div>
    )
  }
}

export default App
