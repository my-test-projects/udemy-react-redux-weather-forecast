import React, { Component } from 'react';
import Chart from './Chart';
import Map from './Map';

export default class WeatherList extends Component {

    renderWeather(data) {
        const name = data.city.name;
        const temps = data.list.map(item => item.main.temp - 273);
        const pressures = data.list.map(item => item.main.pressure);
        const humidity = data.list.map(item => item.main.humidity);
        const { lon, lat } = data.city.coord;

        return (
          <tr key={name}>
              <td>
                  <Map lat={lat}
                       lng={lon}
                       containerElement={<div style={{ height: `200px`, width: `200px` }} />}
                       mapElement={<div style={{ height: `100%`, width: `100%` }} />}/>
              </td>
              <td><Chart color="red" data={temps} units="C" /></td>
              <td><Chart color="blue" data={pressures} units="pHa" /></td>
              <td><Chart color="green" data={humidity} units="%" /></td>
          </tr>
        );
    }

    render() {
        const { weather } = this.props;

        return (
          <table className="table table-responsive table-hover">
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
