import styles from './page.module.scss'

import React from 'react';
import TheBanner from "@/component/TheBanner/TheBanner";
import WorkContent from "@/component/Pages/Work/WorkContent/WorkContent";

const OurWorkPage = () => {
    return (
       <>
           <TheBanner text='where we work' img='banners/work-banner.jpg' />
           <WorkContent />
       </>
    );
};

export default OurWorkPage;
