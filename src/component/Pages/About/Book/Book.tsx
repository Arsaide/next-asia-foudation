'use client';
import React from 'react';
import styles from './Book.module.scss';

const Book = () => {
    const handleDownload = async () => {
        const pdfUrl = '/Annual-Report-2021.pdf'; // Замените на фактический путь

        try {
            // Загружаем файл с сервера
            const response = await fetch(pdfUrl);
            const blob = await response.blob();

            // Создаем ссылку для скачивания
            const url = window.URL.createObjectURL(blob);

            // Создаем ссылку и кликаем по ней
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Annual-Report-2021.pdf';
            document.body.appendChild(a);
            a.click();

            // Удаляем ссылку из DOM
            document.body.removeChild(a);

            // Освобождаем ресурсы Blob
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Ошибка загрузки файла:', error);
        }
    };

    return (
        <section className={styles.book}>
            <div className={styles.book__container}>
                <h3 className={styles.book__title}>Annual Report Book</h3>
                <div className={styles.book__iframe}>
                    <iframe src="//v.calameo.com/?bkcode=007529063f37db7e901a9&mode=mini"
                            frameBorder="0"
                            scrolling="no"
                            allowTransparency
                            allowFullScreen>
                    </iframe>
                </div>
                <button className={styles.book__download} onClick={handleDownload}>Download PDF</button>
            </div>
        </section>

)
    ;
};

export default Book;
