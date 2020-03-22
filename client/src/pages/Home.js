import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from './config/Fire';

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
            <div className="col-md-6">
            <h1>You are Home</h1>
            </div>
        );
    }
}

export default Home;