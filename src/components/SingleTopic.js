import React from 'react';
import SingleTopicBody from './SingleTopicBody';
import CommentHeader from './CommentHeader';

class SingleTopic extends React.Component {
    render() {
            return (
            <div>
                <CommentHeader title="React is the cat's Meow"/>
                <SingleTopicBody/>
            </div>
        )
    }
}

export default SingleTopic;