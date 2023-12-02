import styles from './page.module.scss'

import React from 'react';
import TheBanner from "@/component/TheBanner/TheBanner";
import WorkContent from "@/component/Pages/Work/WorkContent/WorkContent";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Where we work",
    description: 'Explore the Reach of the Asia Foundation: Uncover Our Impactful Presence Across Cities and Nations. Delve into the regions where we operate, the cities we engage with, and the countries we work tirelessly to uplift. Discover the breadth of our influence as we strive to create positive change and make a meaningful impact in diverse communities.',
};
const OurWorkPage = () => {
    return (
       <>
           <TheBanner text='where we work' img='banners/work-banner.jpg' />
           <WorkContent />
       </>
    );
};

export default OurWorkPage;
