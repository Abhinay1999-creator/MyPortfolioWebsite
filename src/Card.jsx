import React from 'react';
import { NavLink } from 'react-router-dom';


const Card = (props) => {
    return (
        <>
            <div className="col-md-4 col-12 mx-auto">
                <div className="card">
                    <img className="card-img-top" src={props.imgsrc} alt={props.imgsrc} />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.text}</p>
                        <a href={props.link} target="_blank">
                            <button className="btn btn-secondary">Check Here</button>
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card;