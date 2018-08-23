import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
    return(
        <header>
            <h1>Ezequiel Espinoza</h1>
            <h2>A creative archive</h2>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/digital-art'>Digital</Link></li>
                    <li><Link to='/mixed-media-art'>Mixed Media</Link></li>
                    <li><Link to='/traditional-art'>Traditional</Link></li>
                    <li><Link to='/sketchbook-art'>Sketchbook</Link></li>
                    <li><Link to='/all'>All</Link></li>
                </ul>
            </nav>
        </header>
    );
    };
}

export default Header;