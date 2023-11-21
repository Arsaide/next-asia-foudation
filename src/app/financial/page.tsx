import React from 'react';
import Error from "@/component/Error/Error";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Financial information",
};

const Financial = () => {
    return (
        <>
            <Error text={'"Financial information"'} />
        </>
    );
};

export default Financial;