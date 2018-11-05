import React from 'react';
import WeatherIcons from 'react-weathericons';

const icons = {
    sunny: 'day-sunny',
    fog: 'day-fog'
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
}

export default WeatherTemperature;