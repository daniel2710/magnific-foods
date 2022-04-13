import React from 'react'
import {BsFacebook,BsInstagram,BsTwitter,BsYoutube} from 'react-icons/bs'
import '../../styles/Footer.scss'

const Footer = () => {
  return (
    <>
        <footer class="footer text-center text-lg-start text-muted">
        <section
            class="d-flex justify-content-center justify-content-lg-evenly p-4 border-bottom"
        >
            <div class="me-5 d-none d-lg-block ">
            <span>Síguenos en nuestras redes sociales:</span>
            </div>

            <div>
            <a href="/" class="me-4 text-reset">
                <i class="fab fa-facebook-f"><BsFacebook /></i>
            </a>
            <a href="/" class="me-4 text-reset">
                <i class="fab fa-google"><BsInstagram/></i>
            </a>
            <a href="/" class="me-4 text-reset">
                <i class="fab fa-instagram"><BsTwitter/></i>
            </a>
            <a href="/" class="me-4 text-reset">
                <i class="fab fa-linkedin"><BsYoutube/></i>
            </a>
            </div>
        </section>

        <section class="">
            <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                    <i class="fas fa-gem me-3"></i>Ventual
                </h6>
                <p>
                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit.
                </p>
                </div>

                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                    Products
                </h6>
                <p>
                    <a href="#!" class="text-reset">Hamburguesas</a>
                </p>
                <p>
                    <a href="#!" class="text-reset">Pizzas</a>
                </p>
                <p>
                    <a href="#!" class="text-reset">Salchipapas</a>
                </p>
                <p>
                    <a href="#!" class="text-reset">Chuzos</a>
                </p>
                </div>

                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                    Useful links
                </h6>
                <p>
                    <a href="#!" class="text-reset">Hamburguesas</a>
                </p>
                <p>
                    <a href="#!" class="text-reset">Pizzas</a>
                </p>
                <p>
                    <a href="#!" class="text-reset">Chuzos</a>
                </p>
                <p>
                    <a href="#!" class="text-reset">Salchipapas</a>
                </p>
                </div>

                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                    Contact
                </h6>
                <p><i class="fas fa-home me-3"></i> Barranquilla, Colombia</p>
                <p>
                    <i class="fas fa-envelope me-3"></i>
                    info@example.com
                </p>
                <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
                <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
                </div>
            </div>
            </div>
        </section>

        <div class="text-center p-4">
            by: daniel2710es@gmail.com
        </div>
    </footer>
    </>
  )
}

export default Footer