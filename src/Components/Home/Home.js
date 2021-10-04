import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import './Home.css'
const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    const homeServices = services.slice(0, 4);
    // const { style, instructor, classes, price, img } = service;
    console.log(homeServices);
    return (
        <div className="container-fluid home">
            <div >
                <h1 className=" pt-5 site-name">eMotion DANCE Academy</h1>
            </div>
            <div className="container mt-5">
                <Banner></Banner>
            </div>
            <div className="my-4">
                <h3>Our Classes</h3>
            </div>
            <div className="row row-cols-4 home-class ">
                {
                    homeServices.map(service => <div key={service.id} className="col rounded-3">
                        <div className="card h-100">
                            <img src={service.img} className="card-img-top class-img" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Style: {service.style}</h5>
                                <p className="card-text">
                                    Instructor: {service.instructor}
                                </p>
                                <p className="card-text">
                                    Classes: {service.classes}
                                </p>
                                <h6>
                                    Price: {service.price}
                                </h6>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div className="container-fluid mt-3 mb-4 rounded-3 ">
                <div className="row row-cols-3">
                    <div className="col">
                        <div className="card">
                            <div className="card-body extra">
                                <h4 className="card-title">100+ classes</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-body extra">
                                <h4 className="card-title">9 programs</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-body extra">
                                <h4 className="card-title">1000+ students</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;