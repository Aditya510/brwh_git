import React, { Component } from 'react'
import BCGraphChart from './BCGraphChart'
const data = [{"name": "Me!", "r": 1}, {"name": "mt3", "r": 1.0}, {"name": "frankscholten", "r": 0.923994038748137}, {"name": "jonbaer", "r": 0.8397913561847988}, {"name": "mmasaki", "r": 0.717585692995529}, {"name": "mattweber", "r": 0.6669150521609538}, {"name": "cainanyang", "r": 0.6572280178837555}, {"name": "sunnygleason", "r": 0.6110283159463488}, {"name": "karussell", "r": 0.6050670640834575}, {"name": "umit", "r": 0.5797317436661699}, {"name": "jillesvangurp", "r": 0.5655737704918032}];

class App extends Component {
  render() {
    return (
      <div>
          <h2>React D3.js line chart</h2>
	  <BCGraphChart  data={data} />
      </div>
    )
  }
}

export default App
