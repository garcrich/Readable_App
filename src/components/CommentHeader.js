import React from 'react';

class CommentHeader extends React.Component {
    render() {
            return (
            <div>
                <div className="comment-header">
                    <h1 className="h1">{this.props.title}</h1>
                    <button className="btn-delete"></button>
                </div>
            </div>
        )
    }
}

export default CommentHeader;