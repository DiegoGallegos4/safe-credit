import React from 'react';
import TextInput from '../../text-input';

const BalanceSheet = props => 
  <div className='container'>
    <h3>Balance General</h3>
    <div className="row">
      <div className="col-md-12">
        <h4>Datos para indicadores de Liquidez</h4>
      </div>
      <div className="col-md-12">
        <TextInput
          type='number'
          label='Activo corriente'
          value={props.form.current_asset}
          errorMessage=''
          onChange={props.onChange}
        />
        <TextInput
          type='number'
          label='Pasivo corriente'
          value={props.form.current_liability}
          errorMessage=''
          onChange={props.onChange}
        />
      </div>
      <div className="col-md-12">
        <h4>Datos para indicadores de Endeudamiento</h4>
      </div>
      <div className="col-md-12">
        <TextInput
          type='number'
          label='Total cctivo'
          value={props.form.total_assets}
          errorMessage=''
          onChange={props.onChange}
        />
        <TextInput
          type='number'
          label='Pasivo con terceros'
          value={props.form.third_party_liability}
          errorMessage=''
          onChange={props.onChange}
        />
        <TextInput
          type='number'
          label='Obligaciones financieras'
          value={props.form.financial_obligations}
          errorMessage=''
          onChange={props.onChange}
        />
      </div>
    </div>
    {/*Button Row*/}
    <div className="row pull-right">
      <button className="btn btn-default btn-md" onClick={props.previousPage}>
        Atras
      </button>
      <button className="btn btn-default btn-md" onClick={props.nextPage}>
        Siguiente
      </button>
    </div>
  </div>


export default BalanceSheet;