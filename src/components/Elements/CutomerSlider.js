import React, {Component} from 'react';
import Slider from "react-slick";

class CustomerSlider extends Component{
    render(){
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            centerPadding: '100px',
            responsive: [
                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                  }
                },
                {
                  breakpoint: 700,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
          };
        return(
            <section className="testimonial-area" id="testimonial">
                <div className="testimonial-left">
                    <div className="test-content">
                        <div className="sec-title wow fadeInUp" data-wow-delay="400ms">
                            <h2>Nuestros Colaboradores</h2>
                            <p>Estas empresas colaboran con nosotros</p>
                        </div>
                    </div>
                </div>
                <div className="testimonial-right">
                    <Slider {...settings} className="testimonials_slider">
                        <div className="item">
                            <div className="media">
                                <div className="media-left">
                                    <img className="img-circle" src={require("../../assets/image/galicloud.png")} alt="" />
                                </div>
                                <div className="media-body">
                                    <h4>Galicloud</h4>
                                    <a href='https://www.galicloud.com/'>Desarrollo web</a>
                                </div>
                            </div>
                            <p>Empresa de desarrollo web epecializada en Drupal y React. Últimas tecnologías web al servicio de las empresas más exigentes. </p>
                        </div>
                        <div className="item">
                            <div className="media">
                                <div className="media-left">
                                    <img className="img-circle" src={require("../../assets/image/SailingSur.png")} alt="" />
                                </div>
                                <div className="media-body">
                                    <h4>Sailing Sur</h4>
                                    <a href='https://www.sailingsurstore.com/'>Tienda náutica online</a>
                                </div>
                            </div>
                            <p>Esta tienda online de material náutico colabora como patrocinador de los eventos de eSailing España.</p>
                        </div>
                        <div className="item">
                            <div className="media">
                                <div className="media-left">
                                    <img className="img-circle" src={require("../../assets/image/sailranks.png")} alt="" />
                                </div>
                                <div className="media-body">
                                    <h4>SailRanks</h4>
                                    <a href="https://sailranks.com">Gestión de Resultados</a>
                                </div>
                            </div>
                            <p>Este nuevo Sistema de Gestión de Resultados está especializado en el eSailing. Solución rápida y eficaz para la realización de tus regatas.</p>
                        </div>
                        <div className="item">
                            <div className="media">
                                <div className="media-left">
                                    <img className="img-circle" src={require("../../assets/image/testimonial1.png")} alt="" />
                                </div>
                                <div className="media-body">
                                    <h5>Anwar Ali</h5>
                                    <h6>Art Dirrector</h6>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do eiusmod tempor indunt ut labore et laborused sed do eiusmod tempor incididunt ut labore et laborused.</p>
                        </div>
                        <div className="item">
                            <div className="media">
                                <div className="media-left">
                                    <img className="img-circle" src={require("../../assets/image/testimonial1.png")} alt="" />
                                </div>
                                <div className="media-body">
                                    <h5>Anwar Ali</h5>
                                    <h6>Art Dirrector</h6>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do eiusmod tempor indunt ut labore et laborused sed do eiusmod tempor incididunt ut labore et laborused.</p>
                        </div>
                        <div className="item">
                            <div className="media">
                                <div className="media-left">
                                    <img className="img-circle" src={require("../../assets/image/testimonial1.png")} alt="" />
                                </div>
                                <div className="media-body">
                                    <h5>Anwar Ali</h5>
                                    <h6>Art Dirrector</h6>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do eiusmod tempor indunt ut labore et laborused sed do eiusmod tempor incididunt ut labore et laborused.</p>
                        </div>
                    </Slider>
                </div>
            </section>
        )
    }
}
export default CustomerSlider;