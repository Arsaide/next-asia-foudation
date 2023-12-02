import styles from './page.module.css'

import React from 'react';
import Error from "@/component/Error/Error";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'News and Media',
    description: 'Explore the captivating world of news and blogs from our charitable foundation, \'Asia\' Stay informed about the latest developments and be inspired by stories of positive impact. Join our community, where each piece of news is a step towards building a better future together.',

};

const NewsMediaPage = () => {
    return (
        <>
            <Error text={'"News and Media"'}/>
        </>
    );
};

export default NewsMediaPage;
