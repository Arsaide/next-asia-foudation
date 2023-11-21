import React from 'react';
import styles from './Book.module.scss';

const Book = () => {

    return (
        <section className={styles.book}>
            <div className={styles.book__container}>
                <h3 className={styles.book__title}>Annual Report Book</h3>
                <div className={styles.book__iframe}>
                    <iframe src="//v.calameo.com/?bkcode=001137694da9eae420bae&mode=mini&clickto=view&clicktarget=_blank"
                            frameBorder="0"
                            scrolling="no"
                            allowTransparency
                            allowFullScreen>
                    </iframe>
                </div>
                <a className={styles.download} href='https://www.calameo.com/read/001137694da9eae420bae?page=1'>Read book</a>
            </div>
        </section>

)
    ;
};

export default Book;
