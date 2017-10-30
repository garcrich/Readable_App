import React from 'react';
import { Link } from 'react-router-dom';

class Topic extends React.Component {
    render() {
            return (
            <div className="com-block">
                <div className="com-col-1">
                    <a className="up-button">
                    </a>
                    <p>12</p>
                    <a className="down-button">
                    </a>
                </div>
                <div className="com-col-2">
                    <Link to="/single-topic">
                        <h3>React is the cat's meow</h3>
                    </Link>
                    <p>I just can’t contain my love for  react. It’s truely amazing. I was able to save my marriage because of React.js. Honestly, who else can say that?  Just kidding,I’m sure hundreds of devs can. #NotSponsored</p>
                    <small>Oct. 14 2017 3:53p.m.</small>
                </div>
            </div>
        )
    }
}

export default Topic;