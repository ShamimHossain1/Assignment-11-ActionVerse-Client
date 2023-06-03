import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import UserToys from './UserToys';
import Swal from 'sweetalert2'


import { Avatar, Tooltip } from 'flowbite-react';
import { AuthContext } from '../../AuthProver/AuthProvider';
import useTitle from '../Hook/UseTitle';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    useTitle('ActionVerse | My Toys')


    const url = `https://server-site-shamimhossain1.vercel.app/toys?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [url]);


    const handleDelete = id => {
        const proceed = confirm('Are You sure you want to delete');
        if (proceed) {
            fetch(`https://server-site-shamimhossain1.vercel.app/toys/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    //console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Toys Deleted successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                        const remaining = toys.filter(toy => toy._id !== id);
                        setToys(remaining);
                    }
                })
        }
    }

    console.log(toys)
    return (
        <div>
            <div className='flex items-center flex-col mt-20 '>
                <div>
                    <Tooltip content={user?.displayName}>
                        <img className='rounded-full'  src={user?.photoURL}  alt="" />
                        </Tooltip>
                </div>
                <h1 className='font-semibold'>Hello, {user?.displayName}</h1>
            </div>
            
            <div className='px-5 md:mx-28 mb-5 mt-10 flex justify-center md:justify-end'>
                <Link to="/AddAToy"><button className='bg-blue-600 text-white font-semibold px-3 py-2 rounded-lg'>Add New</button></Link>
            </div>
            <div class="relative overflow-x-auto mx-10 mt-10 shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs  uppercase bg-blue-600 dark:bg-gray-700 text-white">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product Image
                </th>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                
                <th scope="col" class="px-6 py-3">
                    Sub-Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                Available Quantity
                </th>
                <th scope="col" class="px-6 py-3">
                Action
                </th>
            </tr>
        </thead>
        <tbody>


        {
                    toys.map(toy => <UserToys
                        key={toy._id}
                        toy={toy}
                        handleDelete={handleDelete}

                    ></UserToys>)
                }



            
            
            
        </tbody>
    </table>
</div>
                
        
        </div>
    );
};

export default MyToys;