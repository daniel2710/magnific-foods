import React from 'react'
import HamburgerMain from '../../assets/img/card-img.jpg';
import HamburgerEspagueti from '../../assets/img/hamburguesa-espagueti.jpg';
import HamburgerNormal from '../../assets/img/hamburguesa-normal.jpg';
import '../../styles/SectionFeatured.scss';
import Hamburger from './Hamburger';
import Pizza from './Pizza';

const Featured = () => {
  return (
    <div className='container-fluid'>
      <div className='row row-feactured'>
        <div className='row-text d-flex justify-content-between'>
          <h4 className=''>Destacados</h4>
          <u>Ver Más</u>
        </div>
        <div className='content-card mb-4 col-md-12 col-sm-6 d-flex justify-content-between'>

          <div className='card-featured'>
            <div className='body-card-featured'>
                <img src={HamburgerMain} width={150} alt='card'/>
                <p>pizza de doble queso con jamón y tomate (Bordes de queso) acompañado de papas a la francesa con gaseosa de 1.5L</p>
            </div>
            <div className='card-title mb-4'>
              <h2>Burger Medium</h2>
            </div>

            <div className='card-price-featured d-flex justify-content-between  align-items-center'>
              <h3>$34.900</h3>
              <strike className='strike-discount'>$45.000</strike>
              <button className='btn btn-success'>Comprar</button>
            </div>
          </div>



          <div className='card-featured'>
            <div className='body-card-featured'>
                <img src={HamburgerEspagueti} width={150} alt='card'/>
                <p>pizza de doble queso con jamón y tomate (Bordes de queso) acompañado de papas a la francesa con gaseosa de 1.5L</p>
            </div>
            <div className='card-title mb-4'>
              <h2>Burger Spaguetti</h2>
            </div>

            <div className='card-price-featured d-flex justify-content-between  align-items-center'>
              <h3>$34.900</h3>
              <strike className='strike-discount'>$45.000</strike>
              <button className='btn btn-success'>Comprar</button>
            </div>
          </div>


          <div className='card-featured'>
            <div className='body-card-featured'>
                <img src={HamburgerNormal} width={150} alt='card'/>
                <p>pizza de doble queso con jamón y tomate (Bordes de queso) acompañado de papas a la francesa con gaseosa de 1.5L</p>
            </div>
            <div className='card-title mb-4'>
              <h2>Burger Normal</h2>
            </div>

            <div className='card-price-featured d-flex justify-content-between align-items-center'>
              <h3>$34.900</h3>
              <strike className='strike-discount'>$45.000</strike>
              <button className='btn btn-success'>Comprar</button>
            </div>
          </div>

        </div>  


      {/* PIZZAS */}
      <Pizza/>

      {/* HAMBURGUESAS */}
      <Hamburger/>
        
         
      </div>
    </div>
  )
}

export default Featured