import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/datepicker.css';


const DateInput  = ({
  label,
  value,
  onChange,
  errorMessage
}) =>
  <div className='form-group'>
    <label htmlFor="">{label}</label>
    <DatePicker
      selected={value}
      onChange={onChange}
    />
    <div className="invalid-feedback">{errorMessage}</div>
  </div>

DateInput.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  errorMessage: PropTypes.string
}

export default DateInput;