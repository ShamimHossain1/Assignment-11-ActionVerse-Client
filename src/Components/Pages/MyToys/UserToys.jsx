import React from 'react';
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { Tooltip } from 'flowbite-react';


const UserToys = ({ toy, handleDelete }) => {

    const { _id, photo, ProductName, sellerEmail, sellerName, subCategory, price, rating, quantity, description } = toy
    return (
        <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <img className='w-10' src={photo} alt="" />
            </th>
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {ProductName}
            </th>
            
            <td class="px-6 py-4">
                {subCategory}
            </td>
            <td class="px-6 py-4 text-yellow-400">
                {price} $

            </td>
            <td class="px-6 py-4">
                {quantity}
            </td>
            <td class="px-6 py-4 flex gap-2">

                <Link to={`/updateToys/${_id}`}
                >
                    <button className='bg-blue-600 text-white font-semibold p-2 text-3xl rounded-lg '> <Tooltip content='Edit'><FaEdit></FaEdit></Tooltip> </button></Link>
                <Link>
                <button onClick={() => handleDelete(_id)} className='bg-red-600 text-white font-semibold p-2 text-3xl rounded-lg '> <Tooltip content='Delete'><RiDeleteBin2Fill></RiDeleteBin2Fill></Tooltip></button></Link>

            </td>
        </tr>

    );
};

export default UserToys;