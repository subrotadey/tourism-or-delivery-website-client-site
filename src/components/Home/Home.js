import React from 'react';
import MainBanner from '../MainBanner/MainBanner';
import Tours from '../Tours/Tours';
import Offers from './Offers/Offers';
import TopBanner from './TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <MainBanner></MainBanner>
            <Offers></Offers>
            <Tours></Tours>
        </div>
    );
};

export default Home;