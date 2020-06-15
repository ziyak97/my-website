import React, { useEffect, useLayoutEffect, useState } from 'react'

import logo from '../../images/navbar-icon.png'

import styles from './navbar.module.css'

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight])
    }
    window.addEventListener('resize', updateSize)
    updateSize();
    return () => window.removeEventListener('resize', updateSize)
  }, [])
  return size
}

const Navbar = () => {
  const [width, height] = useWindowSize()

  const openNav = () => {
    document.getElementById("side-nav").style.width = "45%";
  }

  const closeNav = () => {
    const width = window.innerWidth
    if (width <= 992) {
      document.getElementById("side-nav").style.width = "0";
    }
  }

  useEffect(() => {
    if (width > 992) {
      if (document.getElementById("side-nav").style.width === '0px') {
        document.getElementById("side-nav").style.width = '100%'
      }
    }
  }, [width, height])

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
      <a href='#header' className={styles.icon}><img className={styles.icon__logo} src={logo} alt="navbar-logo" /></a>
      <div id='side-nav' className={styles.items}>
        <a href="#0" className={styles.closebtn} onClick={closeNav}>&times;</a>
        <a href='#about' className={`${styles.item} ${styles.item__1}`} onClick={closeNav}><span className={styles.item__number}>01.</span> About</a>
        <a href='#experience' className={styles.item} onClick={closeNav}><span className={styles.item__number}>02.</span> Experience</a>
        <a href='#work' className={styles.item} onClick={closeNav}><span className={styles.item__number}>03.</span> Work</a>
        <a href='#contact' className={styles.item} onClick={closeNav}><span className={styles.item__number}>04.</span> Contact</a>
        <a href='#contact' className={`${styles.resume} ${styles.item}`} onClick={closeNav}>Resume</a>
      </div>

      <span className={styles.menu} onClick={openNav}>
        <div className={styles.hamburger}></div>
        <div className={styles.hamburger}></div>
        <div className={styles.hamburger}></div>
      </span>
    </nav>
  )
}

export default Navbar
