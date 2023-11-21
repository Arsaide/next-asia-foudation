import React from 'react';
import styles from './ContactContent.module.scss';
import ContactForm from "@/component/Pages/Contact/ContactForm/ContactForm";
import AboutButton from "@/component/Pages/About/AboutButton/AboutButton";

const contacts = [
    {
        id: 1,
        title: 'Locations',
        text: 'For questions, please direct queries to the appropriate office.',
        url: '/work',
        town: 'San Francisco Headquarters',
        state: '465 California St., 9th Floor',
        street: 'San Francisco, CA 94104-1804',
        email: '',
        tel: 'Tel: 415-982-4640',
        buttonTitle: 'Where we work',
    },
    {
        id: 2,
        title: 'Grants',
        text: 'Please read guidelines before inquiring about Asia Fondation grants',
        town: '',
        state: '',
        street: '',
        tel: '',
        email: '',
        url: 'https://asiafoundation.org/wp-content/uploads/2016/04/grantguidelines-2.pdf',
        buttonTitle: 'Guidelines',
    },
    {
        id: 3,
        title: 'Media inquiries',
        text: 'If you are a member of the news media, visit our News Room of contact information and the latest news.',
        town: '',
        state: '',
        street: '',
        tel: '',
        email: '',
        url: '/news-and-media',
        buttonTitle: 'News Room',
    },
    {
        id: 4,
        title: 'Support',
        text: '',
        town: '',
        state: '',
        street: '',
        tel: 'Resource Development',
        email: 'giving@asiafondation.org',
        url: '/',
        buttonTitle: 'Donate now',
    },
    {
        id: 5,
        title: 'Careers',
        text: 'Read more about current opportunities.',
        town: '',
        state: '',
        street: '',
        tel: '',
        email: '',
        url: '/about',
        buttonTitle: 'Employment',
    },
]

const ContactContent = () => {
    return (
        <section className={styles.contact}>
            <div className={styles.contact__container}>
                <div className={styles.contact__content}>
                    {contacts.map((item) => (
                        <div key={item.id} className={styles.contact__item}>
                            <h3 className={styles.contact__title}>{item.title}</h3>
                            {item.town && <p>{item.town}</p>}
                            {item.state && <p>{item.state}</p>}
                            {item.street && <p>{item.street}</p>}
                            {item.tel && <p>{item.tel}</p>}
                            {item.tel && <a className={styles.contact__email} href={`Mailto:${item.email}`}>{item.email}</a>}
                            <p className={styles.contact__text}>{item.text}</p>
                            <AboutButton text={item.buttonTitle} url={item.url}/>
                        </div>
                    ))}
                </div>

                <ContactForm/>
            </div>
        </section>
    );
};

export default ContactContent;
