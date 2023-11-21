import styles from './Content.module.scss';
import React from 'react';
const Content = () => {
    return (
        <section className={styles.lists}>
            <div className={styles.lists__container}>
                <div className={styles.item}>
                    <h3 className={styles.item__title}>ASIA</h3>
                    <div className={styles.item__lists}>
                        <ul className={styles.item__list}>
                            <li className={styles.item__listItem}>Afghanistan</li>
                            <li className={styles.item__listItem}>Bangladesh</li>
                            <li className={styles.item__listItem}>Cambodia</li>
                            <li className={styles.item__listItem}>China</li>
                            <li className={styles.item__listItem}>India</li>
                            <li className={styles.item__listItem}>Indonesia</li>
                            <li className={styles.item__listItem}>Japan</li>
                        </ul>
                        <ul className={styles.item__list}>
                            <li className={styles.item__listItem}>Korea</li>
                            <li className={styles.item__listItem}>Laos</li>
                            <li className={styles.item__listItem}>Malaysia</li>
                            <li className={styles.item__listItem}>Mongolia</li>
                            <li className={styles.item__listItem}>Myanmar</li>
                            <li className={styles.item__listItem}>Nepal</li>
                            <li className={styles.item__listItem}>Pacific Islands</li>
                        </ul>
                        <ul className={styles.item__list}>
                            <li className={styles.item__listItem}>Pakistan</li>
                            <li className={styles.item__listItem}>Philippines</li>
                            <li className={styles.item__listItem}>Singapore</li>
                            <li className={styles.item__listItem}>Sri Lanka</li>
                            <li className={styles.item__listItem}>Thailand</li>
                            <li className={styles.item__listItem}>Timor-Leste</li>
                            <li className={styles.item__listItem}>Vietnam</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.item}>
                    <h3 className={styles.item__title}>UNITED STATES</h3>
                    <div className={styles.item__lists}>
                        <ul className={styles.item__list}>
                            <li className={styles.item__listItem}>San Francisco</li>
                        </ul>
                        <ul className={styles.item__list}>
                            <li className={styles.item__listItem}>Washington, DC</li>
                        </ul>
                        <ul className={styles.item__list}>
                            <li className={styles.item__listItem}>New York City</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Content;
