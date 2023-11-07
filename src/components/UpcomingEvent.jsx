import React from 'react';
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'

const UpcomingEvent = () => {
    return (
        <div>
            <div className='text-center bg-black text-white p-14'>
                <p className='font-bold text-xl'>Upcoming Event</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel iure asperiores labore velit eos qui aliquam maxime nemo facere.</p>
                <progress className="progress w-56"></progress>
                <div className='flex justify-center gap-8 my-10'>
                    <div className="mockup-code w-1/4">
                        <p className='font-bold text-xl'>Monday</p>
                        <p>30 October</p>
                    </div>
                    <div className="mockup-code w-1/4">
                        <p className='font-bold text-xl'>Friday</p>
                        <p>3 November</p>
                    </div>
                    <div className="mockup-code w-1/4">
                        <p className='font-bold text-xl'>Tuesday</p>
                        <p>7 November</p>
                    </div>
                </div>
                <div className='px-16'>
                    <div className="card card-side bg-gray-800 shadow-xl">
                        <figure><img src={img1} className='w-64 h-48' alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Registration!!</h2>
                            <p>Location: The Grand Ol Opry in Nashville </p>
                            <p>Schedule: 23 December 2023, 9:00 PM to 11:00PM </p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-sm btn-outline btn-accent">purchase</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-side mt-5 bg-gray-800 shadow-xl">
                        <figure><img src={img2} className='w-64 h-48' alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Registration!!</h2>
                            <p>Location: Melbourne International Arts Festival </p>
                            <p>Schedule: 11 December 2023, 9:00 PM to 11:00PM </p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-sm btn-outline btn-accent">purchase</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpcomingEvent;