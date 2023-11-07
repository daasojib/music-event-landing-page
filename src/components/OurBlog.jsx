import React, { useEffect, useState } from 'react';

const OurBlog = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className='bg-black text-white text-center'>
            <div>
                <p className='font-serif text-2xl text-center py-5'>Our Blog</p>
                <p className='text-center'>Here we have provide you some of our blogs which is included our music concert and the singers performance.</p>
                <progress className="progress w-56"></progress>
            </div>
            <div  className='flex gap-10 p-5 justify-center'>
            {blogs.map(blog =>
                    <div key={blog.id} className="card w-72 glass shadow-xl">
                <figure><img src={blog.picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {blog.date}
                    </h2>
                        <p>{ blog.title}</p>
                    <div className="card-actions justify-end">
                        <button className="badge badge-outline btn-outline btn-secondary">View</button>
                    </div>
                </div>
            </div>
                )}
                </div>
        </div>
    );
};

export default OurBlog;