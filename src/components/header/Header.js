import React from 'react'
import ImgHamburger from '../../assets/img/hamburger.png'

const Header = () => {
  return (
    <div className='container-fluid p-0 m-0'>
      <div className='row'>
          <img className='col-md-12' alt='hamburger' src={ImgHamburger} />
      </div>
    </div>
  )
}

export default Header