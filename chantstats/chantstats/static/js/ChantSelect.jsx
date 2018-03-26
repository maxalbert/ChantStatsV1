import React from "react";
import Select from 'react-select';
import 'react-select/dist/react-select.css';

const options = [
  {value: "01_Salus_eterna.xml", label: "01 Salus eterna"},
  {value: "02_Regnantem.xml", label: "02 Regnantem"},
  {value: "03_Qui_regis.xml", label: "03 Qui regis"},
]

export default class ChantSelect extends React.Component {
  state = {
    selectedOption: '',
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Selected: ${selectedOption.label}`);
  }
  render() {
    const { selectedOption } = this.state;
    const value = selectedOption && selectedOption.value;

    return (
      <div style={ {width: '400px'} }>
        <Select
          name="form-field-name"
          value={value}
          onChange={this.handleChange}
          options={options}
        />
      </div>
    );
  }
}
