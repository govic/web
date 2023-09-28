import Link from 'next/link';
import React from 'react';

const Whychoose = () => {
    return (
        <section id="servicio" className="choose-section bg-neutral-100 section">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-xl-6">
              <div className="section__gap-bottom">
                <span className="d-block h5 lh-1 fw-semibold clr-base">
                  {" "}
                  ¿Para quienes es últil este servicio?{" "}
                </span>
                <h2 className="mt-2 mb-4">
                  {" "}
                 Desarrollo de aplicaciones web & Móviles de alta velocidad{" "}
                </h2>
                <p className="max-text-50">
                  {" "}
                  Desarrolla productos mínimos viables, proyectos relampago, testing de productos y prueba de conceptos, sistemas de gestión, aplicaciones para publico general, aplicaciones productivas y de organización, soluciones para pymes y grandes organizaciones{" "}
                </p>
              </div>
              <ul className="list list-xmd">
                <li>
                  <div className="border rounded-3 p-5 group d-inline-flex group-xmd group-row align-items-center">
                   
                    <div className="flex-grow-1">
                      <h5 className="mb-2"> Grandes organizaciones con necesidades de software para procesos internos </h5>
                      <p>
                        {" "}
                        Disminución de tiempos de desarrollo, esfuerzos y  riesgo de no cumplimiento de plazos{" "}
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="border rounded-3 p-5 group d-inline-flex group-xmd group-row align-items-center">
                  
                    <div className="flex-grow-1">
                      <h5 className="mb-2"> Emprendedores con ideas de negocio basadas en uso de Software </h5>
                      <p>
                        {" "}
                        Elaboración de productos mínimos viables para obtención de fondos, testeo con clientes. Agilizar ciclo de evolución del producto{" "}
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="border rounded-3 p-5 group d-inline-flex group-xmd group-row align-items-center">
                    
                    <div className="flex-grow-1">
                      <h5 className="mb-2"> Agencias Marketing</h5>
                      <p>
                        {" "}
                       Organizaciones que requieren soluciones de software rápidas para activaciones o eventos  en poco tiempo{" "}
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="border rounded-3 p-5 group d-inline-flex group-xmd group-row align-items-center">
                    
                    <div className="flex-grow-1">
                      <h5 className="mb-2"> Medianas y Grandes Empresas</h5>
                      <p>
                        {" "}
                       Organizaciones que su modelo de desarrollo de soluciones de software para uso interno o productos para sus clientes están basadas en el Outsoursing{" "}
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
             
            </div>
          </div>
        </div>
      </section>
    );
};

export default Whychoose;