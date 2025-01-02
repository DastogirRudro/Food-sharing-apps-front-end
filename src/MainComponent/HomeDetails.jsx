import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const HomeDetails = ({ home }) => {
    const { Status, location, name, notes, quantity, startDate, url, yourName, YourUrl, _id, yourEmail } = home || {}
    return (
        <div>
            <div >

                <div>
                    <div className="card bg-base-100 max-w-80 shadow-xl">
                        <figure>
                            <img
                                src={url}
                                alt={url} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold">
                                {name}
                            </h2>
                            <h2 className="card-title font-semibold">
                                {location}
                            </h2>
                            <h2 className="card-title font-normal">
                                {quantity}
                            </h2>
                            <p>{notes}</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">{Status}</div>
                            </div>
                            <div className='flex mt-4 justify-center items-center'>
                                <NavLink to={`/food/${_id}`}> <button className='py-0 rounded-2xl text-xs font-bold px-4 btn btn-primary'>Show Details</button></NavLink>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeDetails;