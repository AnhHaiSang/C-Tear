import React, { Component } from 'react';
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

class ChartAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: 'Tháng 1', uv: 4000, pv: 2400, amt: 2400},
        {name: 'Tháng 2', uv: 2500, pv: 3398, amt: 2210},
        {name: 'Tháng 3', uv: 2000, pv: 6800, amt: 2290},
        {name: 'Tháng 4', uv: 2780, pv: 4908, amt: 2000},
        {name: 'Tháng 5', uv: 1890, pv: 5800, amt: 2181},
        {name: 'Tháng 6', uv: 2390, pv: 3800, amt: 2500},
        {name: 'Tháng 7', uv: 3490, pv: 4300, amt: 2100},
        {name: 'Tháng 8', uv: 3490, pv: 5200, amt: 2213},
        {name: 'Tháng 9', uv: 3490, pv: 6123, amt: 2456},
        {name: 'Tháng 10', uv: 3490, pv: 4321, amt: 3210},
        {name: 'Tháng 11', uv: 3490, pv: 5678, amt: 1800},
        {name: 'Tháng 12', uv: 3490, pv: 7000, amt: 2600}
      ]
    }
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <h3 style={{textAlign:"center",marginTop:"20px"}}>Doanh Thu Năm 2019</h3>
        <ResponsiveContainer className="chart" height={300}>
        <LineChart 
         width={600} 
         height={300} 
         data={data}
         margin={{top: 5, right: 30, left: 20, bottom: 5}}
        >
        <XAxis dataKey="name"/>
        <YAxis/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
        {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
      </ResponsiveContainer>
      </div>
      
    );
  }
}

export default ChartAdmin;