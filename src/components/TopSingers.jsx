import React from 'react';
import ReactCardSlider from 'react-card-slider-component';

const slides = [
    { image: "https://images.unsplash.com/photo-1517230878791-4d28214057c2?auto=format&fit=crop&q=80&w=1169&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Elizeu Dias", description: "Location: Barra da Tijuca, Brazil" },
    { image: "https://images.unsplash.com/photo-1525926477800-7a3b10316ac6?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Vishnu R Nair", description: "Kozhikode, India" },
    { image: "https://images.unsplash.com/photo-1501837303764-ada599fdac6c?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Billetto Editorial", description: "Dublin 2, Ireland" },
    { image: "https://images.unsplash.com/photo-1499424017184-418f6808abf9?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Bobby Hendry", description: " New York, NY 10011, USA." },
    { image: "https://images.unsplash.com/photo-1521417531039-75e91486cc40?auto=format&fit=crop&q=80&w=1429&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Vider Nordli-Mathisen", description: "Oscarsborg Fortress, Oscarsborg, Norway" },
    { image: "https://images.unsplash.com/photo-1514839956153-93271bde9cd3?auto=format&fit=crop&q=80&w=1173&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Courtney Kammers", description: "Suite 100. Scottsdale. AZ. 85254." },
    { image: "https://images.unsplash.com/photo-1508214665949-7b7cb56e3bb1?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Edward Cisneros", description: "Orange, United States" },
]

const TopSingers = () => {
    return (
        <div className='bg-gray-800'>
            <p className='text-white text-3xl text-center py-6 font-serif'>Top Singers</p>
            <div className='p-4 md:p-10 lg:px-20 flex justify-center'>
                <ReactCardSlider slides={slides} />
            </div>
        </div>

    );
};

export default TopSingers;