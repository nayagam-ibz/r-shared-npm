import React from 'react'
import {
  merchant_menus,
  influencer_menus,
} from '../helpers/json'

function Menu({ NavLink, current_user, handleShow, handleLogoutRequest }) {

 const { user } = current_user

  let filter_menus = 
    user && user.registration_type === 'merchant' 
      ? merchant_menus 
      : influencer_menus
  
  return (
    <div className='sc_sidebar_inner'>
      <h5 className='mb-2'>Social Commerce</h5>
      <ul className='list-group sc_menu_list'>
        {filter_menus &&
          filter_menus.map((data, index) => {
            return (
              <li key={index}>
                <NavLink
                  className={(navData) => (navData.isActive ? 'active' : '')}
                  to={data.root}
                >
                  <img
                    src={require(`../../src/images/${data.image_name}.png`)}
                    alt={data.name}
                  />
                  {data.name}
                </NavLink>
              </li>
            )
        })}
        {user && user.registration_type !== 'admin' && (
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? '' : '')}
              onClick={handleShow}
            >
              <img
                src={require(`../../src/images/tour.png`)}
                alt='tour'
              />
              Help / Tour
            </NavLink>
          </li>
        )}
        <div className='position_bottom'>
          <div className='px-3 mb-2'>
            <li className='mb-2'>{user && user.email}</li>
          </div>
          <li>
            <NavLink
              onClick={handleLogoutRequest}
              className={(navData) => (navData.isActive ? '' : '')}
            >
              <img
                src={require(`../../src/images/logout.png`)}
                alt='logout'
              />
              LogOut
            </NavLink>
          </li>
        </div>
      </ul>
    </div>
  )
}

export { Menu }
