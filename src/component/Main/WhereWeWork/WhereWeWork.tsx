import React from 'react';
import styles from './WhereWeWork.module.scss';

const WhereWeWork = () => {
    return (
        <section className={styles.ourWorks}>
            <div className={styles.ourWorks__container}>
                <h2 className={styles.ourWorks__title}>Where we work</h2>
                <div className={styles.ourWorks__places}>
                    <ul className={styles.ourWorks__list}>
                        <li>Afghanistan</li>
                        <li>Bangladesh</li>
                        <li>Cambodia</li>
                        <li>China</li>
                        <li>India</li>
                        <li>Indonesia</li>
                        <li>Japan</li>
                        <li>Korea</li>
                        <li>Laos</li>
                    </ul>
                    <ul className={styles.ourWorks__list}>
                        <li>Malaysia</li>
                        <li>Mongolia</li>
                        <li>Myanmar</li>
                        <li>Nepal</li>
                        <li>Pacific Islands</li>
                        <li>Pakistan</li>
                        <li>Philippines</li>
                        <li>Singapore</li>
                        <li>Sri Lanka</li>
                    </ul>
                    <ul className={styles.ourWorks__list}>
                        <li>Thailand</li>
                        <li>Timor-Leste</li>
                        <li>Vietnam</li>
                        <li>San Francisco</li>
                        <li>Washington, DC</li>
                        <li>New York City</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default WhereWeWork;
