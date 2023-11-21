'use client';
    import styles from './ContactForm.module.scss'
import React, {useState, ChangeEvent, FormEvent, useEffect} from 'react';

const ContactForm = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [subscribe, setSubscribe] = useState(false);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;

        if ((name === 'name' || name === 'surname') && /\d/.test(value)) {
            return;
        }
        if (type === 'checkbox') {
            setSubscribe((e.target as HTMLInputElement).checked);
        } else {
            if (name === 'email') {
                setEmail(value);
            } else if (name === 'name') {
                setName(value);
            } else if (name === 'surname') {
                setSurname(value);
            }
        }
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (email && name && surname) {
            setFormSubmitted(true);

            setEmail('');
            setName('');
            setSurname('');
            setSubscribe(false);
        } else {
            alert('Please fill in all fields!');
        }
    };

    useEffect(() => {
        if (formSubmitted) {
            const timeoutId = setTimeout(() => {
                setFormSubmitted(false);
            }, 4000);

            return () => clearTimeout(timeoutId);
        }
    }, [formSubmitted]);



    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h4 className={styles.form__title}>Subscribe to the InAsia blog</h4>
            <p className={styles.form__description}>Fields with an asteriks (<span className={styles.red}>*</span>) are required.</p>
            <div className={styles.form__content}>
                <label>
                    <p className={styles.form__text}>Email <span className={styles.red}>*</span></p>
                    <input
                        className={styles.form__input}
                        type='email'
                        placeholder='Enter Your Email'
                        name='email'
                        value={email}
                        onChange={handleInputChange}/>
                </label>
                <label>
                    <p className={styles.form__text}>Name <span className={styles.red}>*</span></p>
                    <input
                        className={styles.form__input}
                        type='text'
                        placeholder='Name'
                        name='name'
                        value={name}
                        onChange={handleInputChange}/>
                    <input
                        className={styles.form__input}
                        type='text'
                        placeholder='Surname'
                        name='surname'
                        value={surname}
                        onChange={handleInputChange}/>
                </label>
                <label>
                    <p className={styles.form__text}>Yes, I would like to subscribe to the InAsia blog</p>
                    <input
                        className={styles.form__checkbox}
                        type='checkbox'
                        name='subscribe'
                        checked={subscribe}
                        onChange={handleInputChange}/>
                </label>
                <button type='submit' className={styles.form__btn}>Submit</button>
            </div>
            {formSubmitted && (
                <p className={styles.form__submittedText}>Form submitted successfully!</p>
            )}
        </form>
    );
};

export default ContactForm;
