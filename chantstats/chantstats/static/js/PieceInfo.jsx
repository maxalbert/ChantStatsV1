import React from "react";
import { LineChart, Line } from 'recharts';

const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

export default class PieceInfo extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            filename: this.props.filename,
            num_measures: "<unknown>",
            status: " (loading...)",
        };
    }

    componentWillMount() {
        let api_url = window.location.href + 'api/num_measures/' + this.state.filename;

        fetch(api_url)
        .then(results => {
            return results.json();
        })
        .then(data => {
            this.setState({
                filename: data['filename'],
                num_measures: data['num_measures'],
                status: " (done)",
            })
        })
    }

    render () {
        return (
            <div id='chant_info'>
                Piece '{this.state.filename}': {this.state.num_measures} measures{this.state.status}
            </div>
        );
    }
}
