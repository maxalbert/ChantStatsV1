import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
      {name: 'A',  abs_freq: 2400, rel_freq: 1400},
      {name: 'B♭', abs_freq: 1798, rel_freq: 2798},
      {name: 'B',  abs_freq: 1398, rel_freq: 3398},
      {name: 'C',  abs_freq: 9800, rel_freq: 6800},
      {name: 'D',  abs_freq: 3908, rel_freq: 5908},
      {name: 'E',  abs_freq: 4800, rel_freq: 2800},
      {name: 'F',  abs_freq: 3800, rel_freq: 1800},
      {name: 'G',  abs_freq: 4300, rel_freq: 4300},
];

export default class FreqBarChart extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div>
                <h3>{this.props.label}</h3>
                <BarChart width={600} height={300} data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip isAnimationActive={false}/>
                    <Legend />
                    <Bar dataKey="abs_freq" fill="#8884d8" isAnimationActive={false}/>
                    <Bar dataKey="rel_freq" fill="#82ca9d" isAnimationActive={false}/>
                </BarChart>
            </div>
        );
    }
}
