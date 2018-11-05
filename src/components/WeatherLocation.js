import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

const WeatherLocation = () => (
    <div>
        <Location city={'Fortín de las flores'} />
        <WeatherData />
    </div>
);

export default WeatherLocation;