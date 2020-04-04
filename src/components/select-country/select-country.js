import React, { Component } from 'react';

import {Dropdown} from 'reactjs-dropdown-component';

import './select-country.scss';

export default class SelectCountry extends Component {
    state = {
        location: [
            {
                id: 0,
                title: 'USA',
                selected: false,
                key: 'location',
            },
            {
                id: 1,
                title: 'Ukraine',
                selected: false,
                key: 'location',
            },
            {
                id: 2,
                title: 'Germany',
                selected: false,
                key: 'location',
            }
        ]
    };

    resetThenSet = (id) => {
        let location = [...this.state.location];
        location.forEach(item => item.selected = false);
        location[id].selected = true;
    };

    render() {
        return <Dropdown
            className='select-country'
            title="Select country"
            resetThenSet={this.resetThenSet}
            list={this.state.location}/>
    }


};