import React from 'react'
import Common from "./Common.jsx";
import web from "./Images/webdev2.jpg";

const About = () => {
    return (
        <>
            <Common
                name="A Website Created using Functional React JS Components in"
                imgsrc={web}
                visit="/contact"
                btname="Contact Now"
            />
        </>
    )
}

export default About;