import React from 'react';
import TextInput from '../../text-input';

const BalanceSheet = props => 
  <div className='container'>
    <div className="row">
      <div className="col-md-12" style={{marginTop: 10, marginBottom: 15}}>
        <h3>Balance General</h3>
        <h6>Datos para indicadores de Liquidez</h6>
      </div>
      <div className="col-md-6">
        <TextInput
          type='number'
          label='Activo corriente'
          value={props.form.current_asset}
          errorMessage=''
          onChange={e => props.onChange('analysis', 'current_asset', e.target.value)}
        />
        <TextInput
          type='number'
          label='Pasivo corriente'
          value={props.form.current_liability}
          errorMessage=''
          onChange={e => props.onChange('analysis', 'current_liability', e.target.value)}
        />
      </div>
      <div className="col-md-12" style={{marginTop: 30, marginBottom: 15}}>
        <h6>Datos para indicadores de Endeudamiento</h6>
      </div>
      <div className="col-md-6">
        <TextInput
          type='number'
          label='Total activos'
          value={props.form.total_assets}
          errorMessage=''
          onChange={e => props.onChange('analysis', 'total_assets', e.target.value)}
        />
        <TextInput
          type='number'
          label='Pasivo con terceros'
          value={props.form.third_party_liability}
          errorMessage=''
          onChange={e => props.onChange('analysis', 'third_party_liability', e.target.value)}
        />
        <TextInput
          type='number'
          label='Obligaciones financieras'
          value={props.form.financial_obligations}
          errorMessage=''
          onChange={e => props.onChange('analysis', 'financial_obligations', e.target.value)}
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


export default BalanceSheet;