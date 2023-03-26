import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import NavLink from './../Navlinks/Navlinks'
import { HiMenu } from 'react-icons/hi'
import Logo from '../../public/Assets/Logo.png'
import classList from './Navbar.module.scss'
import Button from '../Button/Button'
import Image from 'next/image'
//Dyanmic imports

const Slider = dynamic(() => import('../Slider/Slider'))
const Dropdown = dynamic(() => import('./../DropDown/DropDown'))

const Navbar = () => {
  var [navbar, setNavbar] = useState(false)
  var [scroll, setScroll] = useState(0)
  var scrollTracker = () => {
    if (window.scrollY < 1) {
      setScroll(0)
    } else {
      setScroll(1)
    }
  }
  useEffect(() => {
    //CDM
    window.addEventListener('scroll', scrollTracker)
  }, [])

  // console.log(navbar);
  return (
    <>
      <div
        style={{
          backgroundColor: scroll === 0 ? 'white' : '#ffffff',
        }}
        className={classList.navbar}
      >
        <Slider navbar={navbar} setNavbar={setNavbar} />
        <div
          style={{ alignItems: 'flex-start' }}
          className={`${classList.logoArea} ${classList.center}`}
        >
          <NavLink href="/" exact className="nav-item nav-link">
            <Image
              className={classList.logo}
              src={Logo.src}
              height={35}
              width={85}
              alt="Logo"
              style={{ objectFit: 'fill', cursor: 'pointer' }}
            />
          </NavLink>
        </div>
        <div className={classList.menuItemArea}>
          <div className={classList.navSimpleItems}>
            <NavLink href="/" exact={'true'}>
              Home
            </NavLink>
            <NavLink href="/gallery">Gallery</NavLink>
            <NavLink href="/wishlist">WishList</NavLink>
            <NavLink href="/#about">About</NavLink>
            <NavLink href="/#contact">Contact</NavLink>
          </div>
        </div>

        <HiMenu onClick={() => setNavbar(true)} className={classList.ham} />
      </div>
    </>
  )
}

export default Navbar
