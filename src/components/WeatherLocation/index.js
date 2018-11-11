import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import { SUN, WINDY } from '../../constants/weathers';

const data = {
    temperature: 22,
    state: SUN,
    humidity: 79,
    wind: 12
};

const data2 = {
    temperature: 14,
    state: WINDY,
    humidity: 63,
    wind: 10
};

class WeatherLocation extends Component {
    
    constructor() {
        super();
        this.state = {
            city: 'Huatusco',
            weatherData: data
        };
    }
    
    render() {
        const { city, weatherData } = this.state;
        return (
            <div>
                <Location city={city} />
                <WeatherData data={weatherData} />
                <button onClick={this.updateWeather}>Actualizar</button>
            </div>
        );
    }

    updateWeather = () => {
        console.log('Actualizando estado del tiempo');
        this.setState({
            weatherData: data2
        });
    }
}

export default WeatherLocation;