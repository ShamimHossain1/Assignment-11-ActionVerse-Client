import React from 'react';
import Banner from './Sections/Banner';
import FeaturedToys from './Sections/FeaturedToys';
import Gallery from './Sections/Gallery';
import Brands from './Sections/Brands';
import FAQ from './Sections/FAQ';
import RecentlyAdded from './Sections/RecentlyAdded';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedToys></FeaturedToys>
            <Gallery></Gallery>
            <Brands></Brands>
            <FAQ></FAQ>
            <RecentlyAdded></RecentlyAdded>
            
        </div>
    );
};

export default Home;