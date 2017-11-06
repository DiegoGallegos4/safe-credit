import React from 'react';
import TextInput from '../../text-input';

const ProfitNLoss = props => 
  <div className='container'>
    <h3>Ganancia y Perdida</h3>
    <div className="row">
      <div className="col-md-12">
        <h4>Datos para indicadores de Rentabilidad</h4>
      </div>
      <div className="col-md-12">
        <h4>Datos para indicadores de Endeudamiento</h4>
      </div>
      <div className="col-md-12">
        <TextInput
          type='number'
          label='Ventas netas'
          value={props.form.net_sales}
          errorMessage=''
          onChange={props.onChange}
        />
        <TextInput
          type='number'
          label='Margen Bruto'
          value={props.form.gross_margin}
          errorMessage=''
          onChange={props.onChange}
        />
        <TextInput
          type='number'
          label='Margen neto'
          value={props.form.net_margin}
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

export default ProfitNLoss;
