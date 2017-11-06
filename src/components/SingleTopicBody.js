import React from 'react';
import TopicsOptions from './TopicsOptions';
import CommentBlock from './CommentBlock';

class SingleTopicBody extends React.Component {
    render() {
        return (
            <div>
                <div className="com-block">
                    <div className="com-col-1">
                        <a className="up-button ">
                        </a>
                        <p>12</p>
                        <a className="down-button">
                        </a>
                    </div>
                    <div className="com-col-2">
                        <p>I just can’t contain my love for  react. It’s truely amazing. I was able to save my marriage because of React.js. Honestly, who else can say that?  Just kidding,I’m sure hundreds of devs can. #NotSponsored</p>
                        <small>Oct. 14 2017 3:53p.m.</small>
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