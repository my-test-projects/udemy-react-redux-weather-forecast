import React, { Component } from 'react';
import Chart from './Chart';

export default class WeatherList extends Component {

    renderWeather(data) {
        const name = data.city.name;
        const temps = data.list.map(item => item.main.temp);
        const pressures = data.list.map(item => item.main.pressure);
        const humidity = data.list.map(item => item.main.humidity);

        return (
          <tr key={name}>
              <td>{name}</td>
              <td><Chart color="red" data={temps} /></td>
              <td><Chart color="blue" data={pressures} /></td>
              <td><Chart data={humidity} /></td>
          </tr>
        );
    }

    render() {
        const { weather } = this.props;

        return (
          <table className="table table-hover">
              <thead>
                <tr>
                    <td>City</td>
                    <td>Temperature (K)</td>
                    <td>Pressure (pHa)</td>
                    <td>Humidity (%)</td>
                </tr>
              </thead>
              <tbody>
                { weather.map(data => this.renderWeather(data)) }
              </tbody>
          </table>
        );
    }
}
