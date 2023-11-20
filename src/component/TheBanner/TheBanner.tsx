import React from 'react';
import styles from './TheBanner.module.scss';

type Props = {
    text: string,
    img: string,
}

const TheBanner = ({text, img}: Props) => {
    return (
        <section className={styles.banner} style={{backgroundImage: `url(/${img})`}}>
            <h2 className={styles.banner__title}>{text}</h2>
        </section>
    );
};

export default TheBanner;