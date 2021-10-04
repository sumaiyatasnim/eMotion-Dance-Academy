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
            <div className="row row-cols-3 g-4 mt-4">
                {
                    classes.map(cls => <Class
                        cls={cls}>

                    </Class>)
                }
            </div>
        </div>
    );
};

export default Services;