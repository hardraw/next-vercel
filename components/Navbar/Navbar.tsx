import React from 'react'
import styles from './Navbar.module.css'
import LinkActive from '../LinkActive'

const menuItems = [
  {
    text: "Home",
    href: "/"
  },
  {
    text: "Abouts",
    href: "about"
  },
  {
    text: "Contactenos",
    href: "/contact"
  },
  {
    text: "Pricing",
    href: "/pricing"
  },
]

const Navbar = () => {
  return (
    <nav className={ styles.navbar }>
        {menuItems?.map(item => (
          <LinkActive key={item.href} text={item.text} href={item.href} />
        ))}
    </nav>
  )
}

export default Navbar
