import styles from './page.module.css'

import React from 'react';
import Error from "@/component/Error/Error";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: "Get involved",
};
const InvolvedPage = () => {
    return (
        <>
            <Error text={'"Get involved"'}/>
        </>
    );
};

export default InvolvedPage;
