import React, { useContext } from 'react';
import { AuthContext } from '../Provider/Authprovider';
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';
import Loading from '../Static-element/Loading';

const AddFood = () => {
    const [startDate, setStartDate] = useState(new Date());
    const { user } = useContext(AuthContext)
    // console.log(user?.email, user?.photoURL, user?.displayName)
    const{isloading,mutateAsync} = useMutation({
        mutationFn: async foodData => {
            await axios.post('https://apps-server-part.vercel.app/foods', foodData);
        }
    })
    if(isloading) return <Loading></Loading>
    const handleSubmitForm = async (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const datum = Object.fromEntries(form.entries())
        const { quantity, ...newdata } = datum
        newdata.quantity = +quantity
        newdata.startDate = startDate
        newdata.Status = 'available'
        // console.log(data)
        console.log(newdata)
        try {
            await mutateAsync(newdata)
            // const { data } = await axios.post('http://localhost:1000/foods', newdata);
            // Show success toast
            toast.success('Food added successfully!', {
               
            });
            // console.log(data);
        } catch (error) {
            // Show error toast
            toast.error('Failed to add food. Please try again.', {
           
            });
            console.error(error);
        }
    }
    return (
        <div>
            <ToastContainer></ToastContainer>
            <div className='bg-gray-400 rounded-2xl shadow-2xl container mx-auto my-6 py-10'>
                <form onSubmit={handleSubmitForm} action="">
                    <div className='flex justify-center items-start flex-col md:flex-row gap-6 p-6'>
                        <div className='space-y-5 w-full flex flex-col justify-center mx-auto'>
                            <div>
                                <p className='p-1 font-semibold text-md'>Food Name:</p>
                                <input
                                    name='name'
                                    type="text"
                                    required
                                    placeholder="Type your food name"
                                    className="input input-bordered input-md w-full max-w-xs" />
                            </div>
                            <div>
                                <p className='p-1 font-semibold text-md'>Food Image:</p>
                                <input
                                    type="url"
                                    name='url'
                                    placeholder="Foods image URL"
                                    required
                                    className="input input-bordered input-md w-full max-w-xs" />
                            </div>
                            <div>
                                <p className='p-1 font-semibold text-md'>Food Quantity:</p>
                                <input
                                    type="number"
                                    min="1"
                                    name='quantity'
                                    placeholder="Type Foods Quantity"
                                    required
                                    className="input input-bordered input-md w-full max-w-xs" />
                            </div>
                            <div>
                                <p className='p-1 font-semibold text-md'>Pickup Location:</p>
                                <input
                                    type="text"
                                    name='location'
                                    placeholder="Type Pickup Location"
                                    required
                                    className="input input-bordered input-md w-full max-w-xs" />
                            </div>
                            <div>
                                <p className='p-1 font-semibold text-md'>Expired Date:</p>
                                <DatePicker className="input input-bordered input-md w-full max-w-xs" selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div>

                        </div>
                        <div className='space-y-5 w-full mx-auto flex flex-col justify-center'>
                            <div className='space-y-5'>
                                <p className='p-1 font-semibold text-md'>Additional Notes:</p>
                                <textarea className='w-1/2 mt-1 p-2 rounded-lg' name="notes" required placeholder='Add Notes' rows='3' id="">

                                </textarea>

                            </div>
                            <div>
                                <p className='p-1 font-semibold text-md'>Your name:</p>
                                <input
                                    defaultValue={user?.displayName}
                                    type="text"
                                    placeholder="Type your name"
                                    name='yourName'
                                    className="input input-bordered input-md w-full max-w-xs" />
                            </div>
                            <div>
                                <p className='p-1 font-semibold text-md'>Your email:</p>
                                <input
                                    defaultValue={user?.email}
                                    type="email"
                                    placeholder="Type your email"
                                    name='yourEmail'
                                    className="input input-bordered input-md w-full max-w-xs" />
                            </div>
                            <div>
                                <p className='p-1 font-semibold text-md'>Your Image:</p>
                                <input
                                    defaultValue={user?.photoURL}
                                    type="url"
                                    name='yourUrl'
                                    placeholder="Submit your image url"
                                    className="input input-bordered input-md w-full max-w-xs" />
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-center mt-12'>
                        <button className="btn btn-wide bg-gray-700 border-2 rounded-xl shadow-lg  text-xl text-white font-semibold ">Submit Here</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddFood;