import React from 'react'
import Hamburger1 from '../../assets/img/hamburger1.jpg';
import Hamburger2 from '../../assets/img/hamburger2.jpg';
import Hamburger3 from '../../assets/img/hamburger3.jpg';
import '../../styles/SectionFeatured.scss';

const Hamburger = () => {
  return (
    <>
        <div className='row-text mt-4 d-flex justify-content-between'>
          <h4 className=''>Hamburgesa</h4>
          <u>Ver Más</u>
        </div>
        <div className='content-card mb-4 col-md-12 col-sm-6 d-flex justify-content-between'>

          <div className='card-featured'>
            <div className='body-card'>
                <img src={Hamburger1} width={150} alt='card'/>
                <div className='info-card'>
                  <h5>Burger</h5>
                  <p>pizza de doble queso con jamón y tomate (Bordes de queso).</p>
                  <div className='card-price d-flex justify-content-end  align-items-center'>
                    <h3>$34.900</h3>
                    <button className='btn btn-success'>Comprar</button>
                  </div>
                </div>
            </div>
          </div>



          <div className='card-featured'>
            <div className='body-card'>
                <img src={Hamburger2} width={150} alt='card'/>
                <div className='info-card'>
                  <h5>Burger</h5>
                  <p>pizza de doble queso con jamón y tomate (Bordes de queso).</p>
                  <div className='card-price d-flex justify-content-end  align-items-center'>
                    <h3>$34.900</h3>
                    <button className='btn btn-success'>Comprar</button>
                  </div>
                </div>
            </div>
          </div>


          <div className='card-featured'>
            <div className='body-card'>
                <img src={Hamburger3} width={150} alt='card'/>
                <div className='info-card'>
                  <h5>Burger</h5>
                  <p>pizza de doble queso con jamón y tomate (Bordes de queso).</p>
                  <div className='card-price d-flex justify-content-end  align-items-center'>
                    <h3>$34.900</h3>
                    <button className='btn btn-success'>Comprar</button>
                  </div>
                </div>
            </div>
          </div>

        </div> 
    </>
  )
}

export default Hamburger