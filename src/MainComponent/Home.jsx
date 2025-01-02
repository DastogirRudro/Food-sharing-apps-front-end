import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import Extrato from './Extrato';
import axios from 'axios';
import HomeDetails from './HomeDetails';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Static-element/Loading';

const Home = () => {
    // const [homes, setHome] = useState([])
    // useEffect(() => {
    //     homeGet()
    // }, [])
    // const homeGet = async () => {
    //     const { data } = await axios.get('https://apps-server-part.vercel.app/foodHome')
    //     console.log(data)
    //     setHome(data)
    // }
    // console.log(homes)
    const { data: homes, isLoading } = useQuery({
        queryKey: ['homes'],
        queryFn: async () => {
            const { data } = await axios.get('https://apps-server-part.vercel.app/foodHome');
            return data;
        },
})
if (isLoading)return <Loading></Loading>
    return (
        <div>
            <Banner></Banner>

            <div className='container mx-auto shadow-md rounded-xl justify-center items-center bg-gray-100 py-8 pl-4 mt-2 mb-14 '>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-6 py-4'>
                    {
                        homes.map(home => <HomeDetails key={home._id} home={home} />)
                    }
                </div>
                <div className='flex items-center justify-center mt-10'>
                    <Link to='/availableFood'>
                        <button className="btn btn-wide bg-violet-700 border-2 rounded-xl shadow-lg text-lg text-white font-semibold ">Show All Foods
                        </button>
                    </Link>
                </div>
            </div>

            <Extrato></Extrato>

        </div>
    );
};

export default Home;