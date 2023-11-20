import styles from './TheHeader.module.scss';

import React from 'react';
import Link from "next/link";
import Image from "next/image";

const links = [
    {
        id: 1,
        url: '/about',
        title: 'About us',
    },
    {
        id: 2,
        url: '/work',
        title: 'Where we work',
    },
    {
        id: 3,
        url: '/news-and-media',
        title: 'News and Media',
    },
    {
        id: 4,
        url: '/involved',
        title: 'Get involved',
    },
    {
        id: 5,
        url: '/donate',
        title: 'Donate',
    },
]

const TheHeader = () => {
    return (
        <header className={styles.header}>
            <div className='header__container'>
                <nav className={styles.header__menu}>
                    <Link className={styles.logo} href='/'>
                        <Image
                            src='/logo.svg'
                            alt='The Asia Foundation Logotype'
                            width={32}
                            height={32}/>
                        <span className={styles.logo__title}>The Asia Foundation</span>
                    </Link>
                    <div className={styles.header__links}>
                        {links.map((link) => (
                            <Link className={styles.header__link} key={link.id} href={link.url}>{link.title}</Link>
                        ))}
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default TheHeader;
