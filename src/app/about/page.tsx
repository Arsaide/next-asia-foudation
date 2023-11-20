import styles from './page.module.scss'

import React from 'react';
import TheBanner from "@/component/TheBanner/TheBanner";
import Description from "@/component/Pages/About/Description/Description";
import Book from "@/component/Pages/About/Book/Book";
import Approach from "@/component/Pages/About/Approach/Approach";

const AboutPage = () => {
    return (
        <section className={styles.about}>
            <TheBanner text='where we work' img='banners/aboutUs-banner.jpg'/>
            <Description/>
            <Book/>
            <Approach/>
        </section>
    );
};

export default AboutPage;
