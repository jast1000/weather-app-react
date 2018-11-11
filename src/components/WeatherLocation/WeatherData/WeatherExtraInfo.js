import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const WeatherExtraInfo = (props) => {
    const {humidity, wind} = props;
    
    return (
        <div className="weatherExtraInfoContainer">
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