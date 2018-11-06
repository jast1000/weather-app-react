import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';

import {
    CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY
} from '../constants/weathers';

const icons = {
    [CLOUD]: 'day-cloud',
    [CLOUDY]: 'day-cloudy',
    [SUN]: 'day-sunny',
    [RAIN]: 'day-rain',
    [SNOW]: 'day-snow',
    [WINDY]: 'day-windy'
};

const getWeatherIcon = state => {
    let icon = icons[state];
    icon = icon ? icon : 'day-sunny';
    return (
        <WeatherIcons name={icon} size="2x" />
    );
};

const WeatherTemperature = (props) => {
    const {temperature, state} = props;
    return (
        <div>
            {getWeatherIcon(state)}      
            <span>{`${temperature}°`}</span>
        </div>
    );
};

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    state: PropTypes.string.isRequired
};

export default WeatherTemperature;