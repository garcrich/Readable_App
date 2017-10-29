import React from 'react';
import logo from '../images/logo.png';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="nav primary-color">
                <div className="logo">
                    <img src={logo} width="100"alt="Logo "/>
                </div>
            
                <h1 className="lg-header">Categories</h1>
                <ul className="md-header">
                    <li>all</li>
                    <li>react</li>
                    <li>redux</li>
                    <li>udacity</li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;