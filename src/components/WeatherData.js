import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';

const WeatherData = () => (
    <div>
        <WeatherTemperature temperature={20} state={'fog'} />
        <WeatherExtraInfo humidity={80} wind={10} />
    </div>
);

export default WeatherData;