import React, { Component } from 'react';
import './Sections.css';


class Section2 extends Component {
    render(){
        return (
					<div className="container-fluid section-two px-5">
						<div className="row">
              <div className="col-md-6">
                <div className="row d-flex justify-content-end">
                  <div className="col-7 mr-4 left-plan d-flex justify-content-center  flex-column">
                    <h2>Plano Indicado</h2>
                    <h3>Recursos ilimitados</h3>
                    <p>R$ 145</p>
                    <p className="plan-text">Lorem ipsum dolor sit amet.</p>
                    <p className="plan-text">Lorem ipsum dolor sit amet.</p>
                    <button type="button" class="btn btn-light">Comprar</button>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
              <div className="row d-flex justify-content-start">
                  <div className="col-7 ml-4 right-plan">

                  </div>
                </div>
              </div>
            </div>
            <div className="row footer-img d-flex justify-content-center">
              <div className="col-10">
                <div className="row">
                  <div className="col-4 d-flex align-items-center">
                    SETA
                  </div>
                  <div className="col-4 d-flex align-items-center justify-content-center flex-column">
                    <h1>Bom teste.</h1>
                    <button type="button" class="btn btn-primary">Voltar para o topo</button>
                  </div>
                  <div className="col-4 d-flex align-items-center justify-content-end">
                    SETA
                  </div>
                </div>
              </div>
            </div>
					</div>
        )
    }
}

export default Section2