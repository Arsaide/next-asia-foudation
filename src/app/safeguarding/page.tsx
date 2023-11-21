import React from 'react';
import Error from "@/component/Error/Error";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Our safeguarding commitment",
};

const Safeguarding = () => {
    return (
        <>
            <Error text={'"Our safeguarding commitment"'} />
        </>
    );
};

export default Safeguarding;