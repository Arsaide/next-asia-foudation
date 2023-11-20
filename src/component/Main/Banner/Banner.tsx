import React from 'react';
import styles from './Banner.module.scss';

const Banner = () => {
    return (
        <section className={styles.banner}>
            <div className='banner__container'>
                <div className={styles.banner__content}>
                    <h1 className={styles.banner__title}>The Asia Foundation</h1>
                    <h2 className={styles.banner__description}>improving lives</h2>
                </div>
            </div>
        </section>
    );
};

export default Banner;
