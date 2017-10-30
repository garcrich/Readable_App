import React from 'react';
import { Link } from 'react-router-dom';

class TopicsOptions extends React.Component {
    render() {
        return (
            <div className="topics-options">
                <h1 className="h1">{this.props.sortItem}</h1>
                <h2 className="h2">sort by:</h2>
                <select>
                <option></option>
                    <option>option 1</option>
                    <option>option 2</option>
                </select>
                <Link to={"/topic-form"}>
                <button className="btn btn-post">post {this.props.postType}</button>
                </Link>
            </div>
        )
    }
}

export default TopicsOptions;