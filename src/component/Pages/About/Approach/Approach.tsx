import React from 'react';
import styles from './Approach.module.scss';
import download from '../Book/Book.module.scss'
import AboutButton from "@/component/Pages/About/AboutButton/AboutButton";
import Image from "next/image";

const Approach = () => {
    return (
        <section className={styles.approach}>
            <div className={styles.approach__container}>
                <article className={styles.paragraph}>
                    <h3 className={styles.paragraph__title}>Our approach</h3>
                    <p className={styles.paragraph__text}>
                        Internationally recognized for our commitment to the region's
                        development, we bring together local individuals,
                        communities, and governments who are shaping Asia's future. Our approach is nuanced and
                        multi-dimensional. A
                        particular strength is our ability to navigate Asia's political context for reform and
                        development. Engaging our
                        longstanding and ever-expanding networks, nurturing new talent and rising young leaders, and
                        drawing on our
                        deep regional knowledge, we play a catalytic role in advancing Asia's development and social
                        progress.
                    </p>
                    <div className={styles.paragraph__buttons}>
                        <AboutButton text='Careers' url='/'/>
                        <AboutButton text='Financials' url='/'/>
                        <AboutButton text='Safeguarding' url='/'/>
                    </div>
                </article>
                <article className={styles.paragraph}>
                    <h3 className={styles.paragraph__title}>Strategy 2025</h3>
                    <div className={styles.paragraph__content}>
                        <div className={styles.paragraph__text}>
                            We are pleased to share our 2025 strategic roadmap that
                            encourages growth in our areas of strength while allowing
                            flexibility and welcoming the changes in the region and varying
                            local conditions.
                            <div className={styles.paragraph__buttons}>
                                <a className={download.download}
                                   href='https://asiafoundation.org/wp-content/uploads/2021/11/Asia-Foundation-Strategy2025-Roadmap-for-a-Changing-Asia.pdf'>Read
                                    a book</a>
                            </div>
                        </div>
                        <a href='https://asiafoundation.org/wp-content/uploads/2021/11/Asia-Foundation-Strategy2025-Roadmap-for-a-Changing-Asia.pdf'>
                            <Image src='/about/book.jpg' alt='book' width={245} height={345}/>
                        </a>
                    </div>
                </article>
                <article className={styles.paragraph}>
                    <h3 className={styles.paragraph__title}>What we do</h3>
                    <p className={styles.paragraph__text}>
                        Our work remains as urgent and relevant today as was when we were established in 1954. The
                        Asia-Pacific region
                        continues to face critical issues that threaten the aspirations of billions. Communities remain
                        impacted by the lack
                        of access to justice, by rising inequality, pervasive subnational conflicts, challenges of
                        urbanization, violence against
                        women, and a closing space for civil society. Left unaddressed, these challenges threaten Asia's
                        many political and
                        economic gains and undermine its future prospects.
                    </p>
                    <div className={styles.paragraph__buttons} style={{justifyContent: 'center'}}>
                        <AboutButton text='Our work' url='/'/>
                    </div>
                </article>
                <article className={styles.paragraph}>
                    <h3 className={styles.paragraph__title}>Our partners</h3>
                    <p className={styles.paragraph__text}>
                        We work closely with a diverse range of bilateral and multilateral development agencies,
                        emerging Asian donors, philanthropic organizations, and the private sector to address the
                        critical issues facing the Asia-Pacific region. These
                        dynamic partnerships and donor resources are essential in support of programs in our 18 country
                        offices and making an
                        impact across a dynamic and developing Asia-Pacific.
                    </p>
                </article>

                <article className={styles.skills}>
                    <h3 className={styles.skills__title}>Our vision</h3>
                    <p className={styles.skills__text}>A peaceful, just, and thriving Asia.</p>
                </article>
                <article className={styles.skills}>
                    <h3 className={styles.skills__title}>Our mission</h3>
                    <p className={styles.skills__text}>The Asia Foundation improves lives, expands opportunities, and
                        helps societies flourish across a dynamic and
                        developing Asia. We work with innovative leaders and communities to build effective institutions
                        and advance
                        path breaking reforms. Together with our partners, we are committed to Asia's continued
                        development as a
                        peaceful, just, and thriving region of the world.</p>
                </article>
                <article className={styles.skills}>
                    <h3 className={styles.skills__title}>Our values</h3>
                    <p className={styles.skills__text}>Our core values are a shared foundation manifested in each of our
                        different country offices and local settings. These principles are a common thread to guide our
                        programs, our partnerships, our institutional culture, and our approach and decisions made by
                        our staff.
                        <br/>
                        <br/>
                        <b>Trust and partners hip</b> | Our operations and programs reflect the integrity and
                        accountability of our staff who are trusted by individuals and institutions across the Asia
                        Pacific.
                        <br/>
                        <br/>
                        <b>Longstanding presence and commitment |</b> We have made history through far-reaching reforms
                        and inclusive development and will continue to value a forward-thinking approach in the years
                        ahead.
                        <br/>
                        <br/>
                        <b>Deep respect for local context |</b> We are immersed in the social, political, environmental,
                        and economic realities in the region and informed by a community-led approach.
                        <br/>
                        <br/>
                        <b>Inclusion of differing views |</b> We believe in the importance of myriad perspectives and
                        encourage inclusive
                        dialogue and engagement to nurture homegrown talent and ideas.
                        <br/>
                        <br/>
                        <b>Innovating and adapting for impact |</b> We are known for our ability to identify, respond,
                        and iterate rapidly to
                        issues and events affecting the places and communities where we work.</p>
                </article>

                <p className={styles.quote}>
                    All material, including text and images, appearing on The Asia Foundation's website are the property
                    of The Asia Foundation, or used by permission. The materials
                    contained in this site may not be modified or altered in any way. You may not copy or distribute any
                    photograph, illustration, artwork, video, audio, or other graphic
                    material contained on this site for any use without first obtaining written permission from The Asia
                    Foundation and any other applicable copyright owner(s). You may not
                    copy, distribute, enter into a database, display, perform, create derivative works of, transmit, or
                    in any way exploit any part ofour site. The Asia Foundation's name and
                    logo are registered trademarks of The Asia Foundation. Our privacy policy
                </p>
            </div>
        </section>
    );
};

export default Approach;
