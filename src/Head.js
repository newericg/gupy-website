import React, { Component } from 'react';
import './Head.css';


class Navbar extends Component {
  render() {
    return (
      <div className="container-fluid head">
				<div className="row head-content d-flex justify-content-center">
					<div className="col-12 col-sm-10 col-md-6" style={{minHeight:"80vh"}}>
						<div className="row d-flex justify-content-center align-items-center">
							<div className="col-12 col-sm-10 col-md-8 d-flex justify-content-around flex-column head-left text-md-left align-items-center align-items-md-start">
								<h1 className="head-title">A nova área do cliente.</h1>
								<h2 className="head-subtitle py-3">Aplicativo para locatários e proprietários de imóveis</h2>
								<button type="button" class="btn-head btn btn-light">Quero fazer parte  ></button>
							</div>
						</div>
					</div>
					<div className="col-12 col-sm-8 col-md-6">
						<div className="row d-flex justify-content-center align-items-center">
							<div className="col-10 col-md-6 head-right">
								<div className="row d-flex justify-content-center py-4">
									<div className="col-12">
										<h3>Cadastre sua imobiliária</h3>
									</div>
									<div className="col-12">
										<input className="form-input" type="text" placeholder="Nome"/>
									</div>
									<div className="col-12">
										<input className="form-input" type="text" placeholder="Email"/>
									</div>
									<div className="col-12">
										<input className="form-input" type="text" placeholder="Telefone"/>
									</div>
									<div className="col-12 d-flex justify-content-center">
										<button type="button" class="btn-send btn btn-primary">Enviar</button>
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>
      </div>
    );
  }
}
export default Navbar;