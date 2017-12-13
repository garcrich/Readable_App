import React from 'react';
import TopicsOptions from './TopicsOptions';
import CommentBlock from './CommentBlock';
import Moment from 'moment';

class SingleTopicBody extends React.Component {
    render() {
        return (
            <div>
                <div className="com-block">
                    <div className="com-col-1">
                        <a className={`up-button up-${this.props.id}`}>
                        </a>
                        <p>{this.props.voteScore}</p>
                        <a className={`down-button down-${this.props.id}`}>
                        </a>
                    </div>
                    <div className="com-col-2">
                        <p>{this.props.body}</p>
                        <small>{Moment(this.props.timeStamp).format('MMMM Do H:mm a')}</small>
                    </div>
                </div>
                <div className="edit-topic comment-edit-btn--margin">
                    <button className="btn btn-edit">edit topic</button>
                </div>
                <hr className="comment-spacer" />
                <TopicsOptions sortItem="Comments" postType="comment" />
                <CommentBlock />
            </div>
        )
    }
}

export default SingleTopicBody;