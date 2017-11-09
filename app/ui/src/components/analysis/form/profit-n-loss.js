import React from 'react';
import TextInput from '../../text-input';

const ProfitNLoss = props => 
  <div className='container'>
    <h3>Ganancia y Perdida</h3>
    <div className="row">
      <div className="col-md-12" style={{marginTop: 10, marginBottom: 15}}>
        <h6>Datos para indicadores de Rentabilidad</h6>
      </div>
      <div className="col-md-6">
        <TextInput
          type='number'
          label='Ventas netas'
          value={props.form.net_sales}
          errorMessage=''
          onChange={e => props.onChange('analysis', 'net_sales', e.target.value)}
        />
        <TextInput
          type='number'
          label='Utilidad Bruto'
          value={props.form.gross_utility}
          errorMessage=''
          onChange={e => props.onChange('analysis', 'gross_utility', e.target.value)}
        />
        <TextInput
          type='number'
          label='Utilidad neto'
          value={props.form.net_utility}
          errorMessage=''
          onChange={e => props.onChange('analysis', 'net_utility', e.target.value)}
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

export default ProfitNLoss;
