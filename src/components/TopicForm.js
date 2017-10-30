import React from 'react';
import { Link } from 'react-router-dom';

class TopicForm extends React.Component {
    render() {
            return (
                <form className="form">
                <h1 className="h1">Topic</h1>
                <input/>
                <h1 className="h1">Name</h1>
                <input/>
                <h1 className="h1">Body</h1>
                <textarea/>
                <div className="form-buttons">
                    <button className="btn btn-post form-post">post</button>

                    <Link to="/categories">
                    <button className="btn btn-cancel">cancel</button>
                    </Link>
                </div>
                </form>
        )
    }
}

export default TopicForm;