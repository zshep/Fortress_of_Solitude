import React from 'react'
import Logo from '../components/gob4.jpg'

export default function Navbar() {
  const [isActive, setisActive] = React.useState(false)

  return (
    <nav className='navbar is-black' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <a href='/' className='navbar-item'>
          <img
            src={Logo}
            alt='Logo'
          />
        </a>

        <a
          onClick={() => {
            setisActive(!isActive)
          }}
          role='button'
          className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasicExample'
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
        <h2 className="title is-2">GoMode</h2>
      </div>
      <div id='navbarBasicExample' className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className='navbar-end'>
          <div className='navbar-item'>
            <a href='/' className='navbar-item'>
              Home
            </a>
            <a href='/profile' className='navbar-item'>
              Profile
            </a>
            <a href='/board' className='navbar-item'>
              Board
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}