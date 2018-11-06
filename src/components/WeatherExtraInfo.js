import React from 'react';
import PropTypes from 'prop-types';

const WeatherExtraInfo = (props) => {
    const {humidity, wind} = props;
    
    return (
        <div>
            <span>{`${humidity}% -`}</span>
            <span>{`${wind} m/s wind`}</span>
        </div>
    );
};

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired
};

export default WeatherExtraInfo;