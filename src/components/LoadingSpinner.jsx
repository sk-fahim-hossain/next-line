import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className="flex items-center justify-center text-center h-[calc(100vh-110px)]">
            <p className="text-4xl font-extrabold">L</p>
            <div className="border-full rounded-full h-8 w-8  border-dashed animate-spin border-8 border-blue-700"></div>
            <p className="text-4xl font-extrabold">DING...</p>
        </div>
    );
};

export default LoadingSpinner;