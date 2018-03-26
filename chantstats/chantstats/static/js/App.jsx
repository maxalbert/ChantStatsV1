import React from "react";
import PieceInfo from "./PieceInfo.jsx";
import FreqBarChart from "./FreqBarChart.jsx";
import ChantSelect from "./ChantSelect.jsx";


export default class App extends React.Component {
    render () {
        return (
            <div>
            <h1>Hello from ChantStats</h1>
            <PieceInfo filename="01_Salus_eterna.xml" />
            <table cellPadding="20">
            <tbody>
              <tr>
                <td valing="top"><ChantSelect /></td>
                <td valing="top"><FreqBarChart label="PC Frequencies" /></td>
              </tr>
            </tbody>
            </table>
            </div>
        );
    }
}
