import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherList from './../components/WeatherList';

class WeatherListContainer extends Component {

    render() {
        const { weather } = this.props;
        return (
            <WeatherList weather={weather} />
        );
    }
}

function mapStateToProps(state) {
    return {
        weather: state.weather
    }
}

export default connect(mapStateToProps)(WeatherListContainer);
