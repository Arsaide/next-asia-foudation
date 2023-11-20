import React from 'react';
import styles from './Highlights.module.scss';
import Image from "next/image";

const posts = [
    {
        id: 1,
        src: '/highlights/asia-ai.jpg',
        alt: 'AI Perspectives from Asia',
        category: 'News',
        title: 'The Asia Foundation and Stanford HAI Announce “AI Perspectives from Asia”Program',
        date: 'November 6, 2023',
    },
    {
        id: 2,
        src: '/highlights/empowering-women.jpg',
        alt: 'Empowering Women and Youth',
        category: 'News',
        title: 'Indonesia’s National Forest Defenders Conference: Empowering Women and Youth',
        date: 'November 3, 2023',
    },
    {
        id: 3,
        src: '/highlights/woopie-town.jpg',
        alt: 'Woopie Town',
        category: 'Blog',
        title: 'Welcome to Woopie Town!',
        date: 'November 1, 2023',
    },
    {
        id: 4,
        src: '/highlights/visit-to-india.jpg',
        alt: 'Republic of Fiji Visits India for the India-U.S',
        category: 'Program Snapshot',
        title: 'Delegation from the Republic of Fiji Visits India for the India-U.S. Triangular Development Partnership (TriDeP)',
        date: 'November 1, 2023',
    },
    {
        id: 5,
        src: '/highlights/mongolia.jpg',
        alt: 'Marks 30 Years in Mongolia',
        category: 'News',
        title: 'The Asia Foundation Marks 30 Years in Mongolia',
        date: 'November 15, 2023',
    },
    {
        id: 6,
        src: '/highlights/community.jpg',
        alt: 'Strengthening the Community of Practice',
        category: 'Program Snapshot',
        title: 'Strengthening the Community of Practice on Social Cohesion and Resilience',
        date: 'October 17, 2023',
    },
]

const Highlights = () => {
    return (
        <section className={styles.highlights}>
            <div className={styles.highlights__container}>
                <h2 className={styles.highlights__title}>Highlights</h2>
                <div className={styles.highlights__content}>
                    {posts.map((item) => (
                        <article key={item.id} className={styles.post}>
                            <Image
                                src={item.src}
                                alt={item.alt}
                                width={530}
                                height={310}
                                className={styles.post__img}/>
                            <span className={styles.post__category}>{item.category}</span>
                            <h3 className={styles.post__title}>
                                {item.title}
                            </h3>
                            <span className={styles.post__date}>{item.date}</span>
                        </article>
                    ))}
                </div>
                <article className={styles.support}>
                    <Image
                        className={styles.support__img}
                        src='/highlights/supporting.jpg'
                        alt='Supports Leaders for a Better World'
                        fill={true}/>
                    <h2 className={styles.support__title}>
                        The Asia Foundation Supports Leaders for a Better World
                    </h2>
                </article>
            </div>
        </section>
    );
};

export default Highlights;
