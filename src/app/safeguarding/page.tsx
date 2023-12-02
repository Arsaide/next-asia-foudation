import React from 'react';
import Error from "@/component/Error/Error";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Our safeguarding commitment",
    description: 'Immerse yourself in our unwavering commitment to providing a safe and secure \'Asia Foundation\' environment. Find out how we prioritize the well-being of everyone involved by building a culture of safety and trust. Join us and support our commitment to protection as we work together towards a safer and more secure future.'
};

const Safeguarding = () => {
    return (
        <>
            <Error text={'"Our safeguarding commitment"'} />
        </>
    );
};

export default Safeguarding;