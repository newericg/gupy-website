import React, { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'
import Owli from './assets/Owli.svg'
import Arrowrightsmall from './assets/arrow-left-right-small.svg'

function scrollToResources() {
	document.querySelector('.section-one').scrollIntoView({ 
		behavior: 'smooth' 
	});
}

function scrollToBlog() {
	document.querySelector('.footer-img').scrollIntoView({ 
		behavior: 'smooth' 
	});
}

function scrollToPlans() {
	document.querySelector('.left-plan').scrollIntoView({ 
		behavior: 'smooth' 
	});
}

class Navbar extends Component {


  render() {
    return (
      <div className="container-fluid py-5 navbar">
				<div className="row">
					<div className="col-7">
						<div className="row">
							<div className="col-6">
								<img src={Owli} alt="Owli-logo"/>
							</div>
							<div className="col-6 d-none d-md-flex justify-content-around align-items-center">
								<Link to="/">Inicio</Link>
								<Link  onClick={scrollToResources} >Recursos</Link>
								<Link onClick={scrollToPlans}>Planos</Link>
								<Link onClick={scrollToBlog} >Blog</Link>
							</div>
						</div>
					</div>
					<div className="col-5">
						<div className="row d-flex justify-content-center">
							<div className="col-6 d-flex justify-content-around align-items-center">
								<Link to="/">Entrar</Link>
								<Link className="buy-link py-2 px-4 ml-4 d-flex" to="/inicio">
									Comprar
									<img className="pl-3" src={Arrowrightsmall} alt=""/>
								</Link>
							</div>
						</div>
					</div>
				</div>
      </div>
    );
  }
}
export default Navbar;