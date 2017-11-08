import React from 'react';

const Intro = props => 
  <div className='container'>
    <h3 className='text-center' style={{marginTop: 30}}>¿Quien solicita crédito?</h3>
    <div className="row text-center" style={{marginTop: 80}}>
      <div className="col-md-6">
        <button className="btn btn-secondary btn-md" onClick={props.nextPage}>
          Persona Natural
        </button>
      </div>
      <div className="col-md-6">
        <button className="btn btn-secondary btn-md" onClick={props.nextPage}>
          Empresa
        </button>
      </div>
    </div>
  </div>

export default Intro;