import React from 'react'

import ScrollAnimation from 'react-animate-on-scroll'

import styles from './contact.module.css'

const Contact = () => {
    return (
        <section id='contact' className={styles.contact}>

            <ScrollAnimation animateIn="fadeIn" duration={1.5}>

                <h3 className={styles.title}>What's Next?</h3>

                <p className={styles.main__text}>Get In Touch</p>

                <p className={styles.secondary__text}>I’m currently available for freelance work. If you have a project that you want to get started, think you need my help with something or just fancy saying hey, then get in touch.</p>

                <a href="mailto:ziyak97@gmail.com" className={styles.button}>Message Me</a>

            </ScrollAnimation>

        </section>
    )
}

export default Contact
