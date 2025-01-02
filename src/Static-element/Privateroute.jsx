import React, { useContext } from 'react';
import { AuthContext } from '../Provider/Authprovider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from './Loading';

const Privateroute = ({children}) => {
    const location = useLocation()
    console.log(location)
    const{user,loading} = useContext(AuthContext)
    if(loading) {
        return <Loading></Loading>
    }
    if(user && user?.email) {
        return children
    } 
 
    return <Navigate state={location.pathname} to='/login'></Navigate>
   
};

export default Privateroute;