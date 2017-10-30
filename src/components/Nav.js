import React from 'react';
import { NavLink } from 'react-router-dom';
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
                    <li>
                        <NavLink exact activeClassName='active' to="/categories">
                            all                    
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName='active' to="/categories/react">
                            react                    
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName='active' to="/categories/redux">
                            redux                    
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName='active' to="/categories/udacity">
                            udacity                    
                        </NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;