import styles from './page.module.scss'

import React from 'react';
import TheBanner from "@/component/TheBanner/TheBanner";
import Content from "@/component/Pages/Work/Content/Content";

const OurWorkPage = () => {
    return (
       <>
           <TheBanner text='where we work' img='banners/work-banner.jpg' />
           <Content />
       </>
    );
};

export default OurWorkPage;
