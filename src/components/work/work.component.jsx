import React from 'react'

import ScrollAnimation from 'react-animate-on-scroll'

import ecom from '../../images/e-commerce.jpg'
import snowbright from '../../images/snowbright.jpg'
import form from '../../images/n-model-form.jpg'
import {ReactComponent as GithubLogo} from '../../images/github.svg'
import {ReactComponent as ExternalLogo} from '../../images/external.svg'


import styles from './work.module.css'

const Work = () => {
    return (

        <section id='work' className={styles.work}>
            <ScrollAnimation animateIn="fadeIn" duration={1.5}>

                <h3 className={styles.title}>Some Stuff I've Build</h3>

                <ScrollAnimation animateIn="fadeIn" duration={1.5}>
                    <div className={styles.project}>
                        <div>
                            <a href="https://ziyak-clothing.herokuapp.com/" target='_blank' rel="noopener noreferrer"><img src={ecom} alt="e-commerce site" /></a>
                        </div>

                        <div className={styles.details__container}>
                            <h4>Featured Project</h4>
                            <h3><a href="https://ziyak-clothing.herokuapp.com/" target='_blank' rel="noopener noreferrer" className={styles.details__title}>E-Commerce Site</a></h3>
                            <div className={styles.details}>An E-Commerce site where items can be dynamically added and removed via an admin panel. Items purchased can be added to a cart. Once done adding items to a cart you can go to checkout where you can remove items you don't want and pay for the items.</div>
                            <ul className={styles.items}>
                                <li className={styles.item}>React</li>
                                <li className={styles.item}>Node.js</li>
                                <li className={styles.item}>Firebase</li>
                                <li className={styles.item}>StripeAPI</li>
                            </ul>

                            <ul className={styles.links}>
                                <li className={styles.link}>
                                    <a className={styles.github} href="https://github.com/ziyak97/e-commerce" target='_blank' rel="noopener noreferrer"><GithubLogo /></a>
                                </li>
                                <li className={styles.link}>
                                    <a className={styles.external} href="https://ziyak-clothing.herokuapp.com/" target='_blank' rel="noopener noreferrer"><ExternalLogo /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeIn" duration={1.5}>
                    <div className={styles.project}>

                        <div className={`${styles.details__container} ${styles.details__container__alt}`}>
                            <h4>Featured Project</h4>
                            <h3><a href="https://snowbrightimports.com/" target='_blank' rel="noopener noreferrer" className={styles.details__title}>Single Page Site</a></h3>
                            <div className={styles.details}>In this project for a client I made a mobile friendly, responsive single page site. This highly responsive and SEO friendly has helped my client in his sales.</div>
                            <ul className={styles.items}>
                                <li className={styles.item}>HTML</li>
                                <li className={styles.item}>CSS</li>
                                <li className={styles.item}>Bootstrap</li>
                            </ul>

                            <ul className={styles.links}>
                                <li className={styles.link}>
                                    <a className={styles.github} href="https://github.com/ziyak97/snowbright" target='_blank' rel="noopener noreferrer"><GithubLogo /></a>
                                </li>
                                <li className={styles.link}>
                                    <a className={styles.external} href="https://snowbrightimports.com/" target='_blank' rel="noopener noreferrer"><ExternalLogo /></a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <a href="https://snowbrightimports.com/" target='_blank' rel="noopener noreferrer"><img src={snowbright} alt="snowbright" /></a>
                        </div>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeIn" duration={1.5}>
                    <div className={styles.project}>
                        <div>
                            <a href="https://ziyak-form.herokuapp.com/" target='_blank' rel="noopener noreferrer"><img src={form} alt="n-model form" /></a>
                        </div>

                        <div className={styles.details__container}>
                            <h4>Featured Project</h4>
                            <h3><a href="https://ziyak-form.herokuapp.com/" target='_blank' rel="noopener noreferrer" className={styles.details__title}>Dynamic Form</a></h3>
                            <div className={styles.details}>In this N-Model Form I gather data to be selected from a list of tables stored in a database. Depending on the data selected this dynamic form validates the inputs before submitting.</div>
                            <ul className={styles.items}>
                                <li className={styles.item}>React</li>
                                <li className={styles.item}>Node.js</li>
                                <li className={styles.item}>Express</li>
                                <li className={styles.item}>MongoDB</li>
                            </ul>

                            <ul className={styles.links}>
                                <li className={styles.link}>
                                    <a className={styles.github} href="https://github.com/ziyak97/add-model-container-form" target='_blank' rel="noopener noreferrer"><GithubLogo /></a>
                                </li>
                                <li className={styles.link}>
                                    <a className={styles.external} href="https://ziyak-form.herokuapp.com/" target='_blank' rel="noopener noreferrer"><ExternalLogo /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeIn" duration={1.5}>
                    <a href="https://github.com/ziyak97/" target='_blank' rel="noopener noreferrer" className={styles.button}>Other Projects</a>
                </ScrollAnimation>

            </ScrollAnimation>
        </section>
    )
}

export default Work
