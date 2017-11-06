import React from 'react';
import { Link } from 'react-router-dom';

class TopicsOptions extends React.Component {

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
            }
        )
    }
    
    render() {
        
        
        return (
            <div className="topics-options">
                <h1 className="h1">{this.props.sortItem}</h1>
                <h2 className="h2">sort by:</h2>
                <select>
                <option></option>
                {this.state.categories.map((catagory) => {
                    return (
                        <option key={catagory.name}>{catagory.name}</option>
                        )
                    })
                }
                </select>
                <Link to={"/topic-form"}>
                <button className="btn btn-post">post {this.props.postType}</button>
                </Link>




            </div>
        )
    }
}

export default TopicsOptions;