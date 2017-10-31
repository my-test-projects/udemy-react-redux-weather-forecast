import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state ={
            term: ''
        };

        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    render () {
        return (
            <form className="input-group" onSubmit={this.onFormSubmit}>
                <input
                    placeholder="Enter city for five days forecast"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}/>

                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Add</button>
                </span>
            </form>
        );
    }

    onFormSubmit(event) {
        event.preventDefault();

        this.props.onSearchCity(this.state.term);
        this.setState({ term: '' });
    }

    onInputChange(event) {
        this.setState({
            term: event.target.value
        });
    }
}

SearchBar.propsTypes = {
  onSearchCity: PropTypes.func.isRequired
};

export default SearchBar;
