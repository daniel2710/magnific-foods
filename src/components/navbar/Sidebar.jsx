import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import '../../styles/SidebarResponsive.scss'

const Sidebar = ({openSidebar}) => {
  return (
      <div className='sidebar'>
        <div className='content-sidebar d-flex'>
          <AiOutlineClose onClick={openSidebar}/>
          <h1>Ventual</h1>
        </div>
        <div className='menu'>
            <h4>Menú</h4>
          <ul>
            <li>Hamburguesas</li>
            <li>Pizzas</li>
            <li>Perros</li>
            <li>Salchipapas</li>
            <li>Chuzos</li>
          </ul>
        </div>
      </div>
  )
}

export default Sidebar