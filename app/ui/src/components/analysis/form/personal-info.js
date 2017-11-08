import React from 'react';
import moment from 'moment';
// Inputs
import TextInput from '../../text-input';
import DateInput from '../../date-input';
import SelectInput from '../../select-input';

const PersonalInfo = props => 
  <div className="container">
    <h3>Datos Personales</h3>
    {/*Form Row 1*/}
    <div className="row" style={{marginTop: 30}}>
      <div className="col-md-4">
        <TextInput
          label="Nombre"
          onChange={e => props.onChange('entity', 'name', e.target.value)}
          value={props.form.name}
          errorMessage={""}
        />
      </div>
      <div className="col-md-4">
        <TextInput
          label="Apellido"
          onChange={e => props.onChange('entity', 'surname', e.target.value)}
          value={props.form.surname}
          errorMessage={""}
        />
      </div>
      <div className="col-md-4">
        <TextInput
          label="Identificacion"
          onChange={e => props.onChange('entity', 'id_number', e.target.value)}
          value={props.form.id_number}
          errorMessage={""}
        />
      </div>
    </div>
    {/*Form Row 2*/}
    <div className="row" style={{marginTop: 30}}>
      <div className="col-md-4">
        <SelectInput
          label="Pais"
          value={props.form.country}
          onChange={e => props.onChange('entity', 'country', e.value)}
          options={props.options.countries}
          errorMessage=""
        />
      </div>
      <div className="col-md-4">
        <TextInput
          label="Telefono"
          onChange={e => props.onChange('entity', 'phone', e.target.value)}
          value={props.form.phone}
          errorMessage={""}
        />
      </div>
      <div className="col-md-4">
        <TextInput
          label="Celular"
          onChange={e => props.onChange('entity', 'cellphone', e.target.value)}
          value={props.form.cellphone}
          errorMessage={""}
        />
      </div>
    </div>
    {/*Form Row 3*/}
    <div className="row" style={{marginTop: 30}}>
      <div className="col-md-4">
        <DateInput
          label="Fecha de Nacimiento"
          value={moment(props.form.birth_date)}
          onChange={value => props.onChange('entity', 'birth_date', value)}
          errorMessage={""}
        />
      </div>
      <div className="col-md-4">
        <SelectInput
          label="Estado Civil"
          value={props.form.marital_status}
          onChange={e => props.onChange('entity', 'marital_status', e.value)}
          options={props.options.marital_status}
          errorMessage=""
        />
      </div>
      <div className="col-md-4">
        <TextInput
          label="Domicilio"
          onChange={e => props.onChange('entity', 'address', e.target.value)}
          value={props.form.address}
          errorMessage={""}
        />
      </div>
    </div>
    {/*Button Row*/}
    <div className="row d-flex justify-content-end" style={{marginTop: 40}}>
      <div className="col-md-4 d-flex justify-content-end">
        <button className="btn btn-secondary btn-md" onClick={props.previousPage}>
          Anterior
        </button>
      </div>
      <div className="col-md-4 d-flex justify-content-end">
        <button className="btn btn-secondary btn-md" onClick={props.nextPage}>
          Siguiente
        </button>
      </div>
    </div>
  </div>

export default PersonalInfo;