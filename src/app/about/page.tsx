import styles from './page.module.scss'

import React from 'react';
import TheBanner from "@/component/TheBanner/TheBanner";
import Description from "@/component/Pages/About/Description/Description";
import Book from "@/component/Pages/About/Book/Book";
import Approach from "@/component/Pages/About/Approach/Approach";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "About us",
    description: 'Learn more about The Asia Foundation: our mission, vision and values; who we are; our approach; what we do; and how we work with our partners.',
};
const AboutPage = () => {
    return (
        <>
            <TheBanner text='about the asia foundation' img='banners/aboutUs-banner.jpg'/>
            <Description/>
            <Book/>
            <Approach/>
        </>
    );
};

export default AboutPage;
