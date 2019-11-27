import React, { Component } from 'react';
import './Sections.css';
import Feature1 from './assets/feature1.svg'
import Feature2 from './assets/featura2.svg'

class Section1 extends Component {
    render(){
        return (
					<div className="container-fluid d-flex align-items-center section-one px-5 pb-5">
						<div className="row d-flex justify-content-center">
							<div className="col-md-5 d-flex align-items-center px-5 text-left">
								<h1 className="section1-title">Conheça todos os nossos recursos</h1>
							</div>
							<div className="col-md-6">
								<div className="row">
									<div className="col-md-6 d-flex flex-column justify-content-center">
										<img className="pt-4" src={Feature1} alt="Economia"/>
										<h2 className="font-weight-bold py-2">Economia</h2>
										<p>Lorem ipsum dolor sit amet.</p>
									</div>
									<div className="col-md-6 d-flex flex-column justify-content-center">
										<img className="pt-4" src={Feature2} alt="Centralizado"/>
										<h2 className="font-weight-bold py-2">Centralizado</h2>
										<p>Lorem ipsum dolor sit amet.</p>
									</div>
								</div>

							</div>
						</div>
					</div>
        )
    }
}

export default Section1