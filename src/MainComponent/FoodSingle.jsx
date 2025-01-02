import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../Provider/Authprovider';
import { toast, ToastContainer } from 'react-toastify';

const FoodSingle = () => {
    const { user } = useContext(AuthContext)
    const currentDate = new Date().toISOString().split('T')[0];
    
    const [single, setSingle] = useState([])
    const { id } = useParams()
    console.log(id)
    useEffect(() => {
        homeGet()
    }, [id])
    const homeGet = async () => {
        const { data } = await axios.get(`https://apps-server-part.vercel.app/food/${id}`)
        setSingle(data)
    }
    const { Status, location, name, notes, quantity, startDate, url, yourName, YourUrl, _id, yourEmail } = single || {}

    // This is for post in a new section 
    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = new FormData(e.target);
        const datum = Object.fromEntries(form.entries());
        const { Status, ...newData } = datum; // Destructure to exclude Status
        newData.Status = 'requested';
     
        console.log("Submitting data:", newData);
        console.log(datum)
    
        // Patch function
        try {
            const patchResponse = await axios.patch(`https://apps-server-part.vercel.app/food/${id}`, newData);
            toast.success('Data updated successfully!');
            console.log('Patch Response:', patchResponse.data);
        } catch (error) {
            toast.error('Failed to update data!', { autoClose: 5000 });
            console.error('Patch Error:', error);
            return; // Exit the function if the patch fails
        }
    
        // Post function
        try {
            const postResponse = await axios.post('https://apps-server-part.vercel.app/request', datum);
            toast.success('Data posted successfully!');
            console.log('Post Response:', postResponse.data);
        } catch (error) {
            toast.error('Failed to post data!', { autoClose: 2000 });
            console.error('Post Error:', error);
        }
    //     const form = new FormData(e.target)
    //     const datum = Object.fromEntries(form.entries())
    //     const {Status, ...newData} = datum

    //     newData.Status = 'requested'
    //     console.log(newData)
    //     // This is for patch function 
    //     try {
    //         const { data } = await axios.patch(`https://apps-server-part.vercel.app/food/${id}`, newData);
    //         // Show success toast
    //         toast.success('Data Updated successfully!');
    //         console.log('Response:', data);
    //       } catch (error) {
    //         // Show error toast
    //         toast.error('Failed to Updated data data!', {
              
    //           autoClose: 5000,
    //         });
    //         console.error('Error:', error);
    //       }
    // }
        
    //     console.log(datum)
    

    //     // const { data } = await axios.post('https://apps-server-part.vercel.app/request', datum)
    //     try {
    //         const { data } = await axios.post('https://apps-server-part.vercel.app/request', datum);
    //         // Show success toast
    //         toast.success('Data posted successfully!');
    //         console.log('Response:', data);
    //       } catch (error) {
    //         // Show error toast
    //         toast.error('Failed to post data!', {
              
    //           autoClose: 2000,
    //         });
    //         console.error('Error:', error);
    //       }
    }
    return (
        <div>
            <ToastContainer/>
            <div className='container mx-auto bg-gray-50 px-2 py-12 rounded-2xl shadow-lg'>
                <div className='flex gap-4 flex-col md:flex-row items-center justify-center'>
                    <div className='md:w-1/2 flex space-y-2 flex-col justify-center items-center'>
                        <img src={url} className='rounded-xl shadow-md' alt="" />
                        <p className='font-bold text-md'>Name: {name}</p>
                    </div>
                    <div className='md:w-1/2 flex space-y-4 flex-col justify-center items-center'>
                        <p className='text-md font-semibold'>Food Id: {_id}</p>
                        <p className='text-md font-semibold'>Expired date:{startDate}</p>
                        <p className='text-md font-semibold'>quantity: {quantity}</p>
                        <p className='text-md font-semibold'>Location: {location}</p>
                        <p className='text-md font-semibold'>Donator Name: {yourName}</p>
                        <p className='text-md font-semibold'>Donator Email: {yourEmail}</p>
                        <p className='text-md font-semibold'>Some Notes: {notes}</p>
                    </div>
                </div>



                {/* this is for modal */}
                <div className='flex justify-center items-center mt-12'>
                    {/* The button to open modal */}
                    <label htmlFor="my_modal_6" className="btn btn-wide bg-violet-700 border-2 rounded-xl shadow-lg text-lg text-white font-semibold">Request Here</label>

                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                    <div className="modal" role="dialog">
                        <div className="modal-box">
                            <form onSubmit={handleSubmit} action="">
                                <div className='flex gap-4 flex-col items-center justify-center'>
                                    <div className='flex space-y-2 flex-col justify-start items-center'>
                                        <p className='text-md'>Image:</p>
                                        <input
                                            type="url"
                                            defaultValue={url}
                                            name='url'
                                            placeholder="Foods image URL"
                                            required
                                            readOnly
                                            className="input input-bordered input-md w-full max-w-xs" />
                                        <p className='text-md'>Name:</p>
                                        <input
                                            defaultValue={name}
                                            type="text"
                                            placeholder="Type your name"
                                            name='name'
                                            readOnly
                                            className="input input-bordered input-md w-full max-w-xs" />
                                    </div>
                                    <div className='flex space-y-5 flex-col justify-center items-center'>
                                       
                                        <p className='text-md'>Expired date:</p>
                                        <input
                                            defaultValue={startDate}
                                            type="text"
                                            placeholder="Type your name"
                                            name='ExpiredDate'
                                            readOnly
                                            className="input input-bordered input-md w-full max-w-xs" />
                                        <p className='text-md'>quantity: </p>
                                        <input
                                            defaultValue={quantity}
                                            type="number"
                                            placeholder="Type quantity"
                                            name='quantity'
                                            readOnly
                                            className="input input-bordered input-md w-full max-w-xs" />
                                        <p className='text-md'>Location:</p>
                                        <input
                                            defaultValue={location}
                                            type="text"
                                            placeholder="Type quantity"
                                            name='location'
                                            readOnly
                                            className="input input-bordered input-md w-full max-w-xs" />
                                        <p className='text-md'>Donator Name:</p>
                                        <input
                                            defaultValue={yourName}
                                            type="text"
                                            placeholder="Type quantity"
                                            name='yourName'
                                            readOnly
                                            className="input input-bordered input-md w-full max-w-xs" />
                                        <p className='text-md'>Donator Email:</p>
                                        <input
                                            defaultValue={yourEmail}
                                            type="email"
                                            placeholder="Type email"
                                            name='email'
                                            readOnly
                                            className="input input-bordered input-md w-full max-w-xs" />
                                        <p className='text-md'>Requested Person:</p>
                                        <input
                                            defaultValue={user?.email}
                                            type="email"
                                            placeholder="Type email"
                                            name='reqemail'
                                            readOnly
                                            className="input input-bordered input-md w-full max-w-xs" />
                                        <p className='text-md'> Date: </p>
                                        <input
                                            defaultValue={currentDate}
                                            type="text"
                                            placeholder="Type email"
                                            name='requestDate'
                                            readOnly
                                            className="input input-bordered input-md w-full max-w-xs" />
                                        <p className='text-md'>Some Notes:</p>
                                        <input
                                            type="additional notes"
                                            placeholder="Type notes"
                                            name='notes'
                                            defaultValue={notes}
                                            required
                                            className="input input-bordered input-md w-full max-w-xs" />
                                    </div>
                                </div>
                                <div className='flex items-center justify-center mt-12'>
                                    <button className="btn btn-wide bg-gray-700 border-2 rounded-xl shadow-lg  text-xl text-white font-semibold ">Submit Here</button>
                                </div>
                            </form>
                            <div className="modal-action">
                                <label htmlFor="my_modal_6" className="btn">Close!</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodSingle;