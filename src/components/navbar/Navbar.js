import React from 'react'
import {BiMenuAltLeft} from 'react-icons/bi'
import {ImLocation2} from 'react-icons/im'
import {ImCart} from 'react-icons/im'
import UserIcon from '../../assets/icon/user.jpg'

// STYLES
import '../../styles/Navbar.scss'

const Navbar = ({ciudad,pais,openSidebar,sidebar}) => {
  return (
    <div className='container-fluid container-nav'>
        <nav className="navbar">
            {/* operaodres ternarios (validaciones) */}
            <div className={sidebar ? 'content-nav-none content-nav d-flex justify-content-around w-100' : 'content-nav d-flex justify-content-around w-100'}>

                <div className={sidebar ? 'title-none' : 'icon'}>
                    <BiMenuAltLeft onClick={openSidebar}/>
                </div>

                <div className={sidebar? 'title-none' : 'title'}>
                    <h1>Ventual</h1>
                </div>

                <div className='d-none d-sm-block'>
                    <input className='input-search' type='text' placeholder='Buscar...' />
                </div>

                <div className='d-none d-sm-block location'>
                    <ImLocation2/><span>{ciudad},{pais}</span>
                </div>

                <div className='user d-none d-sm-block'>
                    <span>Usuario</span>
                    <img src={UserIcon} width={50} alt='usuario'/>
                </div>

                <div className='shopping-cart'>
                    <ImCart/>
                    <span className="number-notification position-absolute translate-middle badge rounded-pill">
                        4
                    </span>
                </div>

            </div>
        </nav>
    </div>
  )
}

export default Navbar