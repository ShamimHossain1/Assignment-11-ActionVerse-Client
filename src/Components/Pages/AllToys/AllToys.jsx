import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { Dropdown } from 'flowbite-react';
import useTitle from '../Hook/UseTitle';
import AllToysInfo from './AllToysInfo';

const AllToys = () => {
    const [toys, setToys] = useState([]);
    const [visible, setVisible] = useState(20);
    useTitle('ActionVerse | All Toys')
console.log(toys.length)

    useEffect(() => {
        fetch('http://localhost:5000/allToys')
            .then(res => res.json())
            .then(data => setToys(data))
            .catch(error => console.error(error))
    }, [])

    //console.log(toys)
    const [search, setSearch] = useState('')
    const [message, setMessage] = useState('');

    const sortByPrice = () => {
        const sortedToys = [...toys].sort((a, b) => a.price - b.price);
        setToys(sortedToys);
    };
    const sortByPriceH = () => {
        const sortedToys = [...toys].sort((a, b) => b.price - a.price);
        setToys(sortedToys);
    };


    //console.log(short)
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 100);
    };
    let button;
    if (visible === 20) {
        button = <button  className='font-semibold mt-5 mb-16 bg-blue-700 text-center mx-auto flex justify-center px-5 py-2 rounded text-white' onClick={showMoreItems}>Show More</button>
    }
    return (
        <div>
            <div className='lg:mx-52 lg:px-52 px-4 mt-16 mb-10'>
                <form>
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-blue-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>

                        <input onChange={e => setMessage(e.target.value)}
                            type="text"
                            id="message"
                            name="message" class="block w-full p-4 pl-10 text-xl text-gray-500 border border-blue-600 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Action Figures" required />


                        <Link to={`/search/${message}`} className=' text-white hover:text-white absolute right-2.5 bottom-2.5 bg-blue-600 hover:bg-[#9D1512] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Search</Link>
                    </div>
                </form>
            </div>

            <div className='px-5 lg:px-16 flex justify-end gap-2'>
                <div className='flex justify-end '>

                    

                    <Dropdown 
                        label="By Price"
                        dismissOnClick={false}
                    >
                        <Dropdown.Item>
                        <button className=' ' onClick={sortByPrice}>Low To High</button>
                        </Dropdown.Item>
                        <Dropdown.Item>
                        <button className='' onClick={sortByPriceH}>High To Low</button>
                        </Dropdown.Item>
                        
                    </Dropdown>
                    
                    
                </div>
                <div className='flex justify-end md:pr-12 border-[#7E90FE]'>
                    <select className='rounded' onChange={(e) => setSearch(e.target.value)}>
                        <option value="">All</option>
                        <option value="DC">DC</option>
                        <option value="Marvel">Marvel</option>
                        <option value="Dragon Ball">Dragon Ball</option>


                    </select>
                </div>

            </div>



            <div className='grid lg:grid-cols-4 gap-10 lg:px-28 mt-6 p-5 mb-20'>
                {
                    toys.slice(0, visible).filter((item) => {
                        return search === '' ? item : item.subCategory.includes(search)
                    }).map(toy => <AllToysInfo
                        key={toy._id}
                        toy={toy}

                    ></AllToysInfo>)
                }
            </div>
            {button}
        </div>
    );
};

export default AllToys;