import React, { Component } from 'react';
import './Sections.css';
import Arrowleft from './assets/arrow-left.svg'
import Arrowright from './assets/arrow-right.svg'
import Cart from './assets/cart-black.svg'
import Cart2 from './assets/cart-white.svg'


function scrollTop () {
  window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth'
  });
}

class Section2 extends Component {

    render(){
        return (
					<div className="container-fluid section-two px-5">
						<div className="row">
              <div className="col-md-6">
                <div className="row d-flex justify-content-center justify-content-md-end">
                  <div className="col-12 col-sm-8 col-md-7 mr-md-4 left-plan d-flex justify-content-center flex-column">
                    <h2>Plano Indicado</h2>
                    <h5>Recursos ilimitados</h5>
                    <p>R$ <strong style={{fontSize: "3rem"}}>145</strong></p>
                    <p style={{color: "#747474"}} className="plan-text1 pt-3">Lorem ipsum dolor sit amet.</p>
                    <p style={{color: "#747474"}} className="plan-text py-3">Lorem ipsum dolor sit amet.</p>
                    <div className="btn-div d-flex justify-content-center">
                      <button type="button" class="btn-plan btn btn-light d-flex justify-content-center">
                        <img className="mr-3" src={Cart} alt=""/>
                        Comprar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
              <div className="row d-flex justify-content-center justify-content-md-start">
                  <div className="col-12 col-sm-8 col-md-7 ml-md-4 right-plan d-flex justify-content-center flex-column">
                  <h2 style={{color: "#177CFA"}}>Plano Indicado</h2>
                    <h5>Recursos ilimitados</h5>
                    <p>R$ <strong style={{fontSize: "3rem"}}>145</strong></p>
                    <p style={{color: "#747474"}} className="plan-text1 pt-3">Lorem ipsum dolor sit amet.</p>
                    <p style={{color: "#747474"}} className="plan-text py-3">Lorem ipsum dolor sit amet.</p>
                    <div className="btn-div d-flex justify-content-center">
                      <button type="button" class="btn-plan2 btn btn-light d-flex justify-content-center">
                        <img className="mr-3" src={Cart2} alt=""/>
                        Comprar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row  d-flex justify-content-center">
              <div className="col-12 col-md-10 footer-img">
                <div className="row">
                  <div className="col-4 d-flex align-items-center">
                   <img src={Arrowleft} alt=""/>
                  </div>
                  <div className="col-4 d-flex align-items-center justify-content-center flex-column">
                    <h1>Bom teste.</h1>
                    <button onClick={scrollTop} id="btn-top" type="button" class="btn btn-primary">Voltar para o topo</button>
                  </div>
                  <div className="col-4 d-flex align-items-center justify-content-end">
                  <img src={Arrowright} alt=""/>
                  </div>
                </div>
              </div>
            </div>
					</div>
        )
    }
}

export default Section2