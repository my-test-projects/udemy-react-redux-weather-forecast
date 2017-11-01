import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchBar from './../components/SearchBar';
import { fetchWeather } from './../actions/searchActions';


class SearchBarContainer extends Component {

    render () {
        const { fetchWeather } = this.props;

        return (
            <SearchBar onSearchCity={fetchWeather} />
        );
    }
}

/*function mapPropsToState(state) {
    return {
        weather: state.weather
    }
}*/

function mapDispatchToState(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToState)(SearchBarContainer);
