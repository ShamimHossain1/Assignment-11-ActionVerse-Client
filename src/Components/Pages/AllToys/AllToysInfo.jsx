import React from 'react';
import { Link } from 'react-router-dom';

const AllToysInfo = ({ toy }) => {
    //console.log(toy)
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
                    {sellerName}
                </td>
                <td class="px-6 py-4">
                   {subCategory}
                </td>
                <td class="px-6 py-4 text-yellow-400">
                {price} $
                   
                </td>
                <td class="px-6 py-4">
                {quantity}
                </td>
                <td class="px-6 py-4">
                <Link
                            to={`/toys/${_id}`}
                            >
                                <button href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Details</button>
                            </Link>
                </td>
</tr>
            


       
    );
};

export default AllToysInfo;