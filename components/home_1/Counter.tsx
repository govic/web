import Link from 'next/link';
import { useState } from 'react';
import ModalVideo from 'react-modal-video'

const Counter = () => {
  const [isOpen, setOpen] = useState(false)
    return (
        <div className="counter-section-1">
          <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="muczNvx9fgg"
        onClose={() => setOpen(false)}
      />
          <div className="counter-section-1__top bg-base section">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-8">
                  <div className="text-center">

                    <h2 className="mt-10 mb-5 clr-neutral">
                      {" "}
                      Experiencia y conocimiento al servicio del desarrollo de soluciones TI{" "}
                    </h2>
                    <p className="clr-neutral t-short-para mx-auto mb-10">
                      {" "}
                      Equipo dedicado desde 2011 a uso de tecnologías de la información para desarrollo de soluciones de software Web & Mobile & StandAlone y Productos TI con componentes de Innovación para: simulación basada en Realidad Virtual, Soluciones de Realidad Aumentada, Soluciones para Industria de construcción, Forestal , Educación entre otras.  {" "}
                    </p>
               
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="counter-section-1__bottom section">
            <div className="container-xl">
              <div className="row g-3 justify-content-center">
                <div className="col-sm-6 col-lg-3">
                  <div className="group group-xmd group-row align-items-center bg--white t-shadow p-4 rounded-3 h-100">
                    <div className="icon-box icon-box--md circle bg-secondary flex-shrink-0">
                      <img src="/images/icon-7.png" alt="image" />
                    </div>
                    <div className="group group-xxs">
                      <h3>12+</h3>
                      <p className="sm-text"> Años de experiencia </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="group group-xmd group-row align-items-center bg--white t-shadow p-4 rounded-3 h-100">
                    <div className="icon-box icon-box--md circle bg-danger flex-shrink-0">
                      <img src="/images/icon-8.png" alt="image" />
                    </div>
                    <div className="group group-xxs">
                      <h3>215+</h3>
                      <p className="sm-text"> Proyectos </p>
                    </div>
                  </div>
                </div>

           
              </div>
            </div>
          </div>
        </div>
    );
};

export default Counter;