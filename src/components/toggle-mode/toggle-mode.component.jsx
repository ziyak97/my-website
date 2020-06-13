import React, {useState, useEffect} from 'react'

import styles from './toggle-mode.module.css'

const ToggleMode = () => {
    const [toggle, setToggle] = useState(true)

    useEffect(() => {
        const theme = window.localStorage.getItem('theme')

        if(theme === 'dark') {
            setToggle(false)
            document.body.classList.remove('light')
            document.body.classList.add('dark')
        }
      }, [])

    const handleClick = () => {
        setToggle(!toggle)
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
            <div className={styles.toggle}>
                <div className={`${toggle ? styles.toggle__button_left : styles.toggle__button_right}`} id='toggle' onClick={handleClick}></div>
            </div>
            <span>Dark</span>
        </div>
    )
}

export default ToggleMode
