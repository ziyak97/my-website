import React, { useEffect } from 'react'

import styles from './toggle-mode.module.css'

const ToggleMode = () => {

    useEffect(() => {
        const theme = window.localStorage.getItem('theme')

        if (theme === 'dark') {
            document.getElementById("toggle").checked = true;
            document.body.classList.remove('light')
            document.body.classList.add('dark')
        }
    }, [])

    const handleClick = () => {
        const mode = document.body.classList[0]
        if (mode === 'light') {
            document.body.classList.remove('light')
            document.body.classList.add('dark')
            window.localStorage.setItem('theme', 'dark')
        } else if (mode === 'dark') {
            document.body.classList.remove('dark')
            document.body.classList.add('light')
            window.localStorage.setItem('theme', 'light')
        }
    }
    return (
        <div className={styles.toggle__container}>
            <span>Light</span>

            <label className={styles.switch}>
                <input type="checkbox"  id='toggle' onClick={handleClick}/>
                <span className={`${styles.slider} ${styles.round}`}></span>
            </label>

            <span>Dark</span>
        </div>
    )
}

export default ToggleMode
