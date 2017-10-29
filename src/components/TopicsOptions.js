import React from 'react';

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
                <button className="btn btn-post">post topic</button>
            </div>
        )
    }
}

export default TopicsOptions;