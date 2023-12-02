import styles from './page.module.css'

import React from 'react';
import Error from "@/component/Error/Error";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: "Get involved",
    description: 'Empower change and make a difference with \'Asia\' – get involved today. Explore meaningful opportunities to contribute to our philanthropic endeavors. Join hands with us as we work towards creating positive impact and fostering a brighter future for communities. Your involvement matters in shaping a better world through the initiatives of \'Asia\'.',
};
const InvolvedPage = () => {
    return (
        <>
            <Error text={'"Get involved"'}/>
        </>
    );
};

export default InvolvedPage;
