import React from 'react';

const WeatherExtraInfo = (props) => {
    const {humidity, wind} = props;
    
    return (
        <div>
            <span>{`${humidity}% -`}</span>
            <span>{`${wind} m/s wind`}</span>
        </div>
    );
}

export default WeatherExtraInfo;