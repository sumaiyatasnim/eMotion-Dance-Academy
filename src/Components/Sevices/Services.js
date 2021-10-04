import React, { useEffect, useState } from 'react';
import './Services.css'
import Class from '../Class/Class'
const Services = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch("./data.JSON")
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    return (
        <div className="mx-4">
            <div className="mt-3 text-white bg-secondary py-2">
                <h2>Our Classes</h2>
            </div>
            <div className="row row-cols-3 g-4 mt-3">
                {
                    classes.map(cls => <Class
                        cls={cls}
                        key={cls.id}>

                    </Class>)
                }
            </div>
        </div>
    );
};

export default Services;