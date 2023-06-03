

import React, { memo, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import DataLoad from './DataLoad';
//import 'react-tabs/style/react-tabs.css';


const FeaturedToys = () => {
    
        
            const [toys, setToys] = useState([]);



    useEffect(() => {
        fetch('http://localhost:5000/allToys')
            .then(res => res.json())
            .then(data => setToys(data))
            .catch(error => console.error(error))
    }, [])


    const search = "DC"
    const search2 = "Marvel"
    const search3 = "Dragon Ball"


    //console.log(toys)

    return (
        <div data-aos="fade-right" data-aos-duration="1000"  className=''>
            <Tabs className={'mb-28'}>
                <TabList className={"flex justify-center gap-2"}>
                    <Tab className={"bg-blue-600 text-white px-2 py-1 rounded font-semibold "}><button>DC</button></Tab>
                    <Tab className={"bg-blue-600 text-white px-2 py-1 rounded font-semibold "}><button>Marvel</button></Tab>
                    <Tab className={"bg-blue-600 text-white px-2 py-1 rounded font-semibold "}><button>Dragon Ball</button></Tab>
                </TabList>

                <div className='flex justify-center mt-5'>
                
                </div>

                <TabPanel className={"grid lg:grid-cols-4 gap-10 lg:px-28 mt-6 px-5"}>
                    {
                        toys.filter((item) => {
                            return search === '' ? item : item.subCategory.includes(search)
                        }).slice(0, 4).map(data =>
                            <DataLoad
                                key={data._id}
                                toy={data}
                            ></DataLoad>
                        )

                    }
                </TabPanel>
                <TabPanel className={"grid lg:grid-cols-4 gap-10 lg:px-28 px-5"}>
                    {
                        toys.filter((item) => {
                            return search2 === '' ? item : item.subCategory.includes(search2)
                        }).slice(0, 4).map(data =>
                            <DataLoad
                                key={data._id}
                                toy={data}
                            ></DataLoad>
                        )

                    }
                </TabPanel>
                <TabPanel className={"grid lg:grid-cols-4 gap-10 lg:px-28 px-5 "}>
                    {
                        toys.filter((item) => {
                            return search3 === '' ? item : item.subCategory.includes(search3)
                        }).slice(0, 4).map(data =>
                            <DataLoad
                                key={data._id}
                                toy={data}
                            ></DataLoad>
                        )

                    }
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default FeaturedToys;