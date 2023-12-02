import React from 'react';
import styles from './Error.module.scss'
import AboutButton from "@/component/Pages/About/AboutButton/AboutButton";

type Props = {
    text: string,
}

const Error = ({text}: Props) => {
    return (
        <section className={styles.error}>
            <div className={styles.error__container}>
                <h2 className={styles.error__title}>No Results Found</h2>
                <p className={styles.error__text}>
                    The page <span className={styles.error__bold}>{text}</span> you requested could not be found. Try refining your search,
                    or use the navigation above to locate the post
                </p>
                <div className={styles.error__btns}>
                    <AboutButton text='Donate' url='/donate'/>
                    <AboutButton text='About us' url='/about'/>
                    <AboutButton text='Contact us' url='/contact'/>
                </div>
            </div>
        </section>
    );
};

export default Error;
