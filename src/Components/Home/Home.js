import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import WorkHour from '../WorkHour/WorkHour';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WorkHour></WorkHour>
            <Services></Services>
        </div>
    );
};

export default Home;