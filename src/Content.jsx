import React from 'react';
import Card from "./Card.jsx";
import Sdata from "./Sdata.jsx";

const Content = () => {
    return (
        <>
            <div className="my-3">
                <h1 className="text-center">My Content</h1>
                <div className="container-fluid mb-5">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row gy-4">

                                {
                                    Sdata.map((val, index) => {
                                        return <Card key={index} imgsrc={val.imgsrc} title={val.title} text={val.text} link={val.link}/>
                                    })
                                }


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Content;