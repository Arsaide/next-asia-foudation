'use client';
import styles from './ContactForm.module.scss'
import React, {useState, ChangeEvent, FormEvent, useEffect} from 'react';

const ContactForm = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);

    // Состояния для полей формы
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [subscribe, setSubscribe] = useState(false);

    // Обработчик изменения полей формы
    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;

        // Дополнительная проверка для полей с именем и фамилией: запрещаем ввод цифр
        if ((name === 'name' || name === 'surname') && /\d/.test(value)) {
            return; // Если введены цифры, ничего не делаем
        }

        // Проверка, что поле является чекбоксом
        if (type === 'checkbox') {
            // Явное указание, что e.target - HTMLInputElement
            setSubscribe((e.target as HTMLInputElement).checked);
        } else {
            // Обновление соответствующего состояния в зависимости от типа поля
            if (name === 'email') {
                setEmail(value);
            } else if (name === 'name') {
                setName(value);
            } else if (name === 'surname') {
                setSurname(value);
            }
        }
    };

    // Обработчик отправки формы
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Проверка, что все поля заполнены
        if (email && name && surname) {
            // Устанавливаем состояние формы как отправленную
            setFormSubmitted(true);

            // Очищаем поля формы
            setEmail('');
            setName('');
            setSurname('');
            setSubscribe(false);
        } else {
            alert('Please fill in all fields!');
        }
    };

    // Эффект для удаления сообщения через 10 секунд
    useEffect(() => {
        if (formSubmitted) {
            const timeoutId = setTimeout(() => {
                setFormSubmitted(false);
            }, 4000);

            // Очищаем таймаут, чтобы избежать лишних вызовов при размонтировании компонента
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
