import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'

import logo from '../../images/navbar-icon.png'

import styles from './navbar.module.css'

const Navbar = () => {
    useEffect(() => {
        let prevScrollpos = window.pageYOffset
        window.onscroll = () => {
          const currentScrollPos = window.pageYOffset
          if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0"
          } else {
            document.getElementById("navbar").style.top = "-100px"
          }
          prevScrollpos = currentScrollPos
        }
    }, [])
    return (
        <nav className={styles.navbar} id='navbar'>
            <div className={styles.icon}><img className={styles.icon__logo} src={logo} alt="navbar-logo"/></div>
            <div className={styles.items}>
                <Link className={styles.item}><span className={styles.item__number}>01.</span> About</Link>
                <Link className={styles.item}><span className={styles.item__number}>02.</span> Experience</Link>
                <Link className={styles.item}><span className={styles.item__number}>03.</span> Work</Link>
                <Link className={styles.item}><span className={styles.item__number}>04.</span> Contact</Link>
            </div>
            <div className={styles.resume}>Resume</div>
        </nav>
    )
}

export default Navbar
