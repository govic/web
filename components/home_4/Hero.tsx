import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Hero = () => {
  return (
    <section className="hero-4">
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-12">
            <Swiper
              dir="ltr"
              slidesPerView={1}
              spaceBetween={30}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay:2500,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
              }}
              pagination={{
                el: ".hero-slider-2 .swiper-pagination",
                type: "fraction",
              }}
              navigation={{
                nextEl: ".hero-slider-2 .swiper-button-next",
                prevEl: ".hero-slider-2 .swiper-button-prev",
              }}
              effect="fade"
              fadeEffect={{
                crossFade:false
              }}
              modules={[Navigation, Autoplay, EffectFade, Pagination]}
              className="hero-slider-2"
              >
              <SwiperSlide>
                <section id="inicio">
                <div className="hero-slider-2__item">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-10 col-lg-6">
                        <div className="text-center text-md-start">
                          <span className="d-block h5 lh-1 fw-semibold clr-base">
                            {" "}
                            Desarrolladores de Software Experimentados  + IA{" "}
                          </span>
                          <h1 className="mt-5 mb-5">
                            {" "}
                            Construcción de Software{" "}
                            <span className="d-inline clr-base">Inteligente</span>
                          </h1>
                          <p className="mb-8 xl-text max-text-40">
                            {" "}
                           Desarrollamos software a medida a alta velocidad y bajo costo. Gracias a la incorporación de Inteligencia Artificial a nuestros procesos de construcción de software. Optimizamos y automatizamos etapas.Logrando resultados en una fracción del tiempo normalmente necesario.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="hero-slider-2__bg"
                    style={{
                      backgroundImage: "url(/images/slider-2-img-1.png)",
                    }}></div>
                </div>
               </section>
              </SwiperSlide>
              <SwiperSlide>
                <div className="hero-slider-2__item">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-10 col-lg-6">
                        <div className="text-center text-md-start">
                          <span className="d-block h5 lh-1 fw-semibold clr-base">
                            {" "}
                            Desarrollos de Alta Velocidad{" "}
                          </span>
                          <h1 className="mt-5 mb-5">
                            {" "}
                            Creatividad y Experiencia Humanas {" "}
                            <span className="d-inline clr-base">Velocidad IA</span>
                          </h1>
                          <p className="mb-8 xl-text max-text-40">
                            {" "}
                           Nuestro equipo experto es el encargado de elaborar las directrices claves en: UI/UX, Arquitectura de aplicación, Modelos de datos, Parametros de calidad, entre otros. Dejando las tareas basicas e intermedias a nuestras herramientas de apoyo IA.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="hero-slider-2__bg"
                    style={{
                      backgroundImage: "url(/images/slider-2-img-2.png)",
                    }}></div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="hero-slider-2__item">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-10 col-lg-6">
                        <div className="text-center text-md-start">
                          <span className="d-block h5 lh-1 fw-semibold clr-base">
                            {" "}
                           Infraestructuras / Tecnologías /  Sistemas Operativos{" "}
                          </span>
                          <h1 className="mt-5 mb-5">
                            {" "}
                            Aplicaciones Móviles{" "}
                            <span className="d-inline clr-base">& WEB</span>
                          </h1>
                          <p className="mb-8 xl-text max-text-40">
                            {" "}
                            Desarrollamos soluciones de software para diversas plataformas y sistemas operativos.Preparadas para ser desplegadas en la infraestructura que se requiera{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="hero-slider-2__bg"
                    style={{
                      backgroundImage: "url(/images/slider-2-img-3.png)",
                    }}></div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="hero-slider-2__item">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-10 col-lg-6">
                        <div className="text-center text-md-start">
                          <span className="d-block h5 lh-1 fw-semibold clr-base">
                            {" "}
                           {" "}
                          </span>
                          <h1 className="mt-5 mb-5">
                            {" "}
                            Resultados a Tiempo{" "}
                            <span className="d-inline clr-base">Productos de calidad</span>
                          </h1>
                          <p className="mb-8 xl-text max-text-40">
                            {" "}
                            Obtén en fracciones de tiempo resultados del proceso de desarrollo, para iniciar los procesos de prueba y testear con tus usuarios.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="hero-slider-2__bg"
                    style={{
                      backgroundImage: "url(/images/slider-2-img-4.png)",
                    }}></div>
                </div>
              </SwiperSlide>

              <div className="container">
                <div className="row">
                  <div className="col-md-6 col-xl-3">
                    <div className="position-relative">
                      <div className="swiper-button swiper-button-next"></div>
                      <div className="swiper-button swiper-button-prev"></div>
                      <div className="swiper-pagination"></div>
                    </div>
                  </div>
                </div>
              </div>
              <span className="hero-slider-2__indicator"> SCROLL DOWN </span>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
