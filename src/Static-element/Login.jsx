import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/Authprovider';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const{userLogin,setUser,handleGoogleSign} =useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)
    const handleSubmit = (e)=> {
        e.preventDefault()
        const form = e.target 
        const email = form.email.value 
        const password = form.password.value 
        console.log(email,password)
        
        
        userLogin(email,password) 
        .then(result => {
            const user = result.user 
            setUser(user) 
            toast.success("Successfully Login")
            console.log(user)
            navigate(location?.state ? location.state: "/home")
        })
        .catch(error => {
            toast.error(`error ${error} can not login`)
        })
    }
    const handleGoogleLogin = () => {
        handleGoogleSign()
            .then((result) => {
                const user = result.user;
                setUser(user);
                toast.success("Successfully Login")
                navigate('/home')
            })
            .catch((error) => {
                toast.error(`Error: ${error.message}`);
            });
    };
    return (
        <div>
            <div className="hero bg-base-200 container mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-[560px] max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div>
                                <p className='text-center'>don't Register yet go to <NavLink to='/register' className='hover:underline'>Register Page</NavLink></p>
                            </div>
                            <div className='flex items-center justifu-center'>
                                <button onClick={handleGoogleLogin} className='btn active-btn'>Google Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Login;