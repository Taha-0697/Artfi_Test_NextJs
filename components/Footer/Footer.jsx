import classList from './Footer.module.scss'
import Section from '../Section/Section'
import Header from '../Header/Header'
import Logo from '../../public/Assets/logo-white.png'
import NavLink from '../Navlinks/Navlinks'
import Image from 'next/image'

const Footer = () => {
  return (
    <>
      <div className={classList.footer_wrapper}>
        <Section>
          <div className={classList.footer_items}>
            <div className={classList.footer_cols}>
              <Header color="white">Artfi - World</Header>
              <NavLink href="/" exact className="nav-item nav-link">
                <Image
                  className={classList.logo}
                  src={Logo.src}
                  height={100}
                  width={100}
                  alt="Logo"
                  style={{ objectFit: 'fill', cursor: 'pointer' }}
                />
              </NavLink>
            </div>
            <div className={classList.footer_cols}>
              <Header color="white">Menu</Header>
              <ul>
                {/* <NavLink href="/" exact={'true'}>
                  <li> Home </li>
                </NavLink> */}
                <NavLink href="/gallery">
                  <li> Gallery </li>
                </NavLink>
                <NavLink href="/wishlist">
                  <li>WishList</li>
                </NavLink>
                <NavLink href="/#about">
                  <li>About</li>
                </NavLink>
                <NavLink href="/#contact">
                  <li>Contact</li>
                </NavLink>
              </ul>
            </div>
            <div className={classList.footer_cols}>
              <Header color="white">About</Header>
              <ul>
                <li>
                  <a href="mailto:info@artfi.world.com">info@artfi.world.com</a>
                </li>
                <li>
                  Tel: <a href="tel:+1 (123) 456-7890">+1 (123) 456-7890</a>
                </li>
                <li>
                  Fax: <a href="tel:+1 (212) 589-4535">+1 (212) 589-4535</a>
                </li>
                <li>
                  <a className={classList.pointer}>
                    Banglow #23 , Abc Garden west , Dubai
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Section>
      </div>
    </>
  )
}

export default Footer
