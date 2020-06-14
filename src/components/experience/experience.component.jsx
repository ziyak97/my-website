import React from 'react'

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
        <section className={styles.experience}>
            <h3 className={styles.title}>What Is My Experience?</h3>

            <div className={styles.container}>

                <div id='tabs' className={styles.tab}>
                    <div onClick={handleClick} className={`${styles.tab__link} ${styles.active}`}>Freelancing & Teaching</div>
                    <div onClick={handleClick} className={styles.tab__link}>Audi</div>
                </div>

                <div id='Freelancing & Teaching' className={`${styles.tab__content} ${styles.show__content}`}>
                    <p className={styles.job__title}>Freelancing and Teaching</p>
                    <p className={styles.job__date}>February 2019 - Present</p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eos quo dolorum aliquid quae saepe nesciunt cupiditate debitis, ipsa, facere assumenda delectus vel praesentium exercitationem ab. Dolores deleniti voluptate quod.
                </div>

                <div id='Audi' className={styles.tab__content}>
                    <p className={styles.job__title}>Interned @ AUDI</p>
                    <p className={styles.job__date}>November 2018 - January 2019</p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eos quo dolorum aliquid quae saepe nesciunt cupiditate debitis, ipsa, facere assumenda delectus vel praesentium exercitationem ab. Dolores deleniti voluptate quod.
                </div>
            </div>
        </section>
    )
}

export default Experirnce
