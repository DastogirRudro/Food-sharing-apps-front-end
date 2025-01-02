import React from 'react';
import Allfood from './Allfood'
import { useState, useEffect } from "react";
import axios from 'axios';
const AvailableFood = () => {
    const [foods, setFoods] = useState([])
    const [search, setSearch] = useState('')
    const [sort, setSort] = useState('')
    const [gridCols, setGridCols] = useState('grid-cols-3');
    const toggleSortOrder = () => {
        setSort((prevSort) => (prevSort === "asc" ? "desc" : "asc"));
    };
    useEffect(() => {
        const fetchAll = async () => {
            const { data } = await axios.get(`https://apps-server-part.vercel.app/food?&search=${search}&sort=${sort}`)
            setFoods(data)
        }
        fetchAll()
    }, [search, sort])

    console.log(foods)
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const searchh = form.value
        console.log(searchh)
        setSearch(searchh)
    }
    const toggleGridCols = () => {
        setGridCols((prevGrid) => (prevGrid === 'grid-cols-1 md:grid-cols-3' ? 'grid-cols-2 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-3'));
    };
    return (
        <div>
            <div className='my-4 container w-full mx-auto rounded-2xl flex-col lg:flex-row md:flex-row gap-3 flex justify-center items-center'>
                <label className="input input-bordered flex justify-center items-center gap-2">
                    <input onChange={handleSubmit} type="text" name='search' className="grow w-3/4" placeholder="Search As Food Name" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>
                <div className='flex gap-4 mx-2'>
                    <button
                        onClick={toggleSortOrder}
                        className="btn btn-primary px-4 py-2 text-sm font-bold rounded-lg"
                    >
                        {sort === "asc" ? "Sort as Date" : "Sort Here"}
                    </button>
                </div>
                <button   onClick={toggleGridCols} className="btn btn-primary px-4 py-2 text-sm font-bold rounded-lg"> State Change
                </button>
            </div>
            <div className='flex items-center justify-center'>
            <div className={`grid ${gridCols} my-14 justify-center items-center gap-6 container mx-auto rounded-xl px-4 py-6`}>
                {foods.map((food) => (
                    <Allfood key={food._id} food={food} />
                ))}
            </div>
            </div>
        </div>
    );
};

export default AvailableFood;