import React from 'react';
import { Link } from 'react-router-dom';
//import axios from 'axios';


class WelcomeScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            categories: [],
            postUnfilteredDetails: [],
        };
    }

    componentDidMount() {

            fetch(
                "http://localhost:3001/posts",
            {
                method: 'GET',
                headers: {'Authorization': 'super-secure-authorization'}
            })
            .then(results => {
                 return results.json()
            })
            .then((responseData) => {
                let postUnfilteredDetails = responseData
                //console.log(...postUnfilteredDetails);
                this.setState({
                    postUnfilteredDetails: [...postUnfilteredDetails]
                })
            })
        }
    


    render() {
        console.log(this.state.categories)
        console.log(this.state.postUnfilteredDetails)

        return (
            <div className="welcome-screen">
                <div className="welcome-header">
                    <h1 className="h1">Welcome</h1>
                </div>

                <div className="welcome-options">
                    
                    <Link to="/categories">
                        <button className="btn btn-edit browse-topics">Browse Topics</button>
                    </Link>

                    <Link to="topic-form">
                        <button className="btn btn-post post-a-topic">Post a Topic</button>
                    </Link>

                </div>

            </div>
        )
    }
}

export default WelcomeScreen;