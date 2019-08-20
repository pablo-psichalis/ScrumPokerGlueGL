import React, { Component } from 'react';

export default class NameInput extends Component {
    render() {
        const name = this.props.name;

        return <h1>Hello, {name}</h1>;
    }
}