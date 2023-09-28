import Link from 'next/link';
import React from 'react';

const About = () => {
    return (
        <div className="section" id="proceso">
        <div className="container">
          <div className="row g-4">
            <div className="col-sm-6 col-lg-9 col-xl-3">
              <div className="section__gap-bottom pb-sm-0">
                <span className="d-block h5 lh-1 fw-semibold clr-base">
                  {" "}
                  ¿Qué es lo que hacemos?{" "}
                </span>
                <h2 className="mt-2 mb-4"> Smart Develop </h2>
                <p className="mb-5 max-text-40">
                  {" "}
                  Aprovechamos el potencial creativo y experto humano para transformar las ideas y necesidades en directrices de un proyecto. Utilizamos la velocidad de la Inteligencia Artifical para resolver las problematicas de implementación.Creando así un producto de software de calidad, que responde a las necesidades con mínimos esfuerzos{" "}
                </p>
               
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="service-card-3">
                <div className="service-card-3__img">
                  <img
                    src="/images/service-img-5.png"
                    alt="images"
                    className="img-fluid service-card-3__img-is"
                  />
                </div>
                <div className="service-card-3__content">
                  <h5>
                    <Link
                      href="service-details-1"
                      className="service-card-3__link">
                      <span className="h6 service-card-3__subtitle clr-dark">
                        {" "}
                        UI/UX - Modelado de Datos{" "}
                      </span>
                      <span className="service-card-3__title">
                        {" "}
                        Arquitectura{" "}
                      </span>
                    </Link>
                  </h5>
                  <Link
                    href="service-details-1"
                    className="t-link service-card-3__btn">
                    <span className="material-symbols-rounded mat-icon fw-100 size-48">
                      {" "}
                      trending_flat{" "}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="service-card-3">
                <div className="service-card-3__img">
                  <img
                    src="/images/service-img-6.png"
                    alt="images"
                    className="img-fluid service-card-3__img-is"
                  />
                </div>
                <div className="service-card-3__content">
                  <h5>
                    <Link
                      href="service-details-1"
                      className="service-card-3__link">
                      <span className="h6 service-card-3__subtitle clr-dark">
                        {" "}
                        Construcción de directrices{" "}
                      </span>
                      <span className="service-card-3__title">
                        {" "}
                        Elaboración de base del proyecto{" "}
                      </span>
                    </Link>
                  </h5>
                  <Link
                    href="service-details-1"
                    className="t-link service-card-3__btn">
                    <span className="material-symbols-rounded mat-icon fw-100 size-48">
                      {" "}
                      trending_flat{" "}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="service-card-3">
                <div className="service-card-3__img">
                  <img
                    src="/images/service-img-7.png"
                    alt="images"
                    className="img-fluid service-card-3__img-is"
                  />
                </div>
                <div className="service-card-3__content">
                  <h5>
                    <Link
                      href="service-details-1"
                      className="service-card-3__link">
                      <span className="h6 service-card-3__subtitle clr-dark">
                        {" "}
                        Traspaso de diseño de software y directrices{" "}
                      </span>
                      <span className="service-card-3__title"> IA develop </span>
                    </Link>
                  </h5>
                  <Link
                    href="service-details-1"
                    className="t-link service-card-3__btn">
                    <span className="material-symbols-rounded mat-icon fw-100 size-48">
                      {" "}
                      trending_flat{" "}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default About;