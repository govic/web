import Link from 'next/link';
import React, { useState } from 'react';

const Pricing = () => {
  const [checked, SetChecked] = useState(true);
  const handleChange = (e) => {
    SetChecked(e.target.checked)
  }
    return (
        <div className="pricing-section">
        <div className="section">
          <div className="section__gap-bottom">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-9 col-xl-8">
                  <span className="d-block h5 lh-1 fw-semibold clr-base text-center">
                    {" "}
                    Esfuerzos acotados, Alta Velocidad.{" "}
                  </span>
                  <h2 className="mt-5 mb-5 text-center">
                    {" "}
                   Tabla de Esfuerzos{" "}
                  </h2>
                  <p className="text-center mx-auto max-text-70">
                    {" "}
                    Nuestro proceso de desarrollo está diseñado para obtener un alto rendimiento y calidad  haciendo uso de la automatización de tareas en el proceso de construcción de secciones clave que normalmente representan hasta un 60% de los esfuerzos del proyecto{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row g-6">
              
              <div className="col-lg-12 col-xl-12">
                <div className="price-card-1 bg-neutral-100 px-4 py-8 p-md-12 py-lg-8 px-lg-4 p-xl-8">
                  <div className="price-card-1__head flex-row flex-wrap justify-content-between">
                    <h4> Listado Referencial </h4>
                    <div className="group group-xs group-row align-items-center justify-content-end">
                   
                    </div>
                  </div>
                  <div className="price-card-1__body">
                    <ul className="list">
                      <li>
                        <div className="custom-checkbox">
                          <label className="custom-checkbox__wrapper">
                            <span className="flex-grow-1">
                             
                              <span className="">
                                <span className="h5 m-0"> Aplicación móvil Básica </span>
                               
                              </span>
                              <p className="text  max-text-70">5 secciones + Login RRSS + Diseño UI/UX a medida</p>
                            </span>
                            <span className="flex-shrink-0">
                              <span className="custom-checkbox__subtitle d-block flex-shrink-0 h5 m-0">
                                {" "}
                                Desde 25 UF - 20 días{" "}
                              </span>
                            </span>
                          </label>
                        </div>
                      </li>
                      <li>
                      <div className="custom-checkbox">
                          <label className="custom-checkbox__wrapper">
                            <span className="flex-grow-1">
                             
                              <span className="">
                                <span className="h5 m-0"> Aplicación móvil Media </span>
                                <p className="text  max-text-70">7 secciones + Login RRSS/Gestión Interna + App Web de Gestión de contenidos + Diseño UI/UX a medida</p>
                          
                              </span>
                                </span>
                            <span className="flex-shrink-0">
                              <span className="custom-checkbox__subtitle d-block flex-shrink-0 h5 m-0">
                                {" "}
                                Desde 45 UF - 30 Días{" "}
                              </span>
                            </span>
                          </label>
                        </div>
                      </li>
                      <li>
                      <div className="custom-checkbox">
                          <label className="custom-checkbox__wrapper">
                            <span className="flex-grow-1">
                             
                              <span className="">
                                <span className="h5 m-0"> Aplicación móvil Avanzada </span>
                               
                              </span>
                              <p className="text  max-text-70">10 secciones + Login RRSS/Gestión Interna+ Dashboard de Monitoreo & Gestión de contenidos/usuarios+ Personalización + Diseño UI/UX a medida</p>
                            </span>
                            <span className="flex-shrink-0">
                              <span className="custom-checkbox__subtitle d-block flex-shrink-0 h5 m-0">
                                {" "}
                                Desde 75 UF - 50 días{" "}
                              </span>
                            </span>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="custom-checkbox">
                          <label className="custom-checkbox__wrapper">
                            <span className="flex-grow-1">
                             
                              <span className="">
                                <span className="h5 m-0"> Aplicacion Web  Media </span>
                               
                              </span>
                              <p className="text  max-text-70">10 secciones + dashboard de Información + flujos de gestión de información + Sistema de Control de accceso    </p>
                            </span>
                            <span className="flex-shrink-0">
                              <span className="custom-checkbox__subtitle d-block flex-shrink-0 h5 m-0">
                                {" "}
                                Desde 65 UF - 45 días{" "}
                              </span>
                            </span>
                          </label>
                        </div>
                      </li>
                      <li>
                      <div className="custom-checkbox">
                          <label className="custom-checkbox__wrapper">
                            <span className="flex-grow-1">
                             
                              <span className="">
                                <span className="h5 m-0"> Aplicacion Web Avanzada </span>
                               
                              </span>
                              <p className="text  max-text-70">14 secciones + dashboard de información múltiple+ flujos avanzados de gestión de información + Sistema de Control de accceso y multiperfil   </p>
                            </span>
                            <span className="flex-shrink-0">
                              <span className="custom-checkbox__subtitle d-block flex-shrink-0 h5 m-0">
                                {" "}
                                Desde 100 UF - 60 días{" "}
                              </span>
                            </span>
                          </label>
                        </div>
                        </li>
                      
                      
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
        </div>
       
      </div>
    );
};

export default Pricing;