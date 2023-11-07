import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-gray-800 text-white">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by
            Arena Music</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;