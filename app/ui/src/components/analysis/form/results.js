import React from 'react';


const Results = props => (
  <div className="container">
    <div className="row">
      <table className="table">
        <thead class='thead-light'>
          <tr colSpan='4' className='text-center'>
            <th colSpan="4">TABLA DE RESULTADOS</th>
          </tr>
          <tr className='text-center'>
            <th colSpan='2'>Indicadores</th>
            <th>Resultado</th>
            <th>Interpretacion</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>I.</td>
            <td colSpan='3'><b>Indicadores de liquidez</b></td>
          </tr>
          <tr>
            <td>1</td>
            <td>Razon Corriente = activo corriente / pasivo corriente</td>
            <td>{props.results.current_ratio}</td>
            <td>Indica por cada peso de pasivo corriente que debo, cuantos pesos tengo en 
            activo corriente para cubrir mi obligacion</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Capital neto de trabajo</td>
            <td>{props.results.net_work_capital}</td>
            <td></td>
          </tr>
          <tr>
            <td>II.</td>
            <td colSpan='3'><b>Indicadores de rentabilidad</b></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Margen bruto = Utilidad bruta / ventas netas</td>
            <td>{props.results.gross_margin}</td>
            <td>Por cada peso vendido, cuanto genero para cubrir gastos operacionales y no operacionales</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Margen neto = utilidad neta / ventas netas</td>
            <td>{props.results.net_margin}</td>
            <td>Por cada peso vendido cuanto genero de utilidad neta, despues de costos y gastos</td>
          </tr>
          <tr>
            <td>III.</td>
            <td colSpan='3'><b>Indicadores de endeudamiento</b></td>
          </tr>
          <tr>
            <td>5</td>
            <td>Nivel de endeudamiento = pasivo con terceros / total activos</td>
            <td>{props.results.debt_level}</td>
            <td>Por cada peso invertido en activos, cuanto es financiado por terceros y que garantia presta la empresa a los acreedores</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Endeudamiento financiero = Obligaciones finaiceras / ventas netas</td>
            <td>{props.results.financial_debt}</td>
            <td>Por cada peso vendido, cuanto es financiado por acreedores</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td><b>Aceptacion: Si/No</b></td>
            <td>{props.results.acceptance}</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
    {/*Button Row*/}
    <div className="row d-flex justify-content-end" style={{marginTop: 40}}>
      <div className="col-md-4 d-flex justify-content-end">
        <button className="btn btn-secondary btn-md" onClick={props.previousPage}>
          Anterior
        </button>
      </div>
      <div className="col-md-4 d-flex justify-content-end">
        <button className="btn btn-secondary btn-md" onClick={props.exit}>
          Siguiente
        </button>
      </div>
    </div>
  </div>

)

export default Results;