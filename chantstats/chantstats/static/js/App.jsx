import React from "react";


export default class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            filename: '01_Salus_eterna.xml',
            num_measures: 12,
        };
    }

    render () {
        return (
            <div>
                <h1>Hello from ChantStats</h1>
                <div id='chant_info'>
                    Piece '{this.state.filename}': {this.state.num_measures} measures
                </div>
            </div>
        );
    }
}
