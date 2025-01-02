import React from 'react';

const Error = () => {
    return (
        <div>
            <div className='text-center space-y-2 flex flex-col min-h-screen items-center justify-center'>
                <h1 className='text-red-700 text-3xl font-bold'>ERROR: 404</h1>
                <p className='text-xl text-gray-700 font-bold'>This is An Error Page You Have just Entered</p>
            </div>
        </div>
    );
};

export default Error;