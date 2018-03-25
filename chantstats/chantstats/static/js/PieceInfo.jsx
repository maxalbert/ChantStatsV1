import React from "react";

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
            <div>
                <h1>Hello from ChantStats</h1>
                <div id='chant_info'>
                    Piece '{this.state.filename}': {this.state.num_measures} measures{this.state.status}
                </div>
            </div>
        );
    }
}
