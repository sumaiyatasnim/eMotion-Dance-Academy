import React from 'react';
import './Class.css';
const Class = (props) => {
    const { style, instructor, classes, price, img } = props.cls
    return (
        <div className="container mt-0 class">

            <div className="col rounded-3 gy-3">
                <div className="card h-100 mb-3">
                    <img src={img} className="card-img-top class-img" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Style: {style}</h5>
                        <p className="card-text">
                            Instructor: {instructor}
                        </p>
                        <p className="card-text">
                            Classes: {classes}
                        </p>
                        <h6>
                            Price: $ {price}
                        </h6>

                        <button className="btn-info text-white mt-2">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Class;