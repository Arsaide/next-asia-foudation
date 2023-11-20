import React from 'react';
import styles from './AboutButton.module.scss';
import Link from "next/link";

type Props = {
    text: string,
    url: string,
}

const AboutButton = ({text, url}: Props) => {
    return (
        <Link href={url}>
            <button className={styles.button}>{text}</button>
        </Link>
    );
}

export default AboutButton;