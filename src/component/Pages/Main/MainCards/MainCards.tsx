import React from 'react';
import styles from './MainCards.module.scss';

const MainCards = () => {
    return (
        <section className={styles.cards}>
            <div className={styles.cards__container}>
                <article className={styles.card}>
                    What <br/>We <br/> Do
                </article>
                <article className={styles.card}>
                    Environment<br/> and Climate<br/> Action
                </article>
                <article className={styles.card}>
                    Good<br/> Governance
                </article>
                <article className={styles.card}>
                    Inclusive<br/> Economic<br/> Growth
                </article>
                <article className={styles.card}>
                    Regional and<br/> International<br/> Relations
                </article>
                <article className={styles.card}>
                    Women’s<br/> Empowerment and<br/> Gender Equality
                </article>
            </div>
        </section>
    );
};

export default MainCards;
