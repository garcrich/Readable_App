import React from 'react';

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
                    <button className="form-post">post</button>
                    <button className="form-cancel">cancel</button>
                </div>
                </form>
        )
    }
}

export default TopicForm;