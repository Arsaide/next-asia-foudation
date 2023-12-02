import React from 'react';
import {Metadata} from "next";
import DonateContent from "@/component/Pages/Donate/DonateContent/DonateContent";

export const metadata:Metadata = {
    title: 'Donate now - The Asia Foundation',
    description: 'Make a Difference with Your Donation to The Asia Foundation. Support our impactful initiatives by contributing now. Your generosity empowers positive change, creating a brighter future for communities across the globe. Join us in building a world where everyone has the opportunity to thrive. Donate now to The Asia.'
}

const Donate = () => {
    return (
       <>
           <DonateContent/>
       </>
    );
};

export default Donate;
