import React from 'react'
import PizzaOne from '../../assets/img/pizza1.jpg';
import PizzaTwo from '../../assets/img/pizza2.png';
import PizzaThree from '../../assets/img/pizza3.png';
import PizzaFour from '../../assets/img/pizza4.jpg';
import PizzaFive from '../../assets/img/pizza5.png';
import PizzaSix from '../../assets/img/pizza5.png';
import '../../styles/SectionFeatured.scss';

const Pizza = () => {
  return (
    <>
        {/* pizzas */}

        <div className='row-text mt-4 d-flex justify-content-between'>
          <h4 className=''>Pizzas</h4>
          <u>Ver Más</u>
        </div>
        <div className='content-card mb-4 col-md-12 col-sm-6 d-flex justify-content-between'>

          <div className='card-featured'>
            <div className='body-card'>
                <img src={PizzaOne} width={150} alt='card'/>
                <div className='info-card'>
                  <h5>Pizza de la casa</h5>
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
                <img src={PizzaTwo} width={150} alt='card'/>
                <div className='info-card'>
                  <h5>Pizza de la casa</h5>
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
                <img src={PizzaThree} width={150} alt='card'/>
                <div className='info-card'>
                  <h5>Pizza de la casa</h5>
                  <p>pizza de doble queso con jamón y tomate (Bordes de queso).</p>
                  <div className='card-price d-flex justify-content-end  align-items-center'>
                    <h3>$34.900</h3>
                    <button className='btn btn-success'>Comprar</button>
                  </div>
                </div>
            </div>
          </div>
      
        </div> 

        <div className='content-card mb-4 col-md-12 col-sm-6 d-flex justify-content-between'>

          <div className='card-featured'>
            <div className='body-card'>
                <img src={PizzaFour} width={150} alt='card'/>
                <div className='info-card'>
                  <h5>Pizza de la casa</h5>
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
                <img src={PizzaFive} width={150} alt='card'/>
                <div className='info-card'>
                  <h5>Pizza de la casa</h5>
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
                <img src={PizzaSix} width={150} alt='card'/>
                <div className='info-card'>
                  <h5>Pizza de la casa</h5>
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

export default Pizza