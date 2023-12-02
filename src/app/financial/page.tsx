import React from 'react';
import Error from "@/component/Error/Error";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Financial information",
    description: 'At \'Asia,\' we believe in openness and accountability. Explore comprehensive reports and insights into our financial activities, ensuring your trust and confidence in our commitment to responsible stewardship. Discover how your support contributes to impactful initiatives and sustains the positive change we strive to bring to the world.',
};

const Financial = () => {
    return (
        <>
            <Error text={'"Financial information"'} />
        </>
    );
};

export default Financial;