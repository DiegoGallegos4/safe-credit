import React from 'react';
// Inputs
import TextInput from '../../text-input';
import DateInput from '../../date-input';
import SelectInput from '../../select-input';

const PersonalInfo = props => 
  <div className="container">
    {/*Form Row 1*/}
    <div className="row">
      <div className="col-md-4">
        <TextInput
          label="Nombre"
          onChange={props.onChange}
          value={prop.form.name}
          errorMessage={""}
        />
      </div>
      <div className="col-md-4">
        <TextInput
          label="Apellido"
          onChange={props.onChange}
          value={prop.form.last_name}
          errorMessage={""}
        />
      </div>
      <div className="col-md-4">
        <TextInput
          label="Identificacion"
          onChange={props.onChange}
          value={prop.form.id_number}
          errorMessage={""}
        />
      </div>
    </div>
    {/*Form Row 2*/}
    <div className="row">
      <div className="col-md-4">
        <TextInput
          label="Telefono"
          onChange={props.onChange}
          value={prop.form.phone}
          errorMessage={""}
        />
      </div>
      <div className="col-md-4">
        <TextInput
          label="Telefono"
          onChange={props.onChange}
          value={prop.form.phone}
          errorMessage={""}
        />
      </div>
    </div>
    {/*Form Row 3*/}
    <div className="row">
      <div className="col-md-4">
        <DateInput
          label="Fecha de Nacimiento"
          value={props.form.birth_date}
          onChange={props.onChange}
          errorMessage={""}
        />
      </div>
      <div className="col-md-4">
        <SelectInput
          label="Estado Civil"
          value={props.form.marital_status}
          options={props.options.marital_status}
          errorMessage=""
        />
      </div>
      <div className="col-md-4">
        <TextInput
          label="Domicilio"
          onChange={props.onChange}
          value={prop.form.address}
          errorMessage={""}
        />
      </div>
    </div>
    {/*Button Row*/}
    <div className="row pull-right">
      <button className="btn btn-default btn-md" onClick={props.nextPage}>
        Siguiente
      </button>
    </div>
  </div>

export default PersonalInfo;