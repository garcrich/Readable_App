import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../images/logo.png';

class Navbar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            categories: []
        };
    }

    componentDidMount() {
        fetch(
            "http://localhost:3001/categories",
            {
                method: 'GET',
                headers: { 'Authorization': 'super-secure-authorization' }
            })
            .then(results => {
                return results.json()
            })
            .then((responseData) => {
                let categories = responseData.categories
                this.setState({
                    categories: [...categories]
                })
            })
    }

    render() {
        return (

            <nav className="nav primary-color">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} width="100" alt="Logo " />
                    </Link>
                </div>

                <h1 className="lg-header">Categories</h1>
                <ul className="md-header">
                    <li>
                        <NavLink exact activeClassName='active' to="/categories">
                            all
                        </NavLink>
                    </li>
                {this.state.categories.map((catagory) => {
                    return (
                        <li className={catagory.path} key={catagory.name} >
                            <NavLink exact activeClassName='active' to={"/categories/" + catagory.name}>
                                {catagory.name}
                            </NavLink>
                        </li>
                        )
                    })
                }

                </ul>
            </nav>
            
        )
    }
}

export default Navbar;