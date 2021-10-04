import React, { useEffect, useState } from 'react';
import "./Blog.css"
const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="container-fluid blogs">
            <div>
                <h1 className="text-white">Dance Terms, Defined</h1>
            </div>
            <div className="row row-cols-1 container-fluid">
                {
                    blogs.map(blog => <div className="col rounded-3 m-3 ">
                        <div className="card h-100 p-4 blog">
                            <h3>{blog.style}</h3>
                            <p>{blog.description}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Blogs;