import React from "react";
import PieceInfo from "./PieceInfo.jsx";
import FreqBarChart from "./FreqBarChart.jsx";


export default class App extends React.Component {
    render () {
        return (
            <div>
            <h1>Hello from ChantStats</h1>
            <table cellPadding="20">
            <tbody>
              <tr>
                <td valign="top"><PieceInfo filename="01_Salus_eterna.xml" /></td>
                <td valing="top"><FreqBarChart label="PC Frequencies" /></td>
              </tr>
            </tbody>
            </table>
            </div>
        );
    }
}
