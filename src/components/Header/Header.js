import React from 'react'
// import { browserHistory, Router } from 'react-router'
// import { Provider } from 'react-redux'
// import PropTypes from 'prop-types'
import logo from './assets/image001.png'

class Header extends React.Component {
  // static propTypes = {
  //   store: PropTypes.object.isRequired,
  //   routes: PropTypes.object.isRequired,
  // }

  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <nav className='navbar'>
        <div className='navbar-brand'>
          <a className='navbar-item' href='/'>
            <img src={logo} width='110' />
          </a>
          <div className='navbar-burger burger' data-target='navMenubd-example'>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
