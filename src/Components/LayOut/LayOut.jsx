import React from 'react';
import Header from '../Shared/Header';
import { Outlet } from 'react-router-dom';

import Foooter from '../Shared/Footer';

const LayOut = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
           <Foooter></Foooter>
        </div>
    );
};

export default LayOut;