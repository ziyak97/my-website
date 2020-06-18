import React from 'react'

import ScrollAnimation from 'react-animate-on-scroll'

import logo from '../../images/my-icon.png'

import styles from './about-me.module.css'

const AboutMe = () => {
    return (

        <section id='about' className={styles.about}>
            <ScrollAnimation animateIn="fadeIn" duration={1.5}>

                <h3 className={styles.title}>About Me</h3>
                <div className={styles.container}>
                    <div className={styles.description}>
                        <p>Hey! I'm Ziyak, a full stack software engineer based in Mumbai.</p>
                        <p>I enjoy creating detailed projects that I can put on the internet. I enjoy learning new things and my goal is to make performant websites while learning something new.</p>
                        <p>While I'm graduating from a <a href="https://mu.ac.in/" target='_blank' rel="noopener noreferrer">Mumbai University</a> affiliated college, I spend the spare time that I have freelancing and teaching kids programming, always trying to pick up something new on the way.</p>
                        <p>Here are a few technologies I've been working with recently:</p>
                        <ul className={styles.items}>
                            <li className={styles.item}>React</li>
                            <li className={styles.item}>Node.js</li>
                            <li className={styles.item}>Javascript (ES6+)</li>
                            <li className={styles.item}>HTML & (S)CSS</li>
                            <li className={styles.item}>GarphQl</li>
                            <li className={styles.item}>Docker</li>
                        </ul>
                    </div>
                    <div className={styles.image__container}>
                        <a href="https://github.com/ziyak97/" target='_blank' rel="noopener noreferrer"><img className={styles.image} src={logo} alt="my-icon" /></a>
                    </div>
                </div>
            </ScrollAnimation>

        </section>
    )
}

export default AboutMe
