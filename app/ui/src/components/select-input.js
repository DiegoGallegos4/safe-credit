import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';


const SelectInput  = ({
  label,
  value,
  onChange,
  errorMessage,
  options // [{value: ..., label: ...},...]
}) =>
  <div className='form-group'>
    <label htmlFor="">{label}</label>
    <Select
      value={value}
      options={options}
      onChange={onChange}
    />
    <div className="invalid-feedback">{errorMessage}</div>
  </div>

SelectInput.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  errorMessage: PropTypes.string
}

export default SelectInputInput;