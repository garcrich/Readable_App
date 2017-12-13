import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../images/logo.png'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchCategories } from '../actions'

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentWillMount() {
        fetchCategories();
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
            {
                this.props.categories.length && 
                this.props.categories.map((category) => {
                        return (
                            <li className={category.path} key={category.name} >
                            <NavLink exact activeClassName='active' to={"/categories/" + category.name}>
                            {category.name}
                            </NavLink>
                            </li>
                        )
                    })
                }
            {/*{this.state.categories.map((catagory) => {
                return (
                    <li className={catagory.path} key={catagory.name} >
                    <NavLink exact activeClassName='active' to={"/categories/" + catagory.name}>
                    {catagory.name}
                    </NavLink>
                    </li>
                )
            })
            <li>{this.props.posts}</li>
        } */}
        
                </ul>

            </nav>

        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchCategories : dispatch(fetchCategories())
    }
}
const mapStateToProps = state => state


export default connect(mapStateToProps, mapDispatchToProps)(Navbar);