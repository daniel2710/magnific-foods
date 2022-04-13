import React from 'react'
import ServiceOne from '../../assets/icon/delivery-man.png';
import ServiceTwo from '../../assets/icon/fast-delivery.png';
import ServiceThree from '../../assets/icon/food-service.png';
import '../../styles/Services.scss'

const Services = () => {
  return (
    <div className='container-fluid'>
      <div className='row row-feactured'>
          <h1 className='text-center text-bold mb-4'><strong>Servicios</strong></h1>
    
        <div className='content-card mt-4 col-md-12 col-sm-6 d-flex justify-content-between'>

          <div className='card-featured-service'>
            <div className='body-card-featured-service'>
                <img className='icon-service' src={ServiceOne} width={100} alt='card'/>
                <p>Ofrecemos servicio a domicilio a todo el norte de la ciudad de Barranquilla.</p>
            </div>
            <div className='card-title mb-4'>
              <h2>Domicilios</h2>
            </div>

          </div>



          <div className='card-featured-service'>
            <div className='body-card-featured-service'>
                <img className='icon-service' src={ServiceTwo} width={100} alt='card'/>
                <p>Ofrecemos servicio a domicilio a todo el norte de la ciudad de Barranquilla.</p>
            </div>
            <div className='card-title mb-4'>
              <h2>Puntualidad en los pedidos</h2>
            </div>

          </div>



          <div className='mb-4 card-featured-service'>
            <div className='body-card-featured-service'>
                <img className='icon-service' src={ServiceThree} width={100} alt='card'/>
                <p>Ofrecemos servicio a domicilio a todo el norte de la ciudad de Barranquilla.</p>
            </div>
            <div className='card-title mb-4'>
              <h2>Dinero seguro</h2>
            </div>
          </div>

        </div>  

        <button className='btn mt-4 btn-services'>Contactanos</button>
        
         
      </div>
    </div>
  )
}

export default Services