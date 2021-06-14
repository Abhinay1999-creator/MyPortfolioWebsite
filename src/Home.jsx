import React from 'react'
import { NavLink } from 'react-router-dom';
import Common from "./Common.jsx";
import web from "./Images/webdev1.jpg";

const Home = () => {
    return (
        <>
            <Common
            name="Welcome to the world of"
            imgsrc={web} 
            visit = "/content"
            btname = "Get Content"
            />
        </>
    )
}

export default Home;