import React from 'react';
import img from '../assets/image-man.jpg'

const TopConcert = () => {
    return (
        <div className='bg-gray-800 px-28 py-20'>
            <div className='flex text-white'>
            <img className='w-1/2' src="https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className='p-10 my-5'>
                <p className='text-3xl font-bold'>Sunday Night Show 3.0, <span className='text-red-500'>Loading!!</span></p>
                    <p className='my-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt reprehenderit assumenda accusantium perferendis molestias vitae doloribus harum ducimus, expedita nihil quae voluptate labore facilis magni et quam suscipit reiciendis ullam.</p>
                    <button className="btn me-2 btn-sm btn-outline btn-accent">Details</button>
                    <button className="btn btn-sm btn-outline btn-secondary">Get Ticket</button>
            </div>
           </div>
        </div>
    );
};

export default TopConcert;