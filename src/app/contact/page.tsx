import React from 'react';
import styles from './page.module.scss'
import TheBanner from "@/component/TheBanner/TheBanner";
import ContactContent from "@/component/Pages/Contact/ContactContent/ContactContent";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Connect with \'Asia\' – Your Gateway to Impactful Conversations. Reach out to us through our \'Contact Us\' page to share your thoughts, inquiries, or collaboration ideas. Our dedicated team is here to engage with you, ensuring a meaningful exchange as we collectively strive for positive change. Let\'s build bridges, foster connections, and make a difference together.',
}

const Contact = () => {
    return (
        <>
            <TheBanner text='Contact Us' img='banners/contact-banner.jpg'/>
            <ContactContent/>
        </>
    );
};

export default Contact;
