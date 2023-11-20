import React from 'react';
import styles from './Description.module.scss';

const Description = () => {
    return (
        <section className={styles.description}>
            <div className={styles.description__container}>
                <h2 className={styles.description__title}>Who we are</h2>
                <p className={styles.description__text}>
                    The Asia Foundation is a nonprofit international development organization committed to improving
                    lives and expanding opportunities across Asia and the Pacific. Informed by decades of experience and
                    deep local expertise, our work across the region is focused on good governance, women’s empowerment
                    and gender equality, inclusive economic growth, environment and climate action, and regional and
                    international relations.
                    <br/>
                    Headquartered in San Francisco, with an office in Washington, DC, The Asia Foundation works through
                    its network of 18 country offices across Asia and the Pacific. Working with public and private
                    partners, the Foundation receives funding from a diverse group of bilateral and multilateral
                    development agencies, foundations, corporations, and individuals. In 2022, we provided $86.7 million
                    in direct program support and distributed textbooks and other educational materials valued at $2.4
                    million.
                </p>
            </div>
        </section>
    );
};

export default Description;
