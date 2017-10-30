import React from 'react';
import { Link } from 'react-router-dom';

class CommentHeader extends React.Component {
    render() {
            return (
            <div>
                <div className="comment-header">
                    <h1 className="h1">{this.props.title}</h1>
                    <Link to="/categories">
                    <button className="btn-delete"></button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default CommentHeader;