import React from 'react';
import CommentHeader from './CommentHeader';


class CommentBlock extends React.Component {
    render() {
        return (
            <div>
                <span className="comment-padding">
                <CommentHeader  title="Ricky Garcia"/>
                </span>
                <div className="com-block">
                    <div className="com-col-1">
                        <a className="up-button">
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
                <div className="edit-topic-comment comment-edit-btn--margin">
                    <button className="btn btn-edit">edit topic</button>
                </div>
            </div>
        )
    }
}

export default CommentBlock;