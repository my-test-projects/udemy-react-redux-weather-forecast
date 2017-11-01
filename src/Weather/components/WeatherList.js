import React, { Component } from 'react';
import Chart from './Chart';

export default class WeatherList extends Component {

    renderWeather(data) {
        const name = data.city.name;
        const temps = data.list.map(item => item.main.temp - 273);
        const pressures = data.list.map(item => item.main.pressure);
        const humidity = data.list.map(item => item.main.humidity);

        return (
          <tr key={name}>
              <td>{name}</td>
              <td><Chart color="red" data={temps} units="C" /></td>
              <td><Chart color="blue" data={pressures} units="pHa" /></td>
              <td><Chart data={humidity} units="%" /></td>
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
                    <td>Temperature (C)</td>
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
