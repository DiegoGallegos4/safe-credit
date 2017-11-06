import React from 'react';

const Intro = props => 
  <div className='container'>
    <h3>¿Quien solicita crédito?</h3>
    <div className="row">
      <div className="class-md-6">
        <button className="btn btn-default btn-md" onClick={props.nextPage}>
          Persona Natural
        </button>
      </div>
      <div className="class-md-6">
        <button className="btn btn-default btn-md" onClick={props.nextPage}>
          Empresa
        </button>
      </div>
    </div>
  </div>

export default Intro;