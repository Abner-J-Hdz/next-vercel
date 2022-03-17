import React from 'react'
import { ActiveLink } from './ActiveLink'
import styles from './NavBar.module.css'

const NavBar = () => {

    const menuItems = [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Pricing',
            href: '/pricing'
        },
    ];

    return (
        <nav className={styles['menu-container']}>
            {menuItems.map((menu, index) => 
            <ActiveLink key={index} text={menu.text}  href={menu.href} />
            )}
        </nav>
    )
}

export default NavBar
