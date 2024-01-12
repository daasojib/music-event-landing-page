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
            <div className='py-6'>
                <p className='font-serif text-2xl py-2'>Our Blog</p>
                <p className='text-center mb-4'>Here we have provided some of our blogs, including information about our music concerts and the singers performances.</p>
                <progress className="progress w-36 md:w-56"></progress>
            </div>

            <div className='flex flex-wrap gap-4 p-4 md:p-8 lg:p-10 justify-center'>
                {blogs.map(blog => (
                    <div key={blog.id} className="card w-full md:w-72 glass shadow-xl">
                        <figure><img src={blog.picture} alt="Blog" className="w-full h-48 object-cover" /></figure>
                        <div className="card-body p-4">
                            <h2 className="card-title text-sm md:text-lg mb-2">
                                {blog.date}
                            </h2>
                            <p className="text-sm md:text-base">{blog.title}</p>
                            <div className="card-actions justify-end mt-2">
                                <button className="badge badge-outline btn-outline btn-secondary text-xs md:text-sm">View</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default OurBlog;