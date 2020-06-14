import React, {useEffect} from 'react'

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
            <a href='#header' className={styles.icon}><img className={styles.icon__logo} src={logo} alt="navbar-logo"/></a>
            <div className={styles.items}>
                <a href='#about' className={styles.item}><span className={styles.item__number}>01.</span> About</a>
                <a href='#experience' className={styles.item}><span className={styles.item__number}>02.</span> Experience</a>
                <a href='#work' className={styles.item}><span className={styles.item__number}>03.</span> Work</a>
                <a href='#contact' className={styles.item}><span className={styles.item__number}>04.</span> Contact</a>
            </div>
            <div className={styles.resume}>Resume</div>
        </nav>
    )
}

export default Navbar
