import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/Authprovider';
import { button, div } from 'motion/react-client';

const Navbar = () => {
    const { user, logOut, updateUser } = useContext(AuthContext)


    const links = (
        <>
            <li><NavLink to='/home'>Home</NavLink></li>
            <li><NavLink to='/availableFood' className='mx-2'>Available Food</NavLink></li>
            <li><NavLink to='/addFood'>Add Food</NavLink></li>
            <li><NavLink to={`/foods/${user?.email}`} className='mx-2'>Manage My Foods</NavLink></li>
            <li><NavLink to={`/request/${user?.email}`}>My Food Request</NavLink></li>
        </>
    )
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-300 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Food Sharing</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user && user.email ? (
                            <>
                                <button onClick={logOut} type="button" className="btn mr-2">Log-Out</button>
                                <div>
                                    <img
                                        src={user?.photoURL || 'https://via.placeholder.com/40'}
                                        alt="User Avatar"
                                        className="w-10 h-10 rounded-full"
                                    />
                                </div>
                            </>
                        ) : (
                            <>
                                <NavLink to="/login" className="btn mr-2">Login</NavLink>
                                <NavLink to="/register" className="btn">Signup</NavLink>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;