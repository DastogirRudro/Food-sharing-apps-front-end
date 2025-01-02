import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Extrato = () => {
    
    const handleSubmit = (e) => {
      e.preventDefault() 
      const form = e.target 
      const name = form.name.value 
      const email =form.email.value
      const opinion = form.opinion.value 
      const data = {
        name: name,
        email: email,
        opinion: opinion
      }
      console.log(data)
       toast.success("Thanks! for Submit Your Opinion if you have more opinion then also submit this in our opinion section.")
      form.reset('')

    }
    return (
        <div className='my-4'>
            <ToastContainer/>
            <h1 className='text-center font-bold text-3xl text-gray-600 space-y-10'>User Review for Our Foods</h1>
            <div className='flex mt-6 mb-4 gap-8 container mx-auto w-96 rounded-2xl flex-col items-center justify-center'>
                <div className="card border-2 mt-2 bg-base-100 w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://i.ibb.co.com/p0xLcCJ/202353995-3d-icon-avatar-cartoon-hipster-character-stylish-smiling-man-with-beard-with-phone-people.jpg"
                            alt="Shoes"
                            className=" w-20 shadow-xl h-20 rounded-full" />
                    </figure>

                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Chester</h2>
                        <p>The food quality of this Website is too good and very nice delicisous food are here.</p>
                        <div className="card-actions">
                            <div className="card-actions">
                                <div className="rating rating-lg rating-half">
                                    <input type="radio" name="rating-10" className="rating-hidden" />
                                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                    <input
                                        type="radio"
                                        name="rating-10"
                                        className="mask mask-star-2 mask-half-1 bg-green-500"
                                        defaultChecked
                                    />
                                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                </div>
                            </div>

                        </div>
                        <div className="card-actions">
                            <h1 className='flex my-5 items-center justify-center font-semibold text-md text-gray-700'>Final review: </h1>
                            <button className="btn my-2 btn-primary">Excellent</button>
                        </div>
                    </div>
                </div>
                <div className="card border-2 mt-2 bg-base-100 w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://i.ibb.co.com/MpvnJff/d-icon-cartoon-boy-glasses-smiling-wearing-yellow-sweater-concept-happiness-warmth-transparent-png-b.jpg"
                            alt="Shoes"
                            className=" w-20 h-20 shadow-xl rounded-full" />
                    </figure>

                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Scott</h2>
                        <p>The place is very hygienic and healthy and they also maintain all the criteria for quality food.</p>
                        <div className="card-actions">
                            <div className="card-actions">
                                <div className="rating rating-lg rating-half">
                                    <input type="radio" name="rating-10" className="rating-hidden" />
                                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                    <input
                                        type="radio"
                                        name="rating-10"
                                        className="mask mask-star-2 mask-half-1 bg-green-500"
                                        defaultChecked
                                    />
                                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                </div>
                            </div>

                        </div>
                        <div className="card-actions">
                            <h1 className='flex my-5 items-center justify-center font-semibold text-md text-gray-700'>Final review: </h1>
                            <button className="btn my-2 btn-primary">Amazing</button>
                        </div>
                    </div>
                </div>
                <div className="card border-2 mt-2 bg-base-100 w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://i.ibb.co.com/W0fDXPq/3d-icon-avatar-cartoon-hipster-character-stylish-pensive-man-with-beard-isolated-transparent-png-bac.jpg"
                            alt="Shoes"
                            className=" w-20 shadow-xl h-20 rounded-full" />
                    </figure>

                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Philip Lam</h2>
                        <p>I order some food from here the food quality and taste is very good and prce is also reasonable.</p>
                        <div className="card-actions">
                            <div className="card-actions">
                                <div className="rating rating-lg rating-half">
                                    <input type="radio" name="rating-10" className="rating-hidden" />
                                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                    <input
                                        type="radio"
                                        name="rating-10"
                                        className="mask mask-star-2 mask-half-1 bg-green-500"
                                        defaultChecked
                                    />
                                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
                                    <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
                                </div>
                            </div>

                        </div>
                        <div className="card-actions">
                            <h1 className='flex my-5 items-center justify-center font-semibold text-md text-gray-700'>Final review: </h1>
                            <button className=" btn btn-primary my-2">Salubrious</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='m-2 flex py-4 mb-4 justify-center items-center flex-col space-y-2 shadow-sm'>
                <h1 className='text-gray-700 space-y-8 font-bold text-3xl'>What is Your Opinion  About Us ?</h1>
                <img src="https://i.ibb.co.com/FqkMCvs/your-opinion-matters-symbol-survey-feedback-sign-chat-speech-bubble-d-icon-vector-your-opinion-matte.jpg" alt="" className='min-w-72 w-1/2 rounded-3xl shadow-lg min-h-72 bg-cover' />
            </div>
            <h1 className='text-gray-700 text-center font-bold text-3xl'>Submit Your Opinions</h1>
            <div className="hero ">
                <div className="hero-content w-full flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-96 max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit} className="card-body w-full">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name: </span>
                                </label>
                                <input type="name" name='name' placeholder="Type your name: " className="input input-bordered rounded-md" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email: </span>
                                </label>
                                <input type="email" name='email' placeholder="Type your email: " className="input input-bordered rounded-md" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Opinion: </span>
                                </label>
                                <textarea className='border-2 m-1 p-2 shadow-sm rounded-xl'  placeholder='Your Opinions: ' rows="4" name="opinion" id="" required></textarea>
                                
                            </div>
                            <div className="form-control mt-2 w-1/2 flex justify-center items-center">
                                <button className="btn btn-primary">Submit Opinion</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Extrato;