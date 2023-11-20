import React from 'react';
import styles from './WhoWeAre.module.scss';
import Button from "@/component/Button/Button";

const WhoWeAre = () => {
    return (
        <section className={styles.aboutUs}>
            <div className={styles.aboutUs__container}>
                <h2 className={styles.aboutUs__title}>Who We Are</h2>
                <p className={styles.aboutUs__text}>
                    The Asia Foundation is a nonprofit international development organization
                    committed to improving lives and expanding opportunities across Asia and the Pacific. Informed by
                    decades
                    of experience and deep local expertise, our work across the region is focused on good governance,
                    women’s
                    empowerment and gender equality, inclusive economic growth, environment and climate action, and
                    regional
                    and international relations.
                </p>
                <Button text='Donate' url='/donate'/>
            </div>
        </section>
    );
};

export default WhoWeAre;
