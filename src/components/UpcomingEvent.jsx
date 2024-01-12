import React from 'react';
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'

const UpcomingEvent = () => {
    return (
        <div className="text-center bg-black text-white p-8 md:p-14">
            <p className="font-bold text-xl">Upcoming Event</p>
            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel iure asperiores labore velit eos qui aliquam maxime nemo facere.</p>
            <progress className="progress w-56 mb-6"></progress>

            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 my-6 md:my-10">
                <div className="mockup-code w-full md:w-1/3">
                    <p className="font-bold text-xl">Monday</p>
                    <p>30 October</p>
                </div>
                <div className="mockup-code w-full md:w-1/3">
                    <p className="font-bold text-xl">Friday</p>
                    <p>3 November</p>
                </div>
                <div className="mockup-code w-full md:w-1/3">
                    <p className="font-bold text-xl">Tuesday</p>
                    <p>7 November</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
    <div className="card card-side bg-gray-800 shadow-xl">
        <figure><img src={img1} className="w-full h-48 object-cover" alt="Event 1" /></figure>
        <div className="card-body p-4">
            <h2 className="card-title text-lg md:text-xl lg:text-2xl mb-2">Registration!!</h2>
            <p className="text-sm md:text-base lg:text-lg mb-2">Location: The Grand Ol Opry in Nashville</p>
            <p className="text-sm md:text-base lg:text-lg mb-2">Schedule: 23 December 2023, 9:00 PM to 11:00 PM</p>
            <div className="card-actions justify-end">
                <button className="btn btn-sm btn-outline btn-accent">Purchase</button>
            </div>
        </div>
    </div>
    <div className="card card-side bg-gray-800 shadow-xl">
        <figure><img src={img2} className="w-full h-48 object-cover" alt="Event 2" /></figure>
        <div className="card-body p-4">
            <h2 className="card-title text-lg md:text-xl lg:text-2xl mb-2">Registration!!</h2>
            <p className="text-sm md:text-base lg:text-lg mb-2">Location: Melbourne International Arts Festival</p>
            <p className="text-sm md:text-base lg:text-lg mb-2">Schedule: 11 December 2023, 9:00 PM to 11:00 PM</p>
            <div className="card-actions justify-end">
                <button className="btn btn-sm btn-outline btn-accent">Purchase</button>
            </div>
        </div>
    </div>
</div>

        </div>

    );
};

export default UpcomingEvent;