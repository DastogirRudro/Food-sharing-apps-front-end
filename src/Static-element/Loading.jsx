import React from 'react';


const Loading = () => {
    
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <span className="loading loading-spinner text-success"></span>
            <span className="loading loading-spinner text-warning"></span>
            <span className="loading loading-spinner text-error"></span>
        </div>
    );
};

export default Loading;