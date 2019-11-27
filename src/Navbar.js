import React, { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'


class Navbar extends Component {
  render() {
    return (
      <div className="container-fluid py-5 navbar">
				<div className="row">
					<div className="col-7">
						<div className="row">
							<div className="col-6">LOGO</div>
							<div className="col-6 d-flex justify-content-around">
								<Link to="/inicio">Inicio</Link>
								<Link to="/inicio">Recursos</Link>
								<Link to="/inicio">Planos</Link>
								<Link to="/inicio">Blog</Link>
							</div>
						</div>
					</div>
					<div className="col-5">
						<div className="row d-flex justify-content-center">
							<div className="col-6 d-flex justify-content-around">
								<Link to="/inicio">Entrar</Link>
								<Link to="/inicio">Comprar</Link>
							</div>
						</div>
					</div>
				</div>
      </div>
    );
  }
}
export default Navbar;