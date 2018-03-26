import React from "react";
import createClass from 'create-react-class';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

const options = [
  {value: "01_Salus_eterna.xml", label: "01_Salus_eterna.xml"},
  {value: "02_Regnantem.xml", label: "02_Regnantem.xml"},
  {value: "03_Qui_regis.xml", label: "03_Qui_regis.xml"},
  {value: "04_Iubilemus_omnes.xml", label: "04_Iubilemus_omnes.xml"},
  {value: "05_Letabundus.xml", label: "05_Letabundus.xml"},
  {value: "06_Hac_clara_die.xml", label: "06_Hac_clara_die.xml"},
  {value: "07_Splendor_patris.xml", label: "07_Splendor_patris.xml"},
  {value: "08_In_excelsis_canitur.xml", label: "08_In_excelsis_canitur.xml"},
  {value: "09_Nato_nobis.xml", label: "09_Nato_nobis.xml"},
  {value: "10_Ante_Torum.xml", label: "10_Ante_Torum.xml"},
  {value: "11_Epyphaniam_domino.xml", label: "11_Epyphaniam_domino.xml"},
  {value: "12_Fulgens_preclara.xml", label: "12_Fulgens_preclara.xml"},
  {value: "13_Mane_prima.xml", label: "13_Mane_prima.xml"},
  {value: "14_Zima_uetus.xml", label: "14_Zima_uetus.xml"},
  {value: "15_Ecce_dies.xml", label: "15_Ecce_dies.xml"},
  {value: "16_Lux_illuxit.xml", label: "16_Lux_illuxit.xml"},
  {value: "17_Sexta_passus_feria.xml", label: "17_Sexta_passus_feria.xml"},
  {value: "18_Mundi_renovatio.xml", label: "18_Mundi_renovatio.xml"},
  {value: "19_Salve_dies_dierum.xml", label: "19_Salve_dies_dierum.xml"},
  {value: "20_Agnus_redemit.xml", label: "20_Agnus_redemit.xml"},
]


function compare(a,b) {
  if (a.value < b.value)
    return -1;
  if (a.value > b.value)
    return 1;
  return 0;
}


let ChantMultiSelect = createClass({
  displayName: 'ChantMultiSelect',
  // propTypes: {
  //   label: PropTypes.string,
  // },
  getInitialState () {
    return {
      value: [],
      stayOpen: true,
    };
  },
  handleSelectChange (value) {
    value.sort(compare);
    this.setState({ value });
  },

  render () {
    const { value, stayOpen } = this.state;
    return (
      <div className="section" style={ {width: '400px'} }>
        <h3 className="section-heading">Select chant(s):</h3>
        <Select
          multi
          autoFocus={false}
          openOnFocus={true}
          closeOnSelect={!stayOpen}
          removeSelected={false}
          onChange={this.handleSelectChange}
          options={options}
          placeholder="Select chant(s)"
          simpleValue={false}
          value={value}
          style={ {width: '400px', height: '300px'} }
        />

      </div>
    );
  }
});

module.exports = ChantMultiSelect;
