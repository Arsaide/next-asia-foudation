import styles from './page.module.css'

import React from 'react';
import Error from "@/component/Error/Error";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'News and Media',
};

const NewsMediaPage = () => {
    return (
       <>
           <Error text={'"News and Media"'}/>
       </>
    );
};

export default NewsMediaPage;
