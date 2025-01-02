import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const FoodRequest = () => {
    const { reqemail } = useParams();

    console.log(reqemail)
    const [manage, setManage] = useState([])
    useEffect(() => {
        manageData()
    }, [reqemail])
    const manageData = async () => {
        const { data } = await axios.get(`https://apps-server-part.vercel.app/request/${reqemail}`,{withCredentials:true})
        setManage(data)
        console.log(data)
    }
    // console.log(manage)
   
    return (
        <div>
            <div className="container mx-auto overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        {/* row 1 */}
                        <tr>
                            <th>number</th>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Request Date</th>
                            <th>Expired Date</th>
                        </tr>
                       
                    </thead>
                    <tbody>
                        {
                           manage.map((man,index) =>(<tr key={index}>
                            <td>{index+1}</td>
                            <td>{man.name}</td>
                            <td>{man.location}</td>
                            <td>{man.requestDate}</td>
                            <td>{man.ExpiredDate}</td>
                        </tr> ))
                        }
                        
                    </tbody>
                   
                </table>
            </div>
        </div>
    );
};

export default FoodRequest;