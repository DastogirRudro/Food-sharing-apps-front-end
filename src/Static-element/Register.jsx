import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/Authprovider';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
    const { createNewUser,user,updateUser, setUser} = useContext(AuthContext)
    const [error,setError] = useState({})
     const navigate = useNavigate()
    const handleSubmit = (e)=> {
        e.preventDefault()
        const form = e.target 
        const email = form.email.value 
        const name = form.name.value 
        const photo = form.photo.value
        const password = form.password.value 
         // Password validation
         if (password.length < 6) {
            setError((prev) => ({ ...prev, password: 'Password must be at least 6 characters long.' }));
            return;
        } else {
            setError((prev) => ({ ...prev, password: '' })); 
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            setError((prev) => ({ ...prev, password: 'Password must contain at least one uppercase and one lowercase letter.' }));
            return;
        } else {
            setError((prev) => ({ ...prev, password: '' }));
        }

        console.log(email,password,name,photo)
        createNewUser(email,password)
        .then(result => {
           const userr = result.user
            console.log(userr) 
            setUser(userr)
            toast.success('you have been successfully Register')
            updateUser({displayName: name, photoURL: photo})
            .then(()=> {
                setUser({ ...userr, displayName: name, photoURL: photo });
                navigate('/home')
            })
            .catch ((err)=> console.log(err))
            
            
            
        })
        .catch((err) => {
            toast.error(`Your Registration is failed ${err}`)
            
            
           console.log(err)
        })
       
    }
    return (
        <div>
             
              <div className="hero bg-base-200 container mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-[560px] max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" name='name' placeholder="Name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo-Url</span>
                                </label>
                                <input type="photo" name='photo' placeholder="Photo-url" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                {
                                    error.password && (<label className="label text-xs text-red-500">
                                    <span className="label-text text-red-600">{error.password}</span>
                                </label>)
                                }
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <div>
                                <p className='text-center'>If you have already Login then go to <NavLink to='/login' className='hover:underline'>Login Page</NavLink></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Register;