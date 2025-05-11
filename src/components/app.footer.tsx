'use client';
import React from 'react';

const AppFooter: React.FC = () => {
    return (
        <footer className="bg-red-800 text-black py-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default AppFooter;