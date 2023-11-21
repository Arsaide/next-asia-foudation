import styles from './TheFooter.module.scss';
import React from 'react';
import Link from "next/link";
import Image from "next/image";

const links = [
    {
        id: 1,
        title: 'About us',
        href: '/about',
    },
    {
        id: 2,
        title: 'Careers and opportunities',
        href: '/work',
    },
    {
        id: 3,
        title: 'Donate',
        href: '/',
    },
    {
        id: 4,
        title: 'Contact us',
        href: '/contact',
    },
    {
        id: 5,
        title: 'Financial information',
        href: '/financial',
    },
    {
        id: 6,
        title: 'Our safeguarding commitment',
        href: '/safeguarding',
    },
]

const socialNetworks = [
    {
        id: 1,
        alt: 'The Asia Foundation Facebook',
        src: '/icons/facebookIcon.svg',
        href: 'https://www.facebook.com/TheAsiaFoundation/',
    },
    {
        id: 2,
        alt: 'The Asia Foundation X',
        src: '/icons/twitterIcon.svg',
        href: 'https://twitter.com/Asia_Foundation',
    },
    {
        id: 3,
        alt: 'The Asia Foundation LinkedIn',
        src: '/icons/linkedInIcon.svg',
        href: 'https://www.linkedin.com/company/the-asia-foundation/',
    },
    {
        id: 4,
        alt: 'The Asia Foundation Instagram',
        src: '/icons/instagramIcon.svg',
        href: 'https://www.instagram.com/theasiafoundation/',
    },
    {
        id: 5,
        alt: 'The Asia Foundation YouTube',
        src: '/icons/youtubeIcon.svg',
        href: 'https://www.youtube.com/@AsiaFoundation',
    },
]


const TheFooter = () => {
    return (
        <footer className={styles.footer}>
            <div className='footer__container'>
                <div className={styles.footer__content}>
                    <div className={styles.footer__links}>
                        <div className={styles.footer__leftLinks}>
                            {links.map((link) => (
                                <Link className={styles.link}
                                      key={link.id}
                                      href={link.href}>{link.title}</Link>
                            ))}
                        </div>
                        <div className={styles.footer__rightLinks}>
                            {socialNetworks.map((item) => (
                                <Link className={styles.socialNetwork}
                                      key={item.id}
                                      href={item.href}>
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        width={35}
                                        height={35}/>

                                </Link>
                            ))}
                        </div>
                    </div>

                    <p className={styles.copyright}><span>&copy;Copyright 2023 by The Asia Foundation</span></p>
                </div>
            </div>
        </footer>
    );
};

export default TheFooter;
