import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../Provider/Authprovider';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { div } from 'motion/react-client';

const ManageFood = () => {
    const { yourEmail } = useParams();
    const { user } = useContext(AuthContext);

    const [manage, setManage] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [modalData, setModalData] = useState(null);

    useEffect(() => {
        manageData();
    }, [yourEmail]);

    const manageData = async () => {
        const { data } = await axios.get(`https://apps-server-part.vercel.app/foods/${yourEmail}`);
        setManage(data);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://apps-server-part.vercel.app/food/${id}`);
            toast.success('Data has been deleted successfully');
            manageData();
        } catch (error) {
            console.log(error);
        }
    };
    /// new for deletee
    const moderndelete = (id) => {
        toast(t => (
            <div className='flex gap-3 items-center p-4'>
                <div>
                    <p>
                        Are you sure?
                    </p>
                </div>
                <div className='gap-2'>
                    <button className='bg-red-400 px-3 mx-2 py-1 text-white rounded-md' onClick={()=> {toast.dismiss(t.id)
                        handleDelete(id)
                    }}>Yes</button>
                    <button className='bg-green-400 py-1 px-3 text-white rounded-md' onClick={()=> toast.dismiss(t.id)}>No</button>
                </div>
                
            </div>
        ))
    }

    const openModal = (food) => {
        setModalData(food);
    };

    const closeModal = () => {
        setModalData(null);
    };

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const datum = Object.fromEntries(form.entries());
        const { quantity, ...newdata } = datum;
        newdata.quantity = +quantity;
        newdata.startDate = startDate;
        newdata.Status = 'available';

        console.log(newdata);

        try {
            if (modalData?._id) {
                
                await axios.put(`https://apps-server-part.vercel.app/foods/${modalData._id}`, newdata);
                toast.success('Data updated successfully');
            } else {
          
                // await axios.post('http://localhost:1000/foods', newdata);
                toast.success('Data cannot updated');
            }
            closeModal();
            manageData();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <ToastContainer />
            <div className="rounded-xl overflow-x-auto">
                <table className="table container mx-auto">
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Quantity</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {manage.map((man, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{man.name}</td>
                                <td>{man.location}</td>
                                <td>{man.quantity}</td>
                                <td>
                                    <span
                                        onClick={() => moderndelete(man._id)}
                                        className="font-semibold text-lg hover:cursor-pointer"
                                    >
                                        X
                                    </span>
                                    <span
                                        onClick={() => openModal(man)}
                                        className="mx-3 text-md font-semibold hover:cursor-pointer"
                                    >
                                        Edit
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {modalData && (
                <dialog open className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <form onSubmit={handleSubmitForm}>
                            <div className="flex justify-center items-start flex-col gap-6 p-6">
                                <div className="space-y-5 w-full flex flex-col justify-center mx-auto">
                                    <div>
                                        <p className="p-1 font-semibold text-md">Food Name:</p>
                                        <input
                                            name="name"
                                            type="text"
                                            defaultValue={modalData.name}
                                            required
                                            placeholder="Type your food name"
                                            className="input input-bordered input-md w-full max-w-xs"
                                        />
                                    </div>
                                    <div>
                                        <p className="p-1 font-semibold text-md">Food Image:</p>
                                        <input
                                            type="url"
                                            name="url"
                                            defaultValue={modalData.url}
                                            placeholder="Foods image URL"
                                            required
                                            className="input input-bordered input-md w-full max-w-xs"
                                        />
                                    </div>
                                    <div>
                                        <p className="p-1 font-semibold text-md">Food Quantity:</p>
                                        <input
                                            type="number"
                                            min="1"
                                            name="quantity"
                                            defaultValue={modalData.quantity}
                                            placeholder="Type Foods Quantity"
                                            required
                                            className="input input-bordered input-md w-full max-w-xs"
                                        />
                                    </div>
                                    <div>
                                        <p className="p-1 font-semibold text-md">Pickup Location:</p>
                                        <input
                                            type="text"
                                            name="location"
                                            defaultValue={modalData.location}
                                            placeholder="Type Pickup Location"
                                            required
                                            className="input input-bordered input-md w-full max-w-xs"
                                        />
                                    </div>
                                    <div>
                                        <p className="p-1 font-semibold text-md">Expired Date:</p>
                                        <DatePicker
                                            className="input input-bordered input-md w-full max-w-xs"
                                            selected={startDate}
                                            onChange={(date) => setStartDate(date)}
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center justify-center mt-12">
                                    <button className="btn btn-wide bg-gray-700 border-2 rounded-xl shadow-lg text-xl text-white font-semibold">
                                        Submit Here
                                    </button>
                                </div>
                            </div>
                        </form>
                        <div className="modal-action">
                            <button onClick={closeModal} className="btn">
                                Close
                            </button>
                        </div>
                    </div>
                </dialog>
            )}
        </div>
    );
};

export default ManageFood;
