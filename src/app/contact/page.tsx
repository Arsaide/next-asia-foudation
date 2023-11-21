import React from 'react';
import styles from './page.module.scss'
import TheBanner from "@/component/TheBanner/TheBanner";
import ContactContent from "@/component/Pages/Contact/ContactContent/ContactContent";

const Contact = () => {
    return (
        <>
            <TheBanner text='Contact Us' img='banners/contact-banner.jpg'/>
            <ContactContent/>
        </>
    );
};

export default Contact;
