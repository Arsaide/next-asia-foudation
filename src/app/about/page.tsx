import styles from './page.module.scss'

import React from 'react';
import TheBanner from "@/component/TheBanner/TheBanner";

const AboutPage = () => {
    return (
        <section className={styles.about}>
            <TheBanner text='where we work' img='banners/aboutUs-banner.jpg'/>
            <div className={styles.about__container}>
                <div className={styles.about__descriptrion}>

                </div>
            </div>
        </section>
    );
};

export default AboutPage;
