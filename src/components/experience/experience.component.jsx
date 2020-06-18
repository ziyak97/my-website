import React from 'react'

import ScrollAnimation from 'react-animate-on-scroll'

import styles from './experience.module.css'

const Experirnce = () => {
    const handleClick = e => {
        const id = e.target.innerText

        document.getElementsByClassName(`${styles.active}`)[0].classList.remove(`${styles.active}`)
        e.target.classList.add(`${styles.active}`)

        document.getElementsByClassName(`${styles.show__content}`)[0].classList.remove(`${styles.show__content}`)
        document.getElementById(id).classList.add(`${styles.show__content}`)

    }
    return (

        <section id='experience' className={styles.experience}>
            <ScrollAnimation animateIn="fadeIn" duration={1.5}>

                <h3 className={styles.title}>What's My Experience?</h3>

                <div className={styles.container}>

                    <div id='tabs' className={styles.tab}>
                        <div onClick={handleClick} className={`${styles.tab__link} ${styles.active}`}>Freelancing & Teaching</div>
                        <div onClick={handleClick} className={styles.tab__link}>Audi</div>
                    </div>

                    <div id='Freelancing & Teaching' className={`${styles.tab__content} ${styles.show__content}`}>
                        <p className={styles.job__title}>Freelancing and Teaching</p>
                        <p className={styles.job__date}>February 2019 - Present</p>
                        <ul className={styles.items}>
                            <li className={styles.item}>Interface with clients on a as need basis, providing technological expertise</li>
                            <li className={styles.item}>Teach HTML, CSS and Javascript to kids, including how to solve algorithms</li>
                            <li className={styles.item}>Provide consultancy to teams in regards to the technical direction they should take</li>

                        </ul>
                    </div>

                    <div id='Audi' className={styles.tab__content}>
                        <p className={styles.job__title}>Interned @ AUDI</p>
                        <p className={styles.job__date}>November 2018 - January 2019</p>
                        <ul className={styles.items}>
                            <li className={styles.item}>Helped with managing and maintaining the main server</li>
                            <li className={styles.item}>Made sure only authenticated users got access to their resources</li>
                            <li className={styles.item}>Found a solution to data retrieval issues after our server was hacked</li>
                            <li className={styles.item}>Proposed and implemented safety measures to prevent hacking in the future</li>

                        </ul>
                    </div>
                </div>
            </ScrollAnimation>
        </section>

    )
}

export default Experirnce
