import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <footer>
                <nav>
                    <ul className='footer-list'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to='/digital-art'>Digital</Link></li>
                        <li><Link to='/mixed-media-art'>Mixed Media</Link></li>
                        <li><Link to='/traditional-art'>Traditional</Link></li>
                        <li><Link to='/sketchbook-art'>Sketchbook</Link></li>
                        <li><Link to='/all'>All</Link></li>
                    </ul>
                </nav>
            </footer>
        );
    };
}

export default Footer;