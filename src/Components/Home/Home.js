import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
// import Videos from '../Videos/Videos';

import './Home.css';
import Dance from '../../Video/Dance/anastasia-shuraeva.mp4';
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
                <h1 className=" pt-3 site-name">eMotion DANCE Academy</h1>
            </div>
            <div className="container mt-3">
                <Banner></Banner>
            </div>
            <div className="container-fluid video-sec">
                <div className="row row-cols-2">
                    <div className="col">
                        <video className="dance " controls>
                            <source src={Dance} type="video/mp4"></source>
                        </video>
                    </div>
                    <div className="col p">
                        <p className="pb-5">Dance probably one of the most complete rhythmic exercises with a unique characteristic of amplifying mind-body co-ordination, dance is a perfect way of staying fit and in shape. With its history dating back to the very advent of human civilisation, dance was and is a great way of exuding happiness, fun, pleasure and entertainment.

                            Scholars of dance have studied the various advantages of this physical art and have concluded that dancing is in no way less than any other form of exercises to keep fit and healthy. With full body movements, each limb retains its mobility and thus delays aging and its effects. In fact with dance focused on specific body areas, muscles can be toned or augmented. The many folklore doing rounds talk about dance at great length. As per them dance was a devotional, recreational as well as a sensual practice. Marvellous Carvings and sculptures on temples of South India, Khujraho and Ajanta Caves further substantiate this.</p>
                    </div>
                </div>
            </div>
            <div className="my-4">
                <h3>Our Featured Classes</h3>
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
                                    Price: $ {service.price}
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