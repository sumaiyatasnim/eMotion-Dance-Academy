import React from 'react';
import './About.css'
const About = () => {
    return (
        <div className="container-fluid bg-dark">
            <div><h1 className="text-white">We teach different dance level students</h1>
            </div>
            <div class="row row-cols-1 row-cols-md-4">
                <div class="col mb-4">
                    <div class="card">

                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card">

                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card">

                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
                <div class="col mb-4">
                    <div class="card">

                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;