import React from 'react'

import styles from "./header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <p className={styles.name__paragraph}>Hi, my name is</p>
            <h1 className={styles.name__main}>Ziyak Jehangir.</h1>
            <h2 className={styles.name__secondary}>I build stuff for the web.</h2>
            <p className={styles.details}>I'm a software engineer based in Mumbai, India. I specializing in building high quality websites and everything in between. Let me know if there is something I can build for you.</p>
            <div className={styles.button}><a href="mailto:ziyak97@gamil.com">Get In Touch</a></div>
        </header>
    )
}

export default Header
