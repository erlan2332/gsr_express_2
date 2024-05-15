import React from "react";
import './carousel.css'
import logo from '../img/logo/agrostroy.png'
import phone from '../img/icon/phone_vector.png'
import bg_screen from '../img/screen_bg/carousel_photo1.jpg'
import bg_screen2 from '../img/screen_bg/carousel_photo2.jpg'
import bg_screen3 from '../img/screen_bg/carousel_photo3.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Carousel = () => {
    return(
        <div>
            <div className="navbar">
                <div className="logo_navbar">
                    <img className="logo" src={logo} />
                        <div className="navBarTxt">
                            <div><a className="link_decor" href="#">О нас</a></div>
                            <div><a className="link_decor" href="#">Как мы работаем</a></div>
                            <div><a className="link_decor" href="#">Цены</a></div>
                            <div><a className="link_decor" href="#">Преимущества</a></div>
                            <div><a className="link_decor" href="#">Модели</a></div>
                            <div className="btn_nav"><a className="link_decor_btn" href="#">Заказать звонок</a>  </div>
                            <div><img className="phone"  src={phone} /></div>
                            <div className="phone_number"><a>+79957995600</a></div>
                        </div>
                    </div>
            </div>    
            <div id="carouselExampleIndicators" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src={bg_screen} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                        <img src={bg_screen2} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                        <img src={bg_screen3} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
        </div>
    )
}

export default Carousel