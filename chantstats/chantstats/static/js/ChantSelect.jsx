import React from "react";

const options = [
  "01_Salus_eterna.xml",
  "02_Regnantem.xml",
  "03_Qui_regis.xml",
]

export default class ChantSelect extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <h3>Select your chants:</h3>
      </div>
    );
  }
}
